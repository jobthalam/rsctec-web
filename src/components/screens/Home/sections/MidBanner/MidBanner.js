import React from "react";
import Link from "next/link";
import styles from "./MidBanner.module.scss";

export default function MidBanner() {
  return (
    <section className={styles.banner}>
      <div className={styles.container}>
        <h3 className={styles.title}>Need 24/7 Protection From Cyber Attacks?</h3>
        <Link href="/contact" className={styles.btn}>
          Discover More →
        </Link>
      </div>
    </section>
  );
}
