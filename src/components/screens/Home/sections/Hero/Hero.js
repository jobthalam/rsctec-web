"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Container from "@/components/ui/Container/Container";
import { useApp } from "@/context/AppContext";
import styles from "./Hero.module.scss";

const SLIDE_DURATION = 5500;

const SLIDES = [
  {
    id: 1,
    subtitle: null,
    title: "Resilient Cybersecurity & Data Privacy for Regulated Enterprises",
    description:
      "Backed by 40+ years of leadership across business verticals including banking and finance, we engineer the technical controls that stop breaches and offer advisory services to help align with evolving regulatory requirements around information security and data privacy",
    primaryCta: {
      label: "GET STARTED",
      href: "/contact",
    },
    secondaryCta: {
      label: "Explore Solutions",
      href: "/solutions",
    },
  },
];

export default function Hero() {
  const [currentSlide] = useState(0);
  const videoRef = useRef(null);
  const { setVideoLoaded, openEnquiryModal } = useApp();

  const handleVideoReady = () => {
    setVideoLoaded(true);
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Fix iOS WebKit autoplay requirement: defaultMuted must be true
    video.defaultMuted = true;
    video.muted = true;
    video.setAttribute("muted", "");
    video.setAttribute("playsinline", "");
    video.setAttribute("webkit-playsinline", "");

    if (video.readyState >= 1) {
      handleVideoReady();
    }

    const startPlayback = () => {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // iOS Low Power Mode / gesture restriction fallback
          const unlock = () => {
            video.play().catch(() => {});
            cleanup();
          };

          const cleanup = () => {
            window.removeEventListener("touchstart", unlock);
            window.removeEventListener("touchend", unlock);
            window.removeEventListener("scroll", unlock);
            window.removeEventListener("click", unlock);
          };

          window.addEventListener("touchstart", unlock, { once: true, passive: true });
          window.addEventListener("touchend", unlock, { once: true, passive: true });
          window.addEventListener("scroll", unlock, { once: true, passive: true });
          window.addEventListener("click", unlock, { once: true, passive: true });
        });
      }
    };

    startPlayback();
  }, []);

  return (
    <section className={styles.hero}>
      <video
        ref={videoRef}
        className={styles.bgVideo}
        src="/hero-video.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster="/images/cyberguard/bg-home5.jpg"
        onLoadedMetadata={handleVideoReady}
        onLoadedData={handleVideoReady}
        onCanPlay={handleVideoReady}
        onPlaying={handleVideoReady}
        onError={handleVideoReady}
      />
      <div className={styles.videoOverlay} />
      <div className={styles.overlay} />

      <Container className={styles.container}>
        <div className={styles.fadeWrapper}>
          {SLIDES.map((slide, idx) => {
            const isActive = currentSlide === idx;
            const words = slide.title.split(" ");
            return (
              <div
                key={slide.id}
                className={`${styles.slide} ${isActive ? styles.activeSlide : ""}`}
                aria-hidden={!isActive}
              >
                <div
                  key={isActive ? `${slide.id}-active` : `${slide.id}-idle`}
                  className={styles.content}
                >
                  {slide.subtitle && (
                    <div className={styles.subtitleWrapper}>
                      <span className={styles.subtitle}>{slide.subtitle}</span>
                    </div>
                  )}

                  <h1 className={styles.title}>
                    {words.map((word, wIdx) => (
                      <React.Fragment key={wIdx}>
                        <span className={styles.word}>{word}</span>
                        {wIdx < words.length - 1 ? " " : ""}
                      </React.Fragment>
                    ))}
                  </h1>

                  <p className={styles.description}>{slide.description}</p>

                  <div className={styles.ctaRow}>
                    <button
                      type="button"
                      onClick={() => openEnquiryModal("Get Started")}
                      className={styles.primaryBtn}
                    >
                      {slide.primaryCta.label}
                    </button>
                    <Link href={slide.secondaryCta.href} className={styles.secondaryBtn}>
                      {slide.secondaryCta.label}
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
