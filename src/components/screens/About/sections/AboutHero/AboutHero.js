import React from "react";
import Link from "next/link";
import Container from "@/components/ui/Container/Container";
import styles from "./AboutHero.module.scss";

export default function AboutHero() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.overlay} />
      <Container className={styles.container}>
        <div className={styles.contentRow}>
          <div className={styles.leftCol}>
            <h1 className={styles.pageTitle}>About Us</h1>
            <div className={styles.breadcrumb}>
              <Link href="/" className={styles.breadcrumbLink}>
                Home
              </Link>
              <span className={styles.separator}>&gt;</span>
              <span className={styles.current}>About Us</span>
            </div>
          </div>
          <div className={styles.rightCol}>
            <blockquote className={styles.quote}>
              &lsquo;Prevention is cheaper than a breach&rsquo;
            </blockquote>
          </div>
        </div>
      </Container>
    </section>
  );
}
