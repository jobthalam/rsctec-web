import React from "react";
import Image from "next/image";
import Container from "@/components/ui/Container/Container";
import styles from "./WhyChooseUs.module.scss";

export default function WhyChooseUs() {
  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        <div className={styles.header}>
          <span className={styles.subtitle}>Why RS Consulting</span>
          <h2 className={styles.title}>
            Security-Led, Not Paperwork-Led Cyber Defense
          </h2>
          <p className={styles.description}>
            We implement the practical technical controls required to satisfy the DPDP Act and
            protect modern enterprise networks, rather than stopping at checklists.
          </p>
        </div>

        <div className={styles.cardsRow}>
          {/* Card 01 */}
          <div className={styles.featureCard}>
            <div className={styles.cardContent}>
              <span className={styles.stepNum}>01</span>
              <h3 className={styles.cardHeading}>Engineering-Led Safeguards</h3>
              <p className={styles.cardText}>
                From vulnerability mitigation to encrypted file sharing and endpoint MTD, we implement
                the actual controls the law calls &ldquo;reasonable security safeguards&rdquo;.
              </p>
            </div>
            <div className={styles.cardImgBox}>
              <Image
                src="/images/cyberguard/s2.jpg"
                alt="Engineering-Led Safeguards"
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
              <h3 className={styles.cardHeading}>4+ Decades Collective Leadership</h3>
              <p className={styles.cardText}>
                Specialists in information security and cyber risk with verified experience across
                banking, payments, healthcare, and high-compliance enterprise sectors.
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
      </Container>
    </section>
  );
}
