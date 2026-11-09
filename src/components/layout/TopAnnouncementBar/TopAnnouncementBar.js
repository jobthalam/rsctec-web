import React from "react";
import Link from "next/link";
import Container from "@/components/ui/Container/Container";
import styles from "./TopAnnouncementBar.module.scss";

export default function TopAnnouncementBar() {
  return (
    <div className={styles.announcementBar}>
      <Container className={styles.container}>
        <div className={styles.content}>
          <span className={styles.message}>
            <strong>DPDPA deadline:</strong> 13 May 2027. Is your organisation
            ready?
          </span>
          <Link href="/solutions#dpdpa" className={styles.ctaLink}>
            Check now <span className={styles.arrow}>&rarr;</span>
          </Link>
        </div>
      </Container>
    </div>
  );
}
