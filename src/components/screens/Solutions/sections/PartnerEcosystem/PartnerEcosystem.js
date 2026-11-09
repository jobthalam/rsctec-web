import React from "react";
import Container from "@/components/ui/Container/Container";
import SectionHeader from "@/components/common/SectionHeader/SectionHeader";
import PartnerCard from "./components/PartnerCard/PartnerCard";
import { SOLUTIONS_PARTNERS } from "@/constants/solutionsData";
import styles from "./PartnerEcosystem.module.scss";

export default function PartnerEcosystem() {
  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        <SectionHeader
          subtitle="TECHNOLOGY & COMPLIANCE"
          title="Enterprise Solutions & Technology Partners"
          description="RS Consulting delivers pure-play architecture and implementation across proven cybersecurity and data protection technologies."
          variant="light"
          alignment="center"
        />

        <div className={styles.solutionsList}>
          {SOLUTIONS_PARTNERS.map((partner, idx) => (
            <PartnerCard
              key={partner.id}
              partner={partner}
              isReversed={idx % 2 === 1}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
