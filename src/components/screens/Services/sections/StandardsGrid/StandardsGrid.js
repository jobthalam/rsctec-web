import React from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container/Container";
import SectionHeader from "@/components/common/SectionHeader/SectionHeader";
import { STANDARDS_SUPPORTED } from "@/constants/servicesData";
import styles from "./StandardsGrid.module.scss";

export default function StandardsGrid() {
  return (
    <section id="standards" className={styles.section}>
      <Container className={styles.container}>
        <SectionHeader
          subtitle={STANDARDS_SUPPORTED.eyebrow}
          title={STANDARDS_SUPPORTED.title}
          description={STANDARDS_SUPPORTED.description}
          variant="dark"
          alignment="center"
        />

        <div className={styles.grid}>
          {STANDARDS_SUPPORTED.cards.map((card, idx) => (
            <div
              key={card.code}
              className={styles.card}
              data-aos="fade-up"
              data-aos-delay={(idx % 3) * 100}
            >
              <div className={styles.bgIconOverlay} aria-hidden="true">
                <Image
                  src={card.bgIcon}
                  alt=""
                  width={210}
                  height={210}
                  className={styles.bgIconImg}
                />
              </div>

              <div className={styles.topRow}>
                <div className={styles.iconBox}>
                  <Image
                    src={card.icon}
                    alt={card.code}
                    width={38}
                    height={38}
                    className={styles.iconImg}
                  />
                </div>
                <span className={styles.codeBadge}>{card.code}</span>
              </div>

              <h3 className={styles.cardTitle}>{card.name}</h3>
              <p className={styles.cardDesc}>{card.summary}</p>
              <Link href={card.href} className={styles.learnMoreBtn}>
                {card.linkText}
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
