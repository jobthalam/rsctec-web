import React from "react";
import styles from "./TopAnnouncementBar.module.scss";
import { COMPANY_INFO } from "@/constants/constants";

export default function TopAnnouncementBar() {
  return (
    <div className={styles.topBar}>
      <div className={styles.topBarInner}>
        <div className={styles.topContact}>
          <span className={styles.contactItem}>
            <i className="fas fa-map-marker-alt" /> Flat A2, No. 50, Iyappa Nagar, Madipakkam, Chennai
          </span>
          <span className={styles.divider}>|</span>
          <a href={`tel:${COMPANY_INFO.phone}`} className={styles.contactItem}>
            <i className="fas fa-phone-alt" /> {COMPANY_INFO.phoneDisplay}
          </a>
          <span className={styles.divider}>|</span>
          <a href={`mailto:${COMPANY_INFO.email}`} className={styles.contactItem}>
            <i className="fas fa-envelope" /> {COMPANY_INFO.email}
          </a>
        </div>

        <div className={styles.socialLinks}>
          <a href="#" className={styles.socialIcon} aria-label="LinkedIn">
            <i className="fab fa-linkedin-in" />
          </a>
          <a href="#" className={styles.socialIcon} aria-label="Twitter">
            <i className="fab fa-twitter" />
          </a>
          <a href={COMPANY_INFO.whatsappUrl} className={styles.socialIcon} aria-label="WhatsApp">
            <i className="fab fa-whatsapp" />
          </a>
        </div>
      </div>
    </div>
  );
}
