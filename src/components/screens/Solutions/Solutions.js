import React from "react";
import SolutionsHero from "./sections/SolutionsHero/SolutionsHero";
import PartnerEcosystem from "./sections/PartnerEcosystem/PartnerEcosystem";
import DPDPASolutions from "./sections/DPDPASolutions/DPDPASolutions";
import styles from "./Solutions.module.scss";

export default function Solutions() {
  return (
    <main className={styles.solutionsPage}>
      <SolutionsHero />
      <PartnerEcosystem />
      <DPDPASolutions />
    </main>
  );
}
