import React from "react";
import Container from "@/components/ui/Container/Container";
import SectionHeader from "@/components/common/SectionHeader/SectionHeader";
import { DPDPA_WHY_MATTERS } from "@/constants/dpdpaData";
import styles from "./DpdpaTimeline.module.scss";

export default function DpdpaTimeline() {
  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        <SectionHeader
          subtitle="WHY IT MATTERS NOW"
          title={DPDPA_WHY_MATTERS.title}
          description={DPDPA_WHY_MATTERS.description}
          variant="light"
          alignment="center"
        />

        {/* Milestone Cards Timeline */}
        <div className={styles.milestoneGrid}>
          {DPDPA_WHY_MATTERS.milestones.map((m, idx) => (
            <div
              key={m.date}
              className={styles.milestoneCard}
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <div className={styles.cardHeader}>
                <span className={styles.statusTag}>{m.status}</span>
                <span className={styles.date}>{m.date}</span>
              </div>
              <h3 className={styles.milestoneTitle}>{m.milestone}</h3>
              <p className={styles.impactText}>{m.impact}</p>
            </div>
          ))}
        </div>

        {/* Common Gaps Warning Box */}
        <div className={styles.gapsCard} data-aos="fade-up">
          <div className={styles.gapsHeader}>
            <div className={styles.gapsIcon}>
              <i className="fas fa-exclamation-triangle" />
            </div>
            <div>
              <h3 className={styles.gapsTitle}>
                Critical Vulnerabilities Most Organisations Still Face
              </h3>
              <p className={styles.gapsDesc}>
                Audits consistently uncover these five high-risk operational and technical gaps:
              </p>
            </div>
          </div>

          <div className={styles.gapsList}>
            {DPDPA_WHY_MATTERS.commonGaps.map((gap, idx) => (
              <div key={idx} className={styles.gapItem}>
                <span className={styles.bulletNum}>{idx + 1}</span>
                <p className={styles.gapText}>{gap}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
