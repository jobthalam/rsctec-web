import React from "react";
import PageHero from "@/components/common/PageHero/PageHero";
import ResourcesLeadMagnet from "./sections/ResourcesLeadMagnet/ResourcesLeadMagnet";
import ResourcesSelfCheck from "./sections/ResourcesSelfCheck/ResourcesSelfCheck";
import ResourcesMythFact from "./sections/ResourcesMythFact/ResourcesMythFact";
import ResourcesBlogTopics from "./sections/ResourcesBlogTopics/ResourcesBlogTopics";
import styles from "./Resources.module.scss";

export default function Resources() {
  return (
    <main className={styles.resourcesPage}>
      <PageHero
        subtitle="Knowledge & Compliance Hub"
        title="DPDPA Resources & Practical Guidance"
        description="Free checklists, interactive self-assessments, myth-busting guides, and expert perspectives to help you navigate India's Digital Personal Data Protection Act."
        breadcrumb="Resources"
        bgImage="/images/about/ptitle-bg1.jpg"
      />
      <ResourcesLeadMagnet />
      <ResourcesSelfCheck />
      <ResourcesMythFact />
      <ResourcesBlogTopics />
    </main>
  );
}
