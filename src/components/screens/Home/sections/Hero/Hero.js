import React from "react";
import Image from "next/image";
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
      <div className={styles.overlay} />
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.subtitleWrapper}>
            <span className={styles.subtitle}>Officially Certified</span>
          </div>

          <h1 className={styles.title}>
            Advanced Cybersecurity Solutions to Safeguard Your Business
          </h1>

          <p className={styles.description}>
            We secure your digital ecosystem with certified expertise, delivering
            proactive defense, resilience, and compliance for a safer future.
          </p>

          <div className={styles.featuresRow}>
            {HERO_FEATURES.map((item) => (
              <div key={item.title} className={styles.featureItem}>
                <div className={styles.iconBox}>
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={70}
                    height={70}
                    className={styles.iconImg}
                    priority
                  />
                </div>
                <h4 className={styles.featureTitle}>{item.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
