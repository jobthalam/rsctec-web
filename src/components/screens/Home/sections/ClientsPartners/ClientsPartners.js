import React from "react";
import styles from "./ClientsPartners.module.scss";
import MarqueeRow from "./components/MarqueeRow/MarqueeRow";
import { CLIENT_LOGOS, PARTNER_LOGOS } from "@/constants/constants";

export default function ClientsPartners() {
  return (
    <section id="clients-partners" className={styles.section}>
      <div className={styles.container}>
        {/* Clients Marquee */}
        <div className={styles.group}>
          <div className={styles.groupHeader}>
            <div className={styles.groupTitleWrap}>
              <h3 className={styles.groupTitle}>OUR VALUABLE CLIENTS</h3>
            </div>
          </div>
          <MarqueeRow items={CLIENT_LOGOS} />
        </div>

        <div className={styles.divider} />

        {/* Partners Marquee */}
        <div className={styles.group}>
          <div className={styles.groupHeader}>
            <div className={styles.groupTitleWrap}>
              <h3 className={styles.groupTitle}>OUR GLOBAL TECHNOLOGY PARTNERS</h3>
            </div>
          </div>
          <MarqueeRow items={PARTNER_LOGOS} reverse />
        </div>
      </div>
    </section>
  );
}
