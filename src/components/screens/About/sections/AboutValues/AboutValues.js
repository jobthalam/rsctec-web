import React from "react";
import styles from "./AboutValues.module.scss";

const VALUES = [
  {
    icon: "fas fa-users-cog",
    title: "Teamwork & Co-Ownership",
    desc: "We embed directly with internal security and DevOps teams, co-owning outcomes rather than delivering detached advisory reports.",
  },
  {
    icon: "fas fa-shield-virus",
    title: "Engineering Rigor",
    desc: "Zero tolerance for false positives. Every vulnerability and compliance finding is manually verified and contextually prioritized.",
  },
  {
    icon: "fas fa-handshake",
    title: "Vendor-Neutral Integrity",
    desc: "Our recommendations are guided solely by your risk appetite and statutory compliance needs, never by vendor reseller quotas.",
  },
  {
    icon: "fas fa-lock",
    title: "Customer Trust & Secrecy",
    desc: "Safeguarding client data and system architecture details under strict non-disclosure agreements and certified infosec protocols.",
  },
];

export default function AboutValues() {
  return (
    <section className={styles.valuesSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.subtitle}>Our Guiding Principles</span>
          <h2 className={styles.title}>Values That Drive Cyber Resilience</h2>
          <p className={styles.description}>
            Every engagement at RS Consulting is anchored in core values that ensure
            uncompromising quality, ethical conduct, and measurable risk reduction.
          </p>
        </div>

        <div className={styles.grid}>
          {VALUES.map((val) => (
            <div key={val.title} className={styles.card}>
              <div className={styles.iconBox}>
                <i className={val.icon} />
              </div>
              <h3 className={styles.cardTitle}>{val.title}</h3>
              <p className={styles.cardDesc}>{val.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
