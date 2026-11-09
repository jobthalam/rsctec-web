import React from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container/Container";
import ExpandOnView from "@/components/common/ExpandOnView/ExpandOnView";
import { LEAD_MAGNET } from "@/constants/resourcesData";
import styles from "./ResourcesLeadMagnet.module.scss";

export default function ResourcesLeadMagnet() {
  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        <div className={styles.row}>
          <div className={styles.imageCol} data-aos="fade-right">
            <div className={styles.imageWrapper}>
              <ExpandOnView
                direction="left"
                duration={850}
                className={styles.mainImgBox}
              >
                <Image
                  src="/images/cyberguard/blog-img9.jpg"
                  alt="DPDPA Readiness Assessment"
                  width={560}
                  height={380}
                  className={styles.mainImg}
                />
              </ExpandOnView>

              <div
                className={styles.statBadge}
                data-aos="fade-up"
                data-aos-delay="250"
              >
                <span className={styles.statNumber}>25</span>
                <span className={styles.statLabel}>
                  Core Statutory Checkpoints Evaluated
                </span>
              </div>
            </div>
          </div>

          <div className={styles.contentCol} data-aos="fade-left">
            {/* <span className={styles.subtitle}>{LEAD_MAGNET.badge}</span> */}
            <h2 className={styles.title}>{LEAD_MAGNET.title}</h2>
            <p className={styles.text}>{LEAD_MAGNET.text}</p>

            <ul className={styles.checkList}>
              {LEAD_MAGNET.features.map((feat) => (
                <li key={feat} className={styles.checkItem}>
                  <span className={styles.checkIcon}>
                    <i className="fas fa-check" aria-hidden="true" />
                  </span>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>

            <div className={styles.actionRow}>
              <Link href="/contact" className={styles.downloadBtn}>
                {LEAD_MAGNET.buttonText}{" "}
                <i className="caseicon-long-arrow-right" />
              </Link>
              <span className={styles.microcopy}>
                Instant PDF download · Free toolkit
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
