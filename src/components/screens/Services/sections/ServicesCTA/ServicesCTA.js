import React from "react";
import Link from "next/link";
import Container from "@/components/ui/Container/Container";
import { SERVICES_CTA } from "@/constants/servicesData";
import styles from "./ServicesCTA.module.scss";

export default function ServicesCTA() {
  return (
    <section className={styles.section}>
      <div className={styles.watermark} />
      <Container className={styles.container}>
        <div className={styles.contentWrap}>
          <div className={styles.textCol} data-aos="fade-right">
            <h2 className={styles.headline}>{SERVICES_CTA.headline}</h2>
            <p className={styles.subtext}>{SERVICES_CTA.subtext}</p>
          </div>
          <div className={styles.btnCol} data-aos="fade-left">
            <Link href={SERVICES_CTA.ctaHref} className={styles.ctaBtn}>
              {SERVICES_CTA.ctaLabel}
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
