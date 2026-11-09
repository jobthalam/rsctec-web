import React from "react";
import Container from "@/components/ui/Container/Container";
import SectionHeader from "@/components/common/SectionHeader/SectionHeader";
import { MYTH_FACT_SERIES } from "@/constants/resourcesData";
import styles from "./ResourcesMythFact.module.scss";

export default function ResourcesMythFact() {
  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        <SectionHeader
          subtitle="DPDPA Realities"
          title="Myth vs Fact"
          description="Separating common misconceptions from statutory requirements under India's Digital Personal Data Protection Act, 2023."
          variant="dark"
          alignment="center"
        />

        <div className={styles.grid}>
          {MYTH_FACT_SERIES.map((item, idx) => (
            <div
              key={item.id}
              className={styles.card}
              data-aos="fade-up"
              data-aos-delay={(idx % 3) * 100}
            >
              <div className={styles.mythBlock}>
                <span className={styles.mythBadge}>
                  <i className="fas fa-times-circle" aria-hidden="true" /> Myth
                </span>
                <h3 className={styles.mythText}>“{item.myth}”</h3>
              </div>

              <div className={styles.divider} />

              <div className={styles.factBlock}>
                <span className={styles.factBadge}>
                  <i className="fas fa-check-circle" aria-hidden="true" /> Fact
                </span>
                <p className={styles.factText}>{item.fact}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
