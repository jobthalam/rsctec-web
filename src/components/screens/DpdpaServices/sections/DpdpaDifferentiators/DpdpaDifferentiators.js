import React from "react";
import Container from "@/components/ui/Container/Container";
import SectionHeader from "@/components/common/SectionHeader/SectionHeader";
import { DPDPA_WHY_RS } from "@/constants/dpdpaData";
import styles from "./DpdpaDifferentiators.module.scss";

export default function DpdpaDifferentiators() {
  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        <SectionHeader
          subtitle="WHY RS CONSULTING"
          title="Security-Led, Not Paperwork-Led Cyber Defense"
          description="We implement the practical technical safeguards required to satisfy the DPDP Act and protect enterprise networks, rather than stopping at policy checklists."
          variant="light"
          alignment="center"
        />

        <div className={styles.grid}>
          {DPDPA_WHY_RS.map((item, idx) => (
            <div
              key={item.title}
              className={styles.diffCard}
              data-aos="fade-up"
              data-aos-delay={idx * 80}
            >
              <div className={styles.iconCircle}>
                <i className={item.icon} />
              </div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDesc}>{item.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
