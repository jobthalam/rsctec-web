import React from "react";
import Link from "next/link";
import Container from "@/components/ui/Container/Container";
import { DPDPA_MYTH_FACT } from "@/constants/dpdpaData";
import styles from "./DpdpaMythFact.module.scss";

export default function DpdpaMythFact() {
  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        <div className={styles.card} data-aos="zoom-in-up">
          <div className={styles.innerRow}>
            {/* Left Myth / Fact Comparison Box */}
            <div className={styles.compareCol}>
              <span className={styles.eyebrow}>{DPDPA_MYTH_FACT.eyebrow}</span>

              <div className={styles.mythBox}>
                <div className={styles.mythTag}>
                  <i className="fas fa-times-circle" />
                  <span>Common Myth</span>
                </div>
                <h3 className={styles.mythQuote}>{DPDPA_MYTH_FACT.myth}</h3>
              </div>

              <div className={styles.factBox}>
                <div className={styles.factTag}>
                  <i className="fas fa-check-circle" />
                  <span>Statutory Fact</span>
                </div>
                <h3 className={styles.factTitle}>{DPDPA_MYTH_FACT.fact}</h3>
                <p className={styles.explanation}>{DPDPA_MYTH_FACT.description}</p>
              </div>
            </div>

            {/* Right Callout Banner */}
            <div className={styles.actionCol}>
              <div className={styles.actionCard}>
                <div className={styles.iconCircle}>
                  <i className="fas fa-id-card-alt" />
                </div>
                <h4 className={styles.actionHeading}>
                  Does Your Firm Store Digital Personal Data?
                </h4>
                <p className={styles.actionSub}>
                  Even basic employee attendance spreadsheets, customer WhatsApp chats, or vendor
                  invoices bring your enterprise under the jurisdiction of the DPDP Act.
                </p>
                <Link href={DPDPA_MYTH_FACT.ctaLink} className={styles.assessBtn}>
                  {DPDPA_MYTH_FACT.ctaText} <i className="caseicon-long-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
