import React from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container/Container";
import SectionHeader from "@/components/common/SectionHeader/SectionHeader";
import ExpandOnView from "@/components/common/ExpandOnView/ExpandOnView";
import { SOLUTIONS_INTRO } from "@/constants/solutionsData";
import styles from "./SolutionsIntro.module.scss";

export default function SolutionsIntro() {
  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        <SectionHeader
          subtitle={SOLUTIONS_INTRO.eyebrow}
          title={SOLUTIONS_INTRO.title}
          variant="light"
          alignment="center"
          className={styles.header}
        />

        <div className={styles.row}>
          {/* Left Visual Column with Overlapping Images & 99.9% Badge */}
          <div className={styles.imageCol} data-aos="fade-right">
            <div className={styles.imageWrapper}>
              <ExpandOnView direction="left" duration={850} className={styles.mainImgBox}>
                <Image
                  src={SOLUTIONS_INTRO.mainImg}
                  alt="Security Operations Center Monitoring"
                  width={540}
                  height={360}
                  className={styles.mainImg}
                />
              </ExpandOnView>

              <div className={styles.shieldImgBox} data-aos="zoom-in" data-aos-delay="200">
                <Image
                  src={SOLUTIONS_INTRO.shieldImg}
                  alt="Cyber Shield Protection"
                  width={240}
                  height={240}
                  className={styles.shieldImg}
                />
              </div>

              <div className={styles.statBadge} data-aos="fade-up" data-aos-delay="300">
                <span className={styles.statNumber}>{SOLUTIONS_INTRO.statNumber}</span>
                <span className={styles.statLabel}>{SOLUTIONS_INTRO.statLabel}</span>
              </div>
            </div>
          </div>

          {/* Right Content Column with Text & Checkpoints */}
          <div className={styles.contentCol} data-aos="fade-left">
            <p className={styles.description}>{SOLUTIONS_INTRO.description}</p>

            <ul className={styles.checkList}>
              {SOLUTIONS_INTRO.checkpoints.map((item, idx) => (
                <li key={idx} className={styles.checkItem}>
                  <span className={styles.checkIcon}>
                    <i className="fas fa-check" />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className={styles.actionRow}>
              <Link href={SOLUTIONS_INTRO.ctaLink} className={styles.auditBtn}>
                {SOLUTIONS_INTRO.ctaText} <i className="caseicon-long-arrow-right" />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
