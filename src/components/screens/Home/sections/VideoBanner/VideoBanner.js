import React from "react";
import Link from "next/link";
import Container from "@/components/ui/Container/Container";
import styles from "./VideoBanner.module.scss";
import { COMPANY_INFO } from "@/constants/constants";

export default function VideoBanner() {
  return (
    <section className={styles.section}>
      <div className={styles.overlay} />
      <Container className={styles.container}>
        <div className={styles.content}>
          <Link
            href="/solutions#dpdpa"
            className={styles.playBtn}
            aria-label="Explore DPDPA Compliance Overview"
          >
            <span className={styles.playIcon}>
              <i className="fas fa-shield-alt" />
            </span>
          </Link>
          <span className={styles.eyebrow}>DPDP Act, 2023 · Enforceable 13 May 2027</span>
          <h2 className={styles.title}>
            The Deadline Won&apos;t Move. Your Compliance Can.
          </h2>
          <p className={styles.desc}>
            Talk to an RS Consulting specialist about where your organisation stands today.
            Failure to implement reasonable security safeguards exposes Data Fiduciaries to
            penalties of up to ₹250 crore per instance.
          </p>

          <div className={styles.btnRow}>
            <Link href="/contact" className={styles.primaryBtn}>
              Book a Free Consultation
            </Link>
            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.whatsappBtn}
            >
              <i className="fab fa-whatsapp" /> WhatsApp Us
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
