import React from "react";
import Image from "next/image";
import Container from "@/components/ui/Container/Container";
import styles from "./Hero.module.scss";

const HERO_FEATURES = [
  {
    icon: "/images/cyberguard/cyber-security-min-70x70.png",
    title: "Network Security",
  },
  {
    icon: "/images/cyberguard/encryption-min-70x70.png",
    title: "Data Encryption",
  },
  {
    icon: "/images/cyberguard/fingerprint-min-70x70.png",
    title: "Identity & Access",
  },
  {
    icon: "/images/cyberguard/monitoring-min-70x70.png",
    title: "Security Monitoring",
  },
  {
    icon: "/images/cyberguard/cloud-storage-min-70x70.png",
    title: "Backup & Recovery",
  },
  {
    icon: "/images/cyberguard/settings-min-70x70.png",
    title: "Security Configuration",
  },
];

export default function Hero() {
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
        <div className={styles.content}>
          <div className={styles.subtitleWrapper}>
            <span className={styles.subtitle}>
              DPDP Act, 2023 · Full Compliance Due 13 May 2027
            </span>
          </div>

          <h1 className={styles.title}>
            Delivering Ingenious Perspective to Your Information Security & Data
            Protection
          </h1>

          <p className={styles.description}>
            RS Consulting helps Indian businesses become DPDPA-ready and
            cyber-resilient by securing the systems that hold personal data, not
            just the paperwork around it.
          </p>

          <div className={styles.ctaRow}>
            <a href="/contact" className={styles.primaryBtn}>
              Book a Free DPDPA Readiness Assessment
            </a>
            <a href="/solutions" className={styles.secondaryBtn}>
              Explore Solutions
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
