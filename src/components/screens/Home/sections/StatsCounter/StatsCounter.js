import React from "react";
import Container from "@/components/ui/Container/Container";
import styles from "./StatsCounter.module.scss";

const STATS = [
  { icon: "fas fa-shield-alt", number: "40+", label: "Years Collective Infosec Leadership" },
  { icon: "fas fa-users-cog", number: "100+", label: "Enterprise Security & Risk Audits" },
  { icon: "fas fa-handshake", number: "5+", label: "Global Technology Partners" },
  { icon: "fas fa-gavel", number: "₹250 Cr", label: "Max DPDPA Statutory Penalty Risk" },
];

export default function StatsCounter() {
  return (
    <section className={styles.section}>
      <Container className={styles.container}>
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
      </Container>
    </section>
  );
}
