import React from "react";
import Image from "next/image";
import Container from "@/components/ui/Container/Container";
import styles from "./AboutCapabilities.module.scss";
import { ABOUT_CAPABILITIES } from "@/constants/constants";

export default function AboutCapabilities() {
  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>CYBERSECURITY SERVICES</span>
          <h2 className={styles.title}>
            Comprehensive Cybersecurity Solutions for Modern Threats
          </h2>
        </div>

        <div className={styles.grid}>
          {/* Left Overlapping Images with 99.9% Badge */}
          <div className={styles.visualCol}>
            <div className={styles.imageStack}>
              <div className={styles.mainImgCard}>
                <Image
                  src="/images/cyberguard/blog-img9.jpg"
                  alt="Enterprise Security Operations Center"
                  width={460}
                  height={340}
                  className={styles.stackImg}
                />
                <div className={styles.statBadge}>
                  <span className={styles.statNum}>99.9%</span>
                  <span className={styles.statLabel}>
                    Threat Detection &amp; Prevention Rate
                  </span>
                </div>
              </div>
              <div className={styles.overlapImgCard}>
                <Image
                  src="/images/about/blog-details3.jpg"
                  alt="Hardware-grade Cryptographic Defense"
                  width={320}
                  height={240}
                  className={styles.stackImg}
                />
              </div>
            </div>
          </div>

          {/* Right 3 Capabilities Rows */}
          <div className={styles.featuresCol}>
            {ABOUT_CAPABILITIES.map((cap) => (
              <div key={cap.title} className={styles.featureRow}>
                <div className={styles.iconBox}>
                  <Image
                    src={cap.icon}
                    alt={cap.title}
                    width={48}
                    height={48}
                    className={styles.capIcon}
                  />
                </div>
                <div className={styles.featureContent}>
                  <h3 className={styles.featureTitle}>{cap.title}</h3>
                  <p className={styles.featureDesc}>{cap.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
