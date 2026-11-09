import React from "react";
import Link from "next/link";
import Container from "@/components/ui/Container/Container";
import styles from "./ContactHero.module.scss";

export default function ContactHero() {
  return (
    <section className={styles.heroSection}>
      <Container className={styles.container}>
        <div className={styles.breadcrumb}>
          <Link href="/" className={styles.breadcrumbLink}>
            Home
          </Link>
          <span className={styles.separator}>/</span>
          <span className={styles.current}>Contact</span>
        </div>

        <span className={styles.subtitle}>Get in Touch</span>
        <h1 className={styles.title}>
          Initiate a Strategic Security or Compliance Consultation
        </h1>
        <p className={styles.description}>
          Speak directly with our senior security advisors, request a technical assessment, or
          engage our compliance team to begin your statutory DPDPA readiness journey.
        </p>
      </Container>
    </section>
  );
}
