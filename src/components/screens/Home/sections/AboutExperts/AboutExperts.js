import React from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container/Container";
import SectionHeader from "@/components/common/SectionHeader/SectionHeader";
import ExpandOnView from "@/components/common/ExpandOnView/ExpandOnView";
import { HOME_ABOUT_BLOCK } from "@/constants/constants";
import styles from "./AboutExperts.module.scss";

export default function AboutExperts() {
  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        <SectionHeader
          subtitle={HOME_ABOUT_BLOCK.eyebrow}
          title={HOME_ABOUT_BLOCK.headline}
          variant="light"
          alignment="center"
        />

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
                  alt="Security Operations Center"
                  width={540}
                  height={360}
                  className={styles.mainImg}
                />
              </ExpandOnView>

              <div
                className={styles.shieldImgBox}
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                <Image
                  src="/images/cyberguard/img-contact1-308x308.jpg"
                  alt="Cyber Shield Protection"
                  width={240}
                  height={240}
                  className={styles.shieldImg}
                />
              </div>

              <div
                className={styles.statBadge}
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <span className={styles.statNumber}>40+</span>
                <span className={styles.statLabel}>
                  Years collective team leadership experience
                </span>
              </div>
            </div>
          </div>

          <div className={styles.contentCol} data-aos="fade-left">
            {HOME_ABOUT_BLOCK.paragraphs.map((text, idx) => (
              <p key={idx} className={styles.description}>
                {text}
              </p>
            ))}

            <ul className={styles.checkList}>
              {HOME_ABOUT_BLOCK.checkpoints.map((item) => (
                <li key={item} className={styles.checkItem}>
                  <span className={styles.checkIcon}>
                    <i className="fas fa-check" />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className={styles.actionRow}>
              <Link href={HOME_ABOUT_BLOCK.ctaHref} className={styles.auditBtn}>
                {HOME_ABOUT_BLOCK.ctaLabel}
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
