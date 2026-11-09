import React from "react";
import Image from "next/image";
import { COMPANY_INFO } from "@/constants/constants";
import styles from "./ContactInfoCard.module.scss";

export default function ContactInfoCard() {
  return (
    <div className={styles.card} data-aos="fade-right">
      <div className={styles.imageWrapper}>
        <Image
          src="/images/cyberguard/img-contact1-308x308.jpg"
          alt="Cybersecurity Shield and Lock"
          width={308}
          height={308}
          className={styles.image}
        />
      </div>

      <div className={styles.details}>
        <div className={styles.item}>
          <div className={styles.itemHeader}>
            <i className={`fas fa-map-marker-alt ${styles.icon}`} />
            <span className={styles.label}>Office Location</span>
          </div>
          <p className={styles.value}>{COMPANY_INFO.address}</p>
        </div>

        <div className={styles.item}>
          <div className={styles.itemHeader}>
            <i className={`fas fa-phone-alt ${styles.icon}`} />
            <span className={styles.label}>Call Us Directly</span>
          </div>
          <a href={`tel:${COMPANY_INFO.phone}`} className={styles.link}>
            {COMPANY_INFO.phoneDisplay}
          </a>
        </div>

        <div className={styles.item}>
          <div className={styles.itemHeader}>
            <i className={`fas fa-envelope ${styles.icon}`} />
            <span className={styles.label}>Send a Message</span>
          </div>
          <a href={`mailto:${COMPANY_INFO.email}`} className={styles.link}>
            {COMPANY_INFO.email}
          </a>
        </div>

        <div className={styles.item}>
          <div className={styles.itemHeader}>
            <i className={`fab fa-whatsapp ${styles.icon}`} />
            <span className={styles.label}>WhatsApp</span>
          </div>
          <a
            href={COMPANY_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            {COMPANY_INFO.phoneDisplay}
          </a>
        </div>
      </div>
    </div>
  );
}
