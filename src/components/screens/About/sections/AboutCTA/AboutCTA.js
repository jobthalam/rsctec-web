import React from "react";
import Link from "next/link";
import Container from "@/components/ui/Container/Container";
import styles from "./AboutCTA.module.scss";

export default function AboutCTA() {
  return (
    <section className={styles.section}>
      <div className={styles.watermark} />
      <Container className={styles.container}>
        <div className={styles.contentWrap}>
          <div className={styles.textCol} data-aos="fade-right">
            <h2 className={styles.headline}>
              Let&apos;s discuss your cybersecurity needs.
            </h2>
            <p className={styles.subtext}>
              We&apos;re here to provide you with the information you need. Reach out to us through phone, email, or whatsapp — or connect directly with our senior cybersecurity advisors for 24/7 protection.
            </p>
          </div>
          <div className={styles.btnCol} data-aos="fade-left">
            <Link href="/contact" className={styles.ctaBtn}>
              Contact Us
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
