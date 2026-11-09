import React from "react";
import Link from "next/link";
import Container from "@/components/ui/Container/Container";
import styles from "./DPDPASolutions.module.scss";

const PHASES = [
  {
    step: "01",
    title: "Discovery & PII Mapping",
    desc: "Cataloging personal data repositories, tracing internal and third-party data flows, and establishing verifiable Data Principal inventories.",
  },
  {
    step: "02",
    title: "Gap Audit & DPIA",
    desc: "Rigorous benchmarking against statutory DPDP Rules 2025, Data Protection Impact Assessments (DPIA), and consent mechanism audits.",
  },
  {
    step: "03",
    title: "Safeguard Engineering",
    desc: "Deploying encryption, DLP, moving target defense, and patented file-level rights management to satisfy Section 8(5) obligations.",
  },
  {
    step: "04",
    title: "Ongoing DPO Governance",
    desc: "Breach response simulation, statutory reporting within prescribed windows, Grievance Redressal automation, and Board advisory.",
  },
];

export default function DPDPASolutions() {
  return (
    <section id="dpdpa" className={styles.section}>
      <Container className={styles.container}>
        <div className={styles.warningBanner}>
          <div className={styles.warningIcon}>
            <i className="fas fa-exclamation-triangle" />
          </div>
          <div className={styles.warningContent}>
            <h4>Statutory Enforcement Alert: 13 May 2027</h4>
            <p>
              Under Section 33 of the Digital Personal Data Protection Act, failure to implement
              reasonable security safeguards exposes Data Fiduciaries to penalties of up to{" "}
              <strong>₹250 Crore per incident</strong>.
            </p>
          </div>
        </div>

        <div className={styles.header}>
          <span className={styles.subtitle}>Security-Led Compliance</span>
          <h2 className={styles.title}>4-Stage DPDPA Readiness Architecture</h2>
          <p className={styles.description}>
            Compliance cannot be achieved through paperwork alone. RS Consulting provides
            engineering-led, verifiable data protection mechanisms built for enterprise audit readiness.
          </p>
        </div>

        <div className={styles.phasesGrid}>
          {PHASES.map((p) => (
            <div key={p.step} className={styles.phaseCard}>
              <span className={styles.stepNumber}>{p.step}</span>
              <h3 className={styles.phaseTitle}>{p.title}</h3>
              <p className={styles.phaseDesc}>{p.desc}</p>
            </div>
          ))}
        </div>

        <div className={styles.actionBox}>
          <div className={styles.actionText}>
            <h3>Assess Your Organization&apos;s DPDPA Exposure</h3>
            <p>Engage RS Consulting for a confidential 25-point compliance readiness audit.</p>
          </div>
          <Link href="/contact" className={styles.actionBtn}>
            Book DPDPA Readiness Audit
          </Link>
        </div>
      </Container>
    </section>
  );
}
