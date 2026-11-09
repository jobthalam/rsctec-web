import React from "react";
import Image from "next/image";
import Link from "next/link";
import ExpandOnView from "@/components/common/ExpandOnView/ExpandOnView";
import styles from "./PartnerCard.module.scss";

export default function PartnerCard({ partner, isReversed }) {
  return (
    <div
      id={partner.id}
      className={`${styles.item} ${isReversed ? styles.reverse : ""}`}
      data-aos="fade-up"
    >
      <div className={styles.contentCol}>
        <h3 className={styles.partnerName}>{partner.name}</h3>

        {partner.subtitle && (
          <p className={styles.subtitle}>{partner.subtitle}</p>
        )}

        <div className={styles.paragraphs}>
          {partner.paragraphs.map((pText, pIdx) => (
            <p key={pIdx} className={styles.bodyText}>
              {pText}
            </p>
          ))}
        </div>

        {partner.features && (
          <div className={styles.featureList}>
            {partner.features.map((feat, fIdx) => (
              <div key={fIdx} className={styles.featureItem}>
                <h4 className={styles.featureTitle}>
                  <i className="fas fa-check-circle" /> {feat.title}
                </h4>
                <p className={styles.featureDesc}>{feat.desc}</p>
              </div>
            ))}
          </div>
        )}

        <div className={styles.dpdpaBox}>
          <div className={styles.dpdpaTag}>
            <i className="fas fa-shield-alt" />
            <span>How it supports DPDPA</span>
          </div>
          <p className={styles.dpdpaText}>{partner.dpdpaSupport}</p>
        </div>

        <div className={styles.actionRow}>
          <Link href="/contact" className={styles.enquireBtn}>
            Enquire About {partner.name} <i className="caseicon-long-arrow-right" />
          </Link>
        </div>
      </div>

      <div className={styles.visualCol}>
        <ExpandOnView
          direction={isReversed ? "right" : "left"}
          duration={850}
          className={styles.imageCard}
        >
          <Image
            src={partner.image}
            alt={partner.imageAlt || partner.name}
            width={520}
            height={380}
            className={styles.partnerImg}
          />
        </ExpandOnView>
      </div>
    </div>
  );
}
