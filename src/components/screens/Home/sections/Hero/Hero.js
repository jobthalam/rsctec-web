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
    subtitle: "We Are Here for",
    title: "Delivering ingenious perspective to your information security",
    description:
      "RS Consulting helps enterprises build resilient cyber defenses with technical controls, continuous assessments, and proven partner technologies.",
    primaryCta: {
      label: "Book a Free Security Assessment",
      href: "/contact",
    },
    secondaryCta: {
      label: "Explore Solutions",
      href: "/solutions",
    },
  },
  {
    id: 2,
    subtitle: "DPDP Act, 2023 · Full compliance due 13 May 2027",
    title: "Delivering ingenious perspective to your data protection.",
    description:
      "RS Consulting helps Indian businesses become DPDPA-ready by securing the systems that hold personal data, not just the paperwork around it.",
    primaryCta: {
      label: "Book a Free DPDPA Readiness Assessment",
      href: "/contact",
    },
    secondaryCta: {
      label: "Explore DPDPA Services",
      href: "/services",
    },
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const videoRef = useRef(null);
  const { setVideoLoaded } = useApp();

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

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, SLIDE_DURATION);
    return () => clearInterval(timer);
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
                  <div className={styles.subtitleWrapper}>
                    <span className={styles.subtitle}>{slide.subtitle}</span>
                  </div>

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
                    <Link href={slide.primaryCta.href} className={styles.primaryBtn}>
                      {slide.primaryCta.label}
                    </Link>
                    <Link href={slide.secondaryCta.href} className={styles.secondaryBtn}>
                      {slide.secondaryCta.label}
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className={styles.progressContainer} aria-hidden="true">
          <div
            key={currentSlide}
            className={styles.progressBar}
            style={{ animationDuration: `${SLIDE_DURATION}ms` }}
          />
        </div>
      </Container>
    </section>
  );
}
