import React from "react";
import Link from "next/link";
import Container from "@/components/ui/Container/Container";
import styles from "./TrainingsHero.module.scss";

export default function TrainingsHero() {
  return (
    <section className={styles.heroSection}>
      <Container className={styles.container}>
        <div className={styles.breadcrumb}>
          <Link href="/" className={styles.breadcrumbLink}>
            Home
          </Link>
          <span className={styles.separator}>/</span>
          <span className={styles.current}>Trainings & Certifications</span>
        </div>

        <span className={styles.subtitle}>Workforce Upskilling & Accreditation</span>
        <h1 className={styles.title}>
          Enterprise Cybersecurity & DPDPA Compliance Training
        </h1>
        <p className={styles.description}>
          Hands-on technical certifications, offensive security bootcamps, and executive DPDPA
          masterclasses designed by seasoned practitioners with 40+ years of collective field experience.
        </p>
      </Container>
    </section>
  );
}
