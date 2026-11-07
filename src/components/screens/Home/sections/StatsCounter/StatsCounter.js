import React from "react";
import styles from "./StatsCounter.module.scss";

const STATS = [
  { icon: "fas fa-shield-alt", number: "40+", label: "Decades Collective Experience" },
  { icon: "fas fa-users-cog", number: "100+", label: "Enterprise Security Audits" },
  { icon: "fas fa-globe", number: "5+", label: "Global Technology Partners" },
  { icon: "fas fa-balance-scale", number: "2027", label: "DPDPA Enforcement Deadline" },
];

export default function StatsCounter() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {STATS.map((s) => (
            <div key={s.label} className={styles.statItem}>
              <div className={styles.iconCircle}>
                <i className={s.icon} />
              </div>
              <h3 className={styles.number}>{s.number}</h3>
              <p className={styles.label}>{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
