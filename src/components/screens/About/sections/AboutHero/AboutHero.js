import React from "react";
import Link from "next/link";
import styles from "./AboutHero.module.scss";

export default function AboutHero() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.container}>
        <div className={styles.breadcrumb}>
          <Link href="/" className={styles.breadcrumbLink}>
            Home
          </Link>
          <span className={styles.separator}>/</span>
          <span className={styles.current}>About Us</span>
        </div>

        <span className={styles.subtitle}>Who We Are</span>
        <h1 className={styles.title}>
          Ingenious Perspective to Enterprise Information Security
        </h1>
        <p className={styles.description}>
          Built on four decades of collective technology leadership, RS Consulting delivers
          vendor-neutral cybersecurity advisory, continuous vulnerability management, and
          comprehensive DPDPA data privacy governance.
        </p>
      </div>
    </section>
  );
}
