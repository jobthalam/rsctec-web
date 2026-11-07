import React from "react";
import Image from "next/image";
import styles from "./WhyChooseUs.module.scss";

export default function WhyChooseUs() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.subtitle}>Why Choose Us</span>
          <h2 className={styles.title}>
            Complete Cyber Defense Against Modern Attacks
          </h2>
          <p className={styles.description}>
            Empower your network with proactive defense strategies, multi-layered
            threat containment, and automated DPDPA compliance safeguards.
          </p>
        </div>

        <div className={styles.cardsRow}>
          {/* Card 01 */}
          <div className={styles.featureCard}>
            <div className={styles.cardContent}>
              <span className={styles.stepNum}>01</span>
              <h3 className={styles.cardHeading}>Advanced Threat Detection</h3>
              <p className={styles.cardText}>
                Leverage real-time threat intelligence and automated vulnerability
                scanning to neutralise intrusions before they compromise your systems.
              </p>
            </div>
            <div className={styles.cardImgBox}>
              <Image
                src="/images/cyberguard/s2.jpg"
                alt="Advanced Threat Detection"
                width={260}
                height={220}
                className={styles.cardImg}
              />
            </div>
          </div>

          {/* Card 02 */}
          <div className={styles.featureCard}>
            <div className={styles.cardContent}>
              <span className={styles.stepNum}>02</span>
              <h3 className={styles.cardHeading}>Zero Trust Architecture</h3>
              <p className={styles.cardText}>
                Enforce strict continuous verification, encrypted data sharing,
                and least-privilege access controls across your entire digital boundary.
              </p>
            </div>
            <div className={styles.cardImgBox}>
              <Image
                src="/images/cyberguard/s3.jpg"
                alt="Zero Trust Architecture"
                width={260}
                height={220}
                className={styles.cardImg}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
