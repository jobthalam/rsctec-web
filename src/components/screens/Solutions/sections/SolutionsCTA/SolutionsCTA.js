import React from "react";
import Link from "next/link";
import Container from "@/components/ui/Container/Container";
import styles from "./SolutionsCTA.module.scss";

export default function SolutionsCTA() {
  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        <div className={styles.ctaBar} data-aos="fade-up">
          <div className={styles.textWrap}>
            <h2 className={styles.title}>
              Let&apos;s discuss your cybersecurity needs.
            </h2>
            <p className={styles.description}>
              We&apos;re here to provide you with the information you need. Reach out to us through
              phone, email, or whatsapp.
            </p>
          </div>

          <div className={styles.btnWrap}>
            <Link href="/contact" className={styles.contactBtn}>
              Contact Us
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
