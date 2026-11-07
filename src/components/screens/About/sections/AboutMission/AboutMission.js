import React from "react";
import Image from "next/image";
import styles from "./AboutMission.module.scss";

export default function AboutMission() {
  return (
    <section className={styles.missionSection}>
      <div className={styles.container}>
        <div className={styles.layout}>
          <div className={styles.contentCol}>
            <span className={styles.eyebrow}>Our Heritage & Purpose</span>
            <h2 className={styles.title}>
              Rooted in Proven Security Expertise Since 2015
            </h2>
            <p className={styles.paragraph}>
              Founded in 2015 and incorporated as <strong>RSC Techasist Private Limited</strong>,
              RS Consulting was established to address an urgent market gap: enterprises needing
              unbiased, senior-level information security advisory without vendor lock-in.
            </p>
            <p className={styles.paragraph}>
              With over 40 years of collective leadership experience across banking, financial
              services, SaaS, healthcare, and enterprise software, our team brings battle-tested
              rigor to cyber risk governance, threat intelligence, and the newly enacted Digital
              Personal Data Protection Act (DPDP Act, 2023).
            </p>

            <div className={styles.cardsRow}>
              <div className={styles.pillarCard}>
                <div className={styles.cardHeader}>
                  <i className="fas fa-bullseye" />
                  <h3>Our Mission</h3>
                </div>
                <p>
                  To empower organizations to proactively identify, remediate, and govern
                  information security risks while ensuring verifiable data privacy compliance.
                </p>
              </div>

              <div className={styles.pillarCard}>
                <div className={styles.cardHeader}>
                  <i className="fas fa-eye" />
                  <h3>Our Vision</h3>
                </div>
                <p>
                  To be India’s most trusted vendor-neutral cybersecurity and privacy advisory
                  partner, enabling sustainable digital resilience for modern enterprises.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.visualCol}>
            <div className={styles.imageWrapper}>
              <Image
                src="/images/cyberguard/s2.jpg"
                alt="RS Consulting Security Practice"
                width={540}
                height={580}
                className={styles.image}
              />
              <div className={styles.experienceCard}>
                <span className={styles.expNumber}>40+</span>
                <span className={styles.expLabel}>
                  Years Collective Leadership Experience
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
