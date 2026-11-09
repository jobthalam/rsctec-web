import React from "react";
import SolutionsHero from "./sections/SolutionsHero/SolutionsHero";
import SolutionsIntro from "./sections/SolutionsIntro/SolutionsIntro";
import SolutionsArchitecture from "./sections/SolutionsArchitecture/SolutionsArchitecture";
import PartnerEcosystem from "./sections/PartnerEcosystem/PartnerEcosystem";
import ClientsPartners from "@/components/screens/Home/sections/ClientsPartners/ClientsPartners";
import SolutionsCTA from "./sections/SolutionsCTA/SolutionsCTA";
import styles from "./Solutions.module.scss";

export default function Solutions() {
  return (
    <main className={styles.solutionsPage}>
      <SolutionsHero />
      <SolutionsIntro />
      <SolutionsArchitecture />
      <PartnerEcosystem />
      <ClientsPartners />
      <SolutionsCTA />
    </main>
  );
}
