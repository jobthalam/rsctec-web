import React from "react";
import AboutHero from "./sections/AboutHero/AboutHero";
import AboutOverview from "./sections/AboutOverview/AboutOverview";
import AboutWhatWeDo from "./sections/AboutWhatWeDo/AboutWhatWeDo";
import AboutWhyUs from "./sections/AboutWhyUs/AboutWhyUs";
import AboutMarquee from "./sections/AboutMarquee/AboutMarquee";
import AboutCapabilities from "./sections/AboutCapabilities/AboutCapabilities";
import AboutProtection from "./sections/AboutProtection/AboutProtection";
import AboutTeam from "./sections/AboutTeam/AboutTeam";
import AboutCTA from "./sections/AboutCTA/AboutCTA";
import ClientsPartners from "@/components/screens/Home/sections/ClientsPartners/ClientsPartners";
import styles from "./About.module.scss";

export default function About() {
  return (
    <main className={styles.aboutPage}>
      <AboutHero />
      <AboutOverview />
      <AboutWhatWeDo />
      <AboutWhyUs />
      <ClientsPartners />
      <AboutMarquee />
      <AboutCapabilities />
      <AboutProtection />
      <AboutTeam />
      <AboutCTA />
    </main>
  );
}
