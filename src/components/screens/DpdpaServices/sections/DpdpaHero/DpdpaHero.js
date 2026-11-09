import React from "react";
import Link from "next/link";
import Container from "@/components/ui/Container/Container";
import { DPDPA_HERO } from "@/constants/dpdpaData";
import styles from "./DpdpaHero.module.scss";

export default function DpdpaHero() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.overlay} />
      <Container className={styles.container}>
        <div className={styles.content} data-aos="fade-up">
          <span className={styles.eyebrow}>{DPDPA_HERO.eyebrow}</span>
          <h1 className={styles.title}>{DPDPA_HERO.headline}</h1>
          <p className={styles.subheadline}>{DPDPA_HERO.subheadline}</p>

          <div className={styles.btnRow}>
            <Link href={DPDPA_HERO.primaryBtn.href} className={styles.primaryBtn}>
              {DPDPA_HERO.primaryBtn.text} <i className="caseicon-long-arrow-right" />
            </Link>
            <a href={DPDPA_HERO.secondaryBtn.href} className={styles.secondaryBtn}>
              {DPDPA_HERO.secondaryBtn.text}
            </a>
          </div>

          <div className={styles.compliancePill}>
            <i className="fas fa-gavel" />
            <span>Full Statutory Enforcement Window: 13 May 2027</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
