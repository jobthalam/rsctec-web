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
              Need 24/7 Protection From Cyber Attacks?
            </h2>
            <p className={styles.subtext}>
              Connect directly with our senior cybersecurity advisors and assess your exposure today.
            </p>
          </div>
          <div className={styles.btnCol} data-aos="fade-left">
            <Link href="/contact" className={styles.ctaBtn}>
              Book Free Consultation
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
