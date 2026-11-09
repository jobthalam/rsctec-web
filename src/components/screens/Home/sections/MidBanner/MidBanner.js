import React from "react";
import Link from "next/link";
import Container from "@/components/ui/Container/Container";
import styles from "./MidBanner.module.scss";

export default function MidBanner() {
  return (
    <section className={styles.banner}>
      <Container className={styles.container}>
        <h3 className={styles.title} data-aos="fade-right">
          DPDPA Deadline: 13 May 2027 · Is Your Organisation Ready?
        </h3>
        <Link href="/solutions#dpdpa" className={styles.btn} data-aos="fade-left">
          Check Your Readiness →
        </Link>
      </Container>
    </section>
  );
}
