import React from "react";
import Link from "next/link";
import styles from "./SolutionsHero.module.scss";

export default function SolutionsHero() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.container}>
        <div className={styles.breadcrumb}>
          <Link href="/" className={styles.breadcrumbLink}>
            Home
          </Link>
          <span className={styles.separator}>/</span>
          <span className={styles.current}>Solutions</span>
        </div>

        <span className={styles.subtitle}>Technology & Compliance Ecosystem</span>
        <h1 className={styles.title}>
          World-Class Cybersecurity Solutions & Statutory DPDPA Governance
        </h1>
        <p className={styles.description}>
          We integrate market-leading security platforms—Qualys, OpenText, SearchInform,
          Securely Share, and Morphisec—with vendor-neutral architecture to protect endpoints,
          automate vulnerability remediation, and ensure end-to-end data privacy.
        </p>
      </div>
    </section>
  );
}
