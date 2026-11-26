import React from "react";
import ServicesHero from "./sections/ServicesHero/ServicesHero";
import AdvisoryPillars from "./sections/AdvisoryPillars/AdvisoryPillars";
import StandardsGrid from "./sections/StandardsGrid/StandardsGrid";
import HowWeWork from "./sections/HowWeWork/HowWeWork";
import EngagementModels from "./sections/EngagementModels/EngagementModels";
import ClientsPartners from "@/components/screens/Home/sections/ClientsPartners/ClientsPartners";
import ServicesCTA from "./sections/ServicesCTA/ServicesCTA";
import styles from "./Services.module.scss";

export default function Services() {
  return (
    <main className={styles.servicesPage}>
      <ServicesHero />
      <AdvisoryPillars />
      <StandardsGrid />
      <HowWeWork />
      <EngagementModels />
      <ClientsPartners />
      <ServicesCTA />
    </main>
  );
}
