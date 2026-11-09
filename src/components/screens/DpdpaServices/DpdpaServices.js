import React from "react";
import DpdpaHero from "./sections/DpdpaHero/DpdpaHero";
import DpdpaTimeline from "./sections/DpdpaTimeline/DpdpaTimeline";
import DpdpaMythFact from "./sections/DpdpaMythFact/DpdpaMythFact";
import DpdpaServicesGrid from "./sections/DpdpaServicesGrid/DpdpaServicesGrid";
import DpdpaTechMapping from "./sections/DpdpaTechMapping/DpdpaTechMapping";
import DpdpaMethodology from "./sections/DpdpaMethodology/DpdpaMethodology";
import DpdpaSectors from "./sections/DpdpaSectors/DpdpaSectors";
import ClientsPartners from "@/components/screens/Home/sections/ClientsPartners/ClientsPartners";
import DpdpaPackages from "./sections/DpdpaPackages/DpdpaPackages";
import DpdpaDifferentiators from "./sections/DpdpaDifferentiators/DpdpaDifferentiators";
import DpdpaFAQ from "./sections/DpdpaFAQ/DpdpaFAQ";
import DpdpaCTA from "./sections/DpdpaCTA/DpdpaCTA";
import styles from "./DpdpaServices.module.scss";

export default function DpdpaServices() {
  return (
    <main className={styles.servicesPage}>
      <DpdpaHero />
      <DpdpaTimeline />
      <DpdpaMythFact />
      <DpdpaServicesGrid />
      <DpdpaTechMapping />
      <DpdpaMethodology />
      <DpdpaSectors />
      <ClientsPartners />
      <DpdpaPackages />
      <DpdpaDifferentiators />
      <DpdpaFAQ />
      <DpdpaCTA />
    </main>
  );
}
