import React from "react";
import Image from "next/image";
import Container from "@/components/ui/Container/Container";
import SectionHeader from "@/components/common/SectionHeader/SectionHeader";
import ExpandOnView from "@/components/common/ExpandOnView/ExpandOnView";
import styles from "./AboutCapabilities.module.scss";
import { ABOUT_CAPABILITIES } from "@/constants/constants";

export default function AboutCapabilities() {
  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        <SectionHeader
          subtitle="CYBERSECURITY SERVICES"
          title="Comprehensive Cybersecurity Solutions for Modern Threats"
          variant="light"
          alignment="center"
        />

        <div className={styles.grid}>
          {/* Left Overlapping Images with 99.9% Badge */}
          <div className={styles.visualCol}>
            <div className={styles.imageStack}>
              <ExpandOnView direction="left" duration={850} className={styles.mainImgCard}>
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
              </ExpandOnView>
              <div
                className={styles.overlapImgCard}
                data-aos="zoom-in"
                data-aos-delay="200"
              >
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
            {ABOUT_CAPABILITIES.map((cap, idx) => (
              <div
                key={cap.title}
                className={styles.featureRow}
                data-aos="fade-left"
                data-aos-delay={idx * 120}
              >
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
