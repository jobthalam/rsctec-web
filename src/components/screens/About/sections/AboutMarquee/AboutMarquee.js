import React from "react";
import styles from "./AboutMarquee.module.scss";

const MARQUEE_ITEMS = [
  "Threat Intelligence",
  "Penetration Testing",
  "Security Audits",
  "Incident Response",
  "Network Security",
  "Endpoint Protection",
  "DPDPA Compliance",
  "Cloud Security",
];

export default function AboutMarquee() {
  const tripleItems = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <div className={styles.ribbon}>
      <div className={styles.track}>
        {tripleItems.map((item, idx) => (
          <span key={idx} className={styles.item}>
            <span className={styles.text}>{item}</span>
            <span className={styles.slash}>/</span>
          </span>
        ))}
      </div>
    </div>
  );
}
