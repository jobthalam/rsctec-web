import React from "react";
import Link from "next/link";
import Container from "@/components/ui/Container/Container";
import { DPDPA_CLOSING_CTA } from "@/constants/dpdpaData";
import { COMPANY_INFO } from "@/constants/constants";
import styles from "./DpdpaCTA.module.scss";

export default function DpdpaCTA() {
  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        <div className={styles.card} data-aos="zoom-in-up">
          <div className={styles.content}>
            <span className={styles.eyebrow}>GET STARTED TODAY</span>
            <h2 className={styles.title}>{DPDPA_CLOSING_CTA.headline}</h2>
            <p className={styles.description}>{DPDPA_CLOSING_CTA.text}</p>

            <div className={styles.btnRow}>
              <Link href="/contact" className={styles.primaryBtn}>
                Book a Free Consultation <i className="caseicon-long-arrow-right" />
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

            <div className={styles.contactDetails}>
              <a href={`tel:${DPDPA_CLOSING_CTA.phone}`} className={styles.contactItem}>
                <i className="fas fa-phone-alt" /> {DPDPA_CLOSING_CTA.phone}
              </a>
              <span className={styles.separator}>•</span>
              <a href={`mailto:${DPDPA_CLOSING_CTA.email}`} className={styles.contactItem}>
                <i className="fas fa-envelope" /> {DPDPA_CLOSING_CTA.email}
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
