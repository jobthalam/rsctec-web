import React from "react";
import Link from "next/link";
import Container from "@/components/ui/Container/Container";
import SectionHeader from "@/components/common/SectionHeader/SectionHeader";
import { DPDPA_ENGAGEMENT_OPTIONS } from "@/constants/dpdpaData";
import styles from "./DpdpaPackages.module.scss";

export default function DpdpaPackages() {
  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        <SectionHeader
          subtitle="ENGAGEMENT OPTIONS"
          title="Tailored Compliance Packages for Every Scale"
          description="Choose the engagement model that matches your organisation's current data maturity, audit schedule, and regulatory obligations."
          variant="light"
          alignment="center"
        />

        <div className={styles.packagesGrid}>
          {DPDPA_ENGAGEMENT_OPTIONS.map((pkg, idx) => (
            <div
              key={pkg.tier}
              className={`${styles.pkgCard} ${pkg.popular ? styles.popular : ""}`}
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              {pkg.popular && (
                <div className={styles.popularRibbon}>Most Popular</div>
              )}

              <div className={styles.cardTop}>
                <span className={styles.badge}>{pkg.badge}</span>
                <h3 className={styles.tierName}>{pkg.tier}</h3>
                <p className={styles.bestFor}>
                  <strong>Best for:</strong> {pkg.bestFor}
                </p>
              </div>

              <div className={styles.includesBox}>
                <h4 className={styles.includesTitle}>Package Inclusions:</h4>
                <ul className={styles.includesList}>
                  {pkg.includes.map((inc, iIdx) => (
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
                  className={pkg.popular ? styles.primaryBtn : styles.secondaryBtn}
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
