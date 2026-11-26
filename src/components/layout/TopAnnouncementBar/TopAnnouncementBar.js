import React from "react";
import Link from "next/link";
import styles from "./TopAnnouncementBar.module.scss";

const REPEAT_COUNT = 6;

export default function TopAnnouncementBar() {
  const items = Array.from({ length: REPEAT_COUNT });

  return (
    <div className={styles.announcementBar}>
      <div className={styles.marqueeTrack}>
        {[0, 1].map((groupIdx) => (
          <div
            key={groupIdx}
            className={styles.marqueeGroup}
            aria-hidden={groupIdx === 1}
          >
            {items.map((_, idx) => (
              <div key={idx} className={styles.content}>
                <span className={styles.message}>
                  <strong>DPDPA deadline:</strong> 13 May 2027. Is your
                  organisation ready?
                </span>
                <Link href="/dpdpa-compliance" className={styles.ctaLink}>
                  Check now <span className={styles.arrow}>&rarr;</span>
                </Link>
                <span className={styles.separator} aria-hidden="true">
                  •
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
