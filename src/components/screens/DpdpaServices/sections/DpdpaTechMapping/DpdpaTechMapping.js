import React from "react";
import Image from "next/image";
import Container from "@/components/ui/Container/Container";
import SectionHeader from "@/components/common/SectionHeader/SectionHeader";
import { DPDPA_TECH_MAPPINGS } from "@/constants/dpdpaData";
import styles from "./DpdpaTechMapping.module.scss";

export default function DpdpaTechMapping() {
  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        <SectionHeader
          subtitle="TECHNOLOGY INTEGRATION"
          title="DPDPA Obligations, Solved with Security Technology"
          description="This is where RS Consulting is different. We map each statutory obligation directly to proven solutions from our global partners and implement them for you."
          variant="light"
          alignment="center"
        />

        <div className={styles.grid}>
          {DPDPA_TECH_MAPPINGS.map((item, idx) => (
            <div
              key={item.obligation}
              className={styles.mapCard}
              data-aos="fade-up"
              data-aos-delay={idx * 70}
            >
              <div className={styles.cardHeader}>
                <span className={styles.badge}>Statutory Obligation</span>
                <span className={styles.partnerBadge}>{item.partner}</span>
              </div>

              <h3 className={styles.obligationTitle}>{item.obligation}</h3>

              <div className={styles.solutionBox}>
                <span className={styles.solutionLabel}>How We Address It:</span>
                <p className={styles.solutionText}>{item.howWeAddress}</p>
              </div>

              <div className={styles.partnerFooter}>
                <div className={styles.logoWrap}>
                  {/* <Image
                    src={item.logo}
                    alt={item.partner}
                    width={90}
                    height={38}
                    className={styles.logoImg}
                  /> */}
                </div>
                <span className={styles.poweredBy}>
                  Powered by {item.partner}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
