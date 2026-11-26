import React from "react";
import PageHero from "@/components/common/PageHero/PageHero";
import { ABOUT_PAGE_DATA } from "@/constants/constants";

export default function AboutHero() {
  return (
    <PageHero
      title={ABOUT_PAGE_DATA.heroTitle}
      breadcrumb="About"
      quote="‘Prevention is cheaper than a breach’"
      bgImage="/images/about/ptitle-bg1.jpg"
    />
  );
}
