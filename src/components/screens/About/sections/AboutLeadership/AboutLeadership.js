import React from "react";
import Link from "next/link";
import styles from "./AboutLeadership.module.scss";

const CREDENTIALS = [
  { label: "CISSP Certified", desc: "Certified Information Systems Security Professionals" },
  { label: "CISA Accredited", desc: "Certified Information Systems Auditors" },
  { label: "ISO 27001:2022 LA", desc: "Lead Auditors for Information Security Management" },
  { label: "DPDPA Privacy Counsel", desc: "Specialized in Digital Personal Data Protection Act compliance" },
];

export default function AboutLeadership() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.credentialsGrid}>
          {CREDENTIALS.map((c) => (
            <div key={c.label} className={styles.credItem}>
              <div className={styles.badge}>
                <i className="fas fa-certificate" />
              </div>
              <h4 className={styles.credLabel}>{c.label}</h4>
              <p className={styles.credDesc}>{c.desc}</p>
            </div>
          ))}
        </div>

        <div className={styles.ctaBox}>
          <div className={styles.ctaContent}>
            <span className={styles.ctaSubtitle}>Ready to Elevate Your Security Posture?</span>
            <h3 className={styles.ctaTitle}>
              Schedule a Strategic Consultation with Our Lead Advisors
            </h3>
            <p className={styles.ctaDesc}>
              Whether you need continuous vulnerability management, cloud penetration testing, or
              DPDPA statutory compliance roadmaps, RS Consulting is here to partner with you.
            </p>
          </div>
          <div className={styles.ctaAction}>
            <Link href="/contact" className={styles.ctaButton}>
              Connect with RS Consulting
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
