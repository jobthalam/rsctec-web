"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Container from "@/components/ui/Container/Container";
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

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, SLIDE_DURATION);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className={styles.hero}>
      <video
        className={styles.bgVideo}
        autoPlay
        loop
        muted
        playsInline
        poster="/images/cyberguard/bg-home5.jpg"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>
      <div className={styles.videoOverlay} />
      <div className={styles.overlay} />

      <Container className={styles.container}>
        <div className={styles.fadeWrapper}>
          {SLIDES.map((slide, idx) => {
            const isActive = currentSlide === idx;
            return (
              <div
                key={slide.id}
                className={`${styles.slide} ${isActive ? styles.activeSlide : ""}`}
                aria-hidden={!isActive}
              >
                <div className={styles.content}>
                  <div className={styles.subtitleWrapper}>
                    <span className={styles.subtitle}>{slide.subtitle}</span>
                  </div>

                  <h1 className={styles.title}>{slide.title}</h1>

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
