import React from "react";
import Link from "next/link";
import Container from "@/components/ui/Container/Container";
import SectionHeader from "@/components/common/SectionHeader/SectionHeader";
import { ABOUT_PAGE_DATA } from "@/constants/constants";
import styles from "./AboutWhatWeDo.module.scss";

export default function AboutWhatWeDo() {
  const { whatWeDo } = ABOUT_PAGE_DATA;

  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        <SectionHeader
          subtitle={whatWeDo.eyebrow}
          title={whatWeDo.title}
          variant="dark"
          alignment="center"
        />

        <div className={styles.grid}>
          {whatWeDo.items.map((item, idx) => (
            <div
              key={item.title}
              className={styles.card}
              data-aos="fade-up"
              data-aos-delay={idx * 120}
            >
              <div className={styles.iconBox}>
                <i className={item.icon} />
              </div>
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.desc}>{item.desc}</p>
              <div className={styles.actionRow}>
                <Link href={item.ctaHref} className={styles.ctaBtn}>
                  {item.ctaLabel}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
