import React from "react";
import PageHero from "@/components/common/PageHero/PageHero";
import { SERVICES_HERO } from "@/constants/servicesData";

export default function ServicesHero() {
  return (
    <PageHero
      title={SERVICES_HERO.title}
      subtitle={SERVICES_HERO.subtitle}
      breadcrumb={SERVICES_HERO.breadcrumb}
      bgImage="/images/about/ptitle-bg1.jpg"
    />
  );
}
