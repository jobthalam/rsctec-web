import React from "react";
import Link from "next/link";
import styles from "./VideoBanner.module.scss";

export default function VideoBanner() {
  return (
    <section className={styles.section}>
      <div className={styles.overlay} />
      <div className={styles.container}>
        <div className={styles.content}>
          <Link
            href="/dpdpa-compliance"
            className={styles.playBtn}
            aria-label="Explore DPDPA Compliance Video"
          >
            <span className={styles.playIcon}>
              <i className="fas fa-play" />
            </span>
          </Link>
          <span className={styles.eyebrow}>24/7 Security Operations</span>
          <h2 className={styles.title}>
            Delivering Ingenious Perspective To Your Information Security
          </h2>
          <p className={styles.desc}>
            Watch how our defense-grade security controls and DPDPA compliance
            safeguards protect Indian enterprises from modern threat vectors.
          </p>
        </div>
      </div>
    </section>
  );
}
