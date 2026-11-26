import React from "react";
import Link from "next/link";
import Container from "@/components/ui/Container/Container";
import SectionHeader from "@/components/common/SectionHeader/SectionHeader";
import { ENGAGEMENT_MODELS } from "@/constants/servicesData";
import styles from "./EngagementModels.module.scss";

export default function EngagementModels() {
  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        <SectionHeader
          subtitle={ENGAGEMENT_MODELS.eyebrow}
          title={ENGAGEMENT_MODELS.title}
          description={ENGAGEMENT_MODELS.description}
          variant="light"
          alignment="center"
        />

        <div className={styles.packagesGrid}>
          {ENGAGEMENT_MODELS.models.map((model, idx) => (
            <div
              key={model.title}
              className={`${styles.pkgCard} ${
                model.popular ? styles.popular : ""
              }`}
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              {model.popular && (
                <div className={styles.popularRibbon}>Most Popular</div>
              )}

              <div className={styles.cardTop}>
                <span className={styles.badge}>{model.badge}</span>
                <h3 className={styles.tierName}>{model.title}</h3>
                <p className={styles.bestFor}>
                  <strong>Best for:</strong> {model.bestFor}
                </p>
              </div>

              <p className={styles.desc}>{model.desc}</p>

              <div className={styles.includesBox}>
                <h4 className={styles.includesTitle}>Key Deliverables:</h4>
                <ul className={styles.includesList}>
                  {model.includes.map((inc, iIdx) => (
                    <li key={iIdx} className={styles.incItem}>
                      <i className="fas fa-check" />
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.cardBottom}>
                <Link
                  href="/contact"
                  className={
                    model.popular ? styles.primaryBtn : styles.secondaryBtn
                  }
                >
                  Request Proposal <i className="caseicon-long-arrow-right" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
