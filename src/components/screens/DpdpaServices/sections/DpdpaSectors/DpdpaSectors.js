import React from "react";
import Link from "next/link";
import Container from "@/components/ui/Container/Container";
import SectionHeader from "@/components/common/SectionHeader/SectionHeader";
import { DPDPA_SECTORS } from "@/constants/dpdpaData";
import styles from "./DpdpaSectors.module.scss";

export default function DpdpaSectors() {
  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        <SectionHeader
          subtitle="WHO WE HELP"
          title="Tailored Compliance Across Regulated Industries"
          description="Every organisation that processes personal data digitally. The DPDP Act applies across all industries and to organisations of every size, including employee, customer, and vendor records."
          variant="light"
          alignment="center"
        />

        <div className={styles.sectorsGrid}>
          {DPDPA_SECTORS.map((sec, idx) => (
            <div
              key={sec.industry}
              className={`${styles.sectorCard} ${sec.isFeatured ? styles.featured : ""}`}
              data-aos="fade-up"
              data-aos-delay={idx * 50}
            >
              <div className={styles.cardHeader}>
                <h3 className={styles.industryName}>{sec.industry}</h3>
                {sec.isFeatured && (
                  <span className={styles.featuredBadge}>Featured Expertise</span>
                )}
              </div>
              <p className={styles.priorities}>{sec.priorities}</p>
            </div>
          ))}
        </div>

        <div className={styles.customNotice} data-aos="fade-up">
          <div className={styles.noticeContent}>
            <h4>Don&apos;t see your industry listed?</h4>
            <p>
              If your enterprise collects or handles personal data digitally, the DPDP Act applies to you.
              Our security specialists assess your exact operational context.
            </p>
          </div>
          <Link href="/contact" className={styles.consultBtn}>
            Speak with an Advisor <i className="caseicon-long-arrow-right" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
