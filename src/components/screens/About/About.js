import React from "react";
import AboutHero from "./sections/AboutHero/AboutHero";
import AboutOverview from "./sections/AboutOverview/AboutOverview";
import AboutMarquee from "./sections/AboutMarquee/AboutMarquee";
import AboutCapabilities from "./sections/AboutCapabilities/AboutCapabilities";
import AboutProtection from "./sections/AboutProtection/AboutProtection";
import AboutTeam from "./sections/AboutTeam/AboutTeam";
import AboutCTA from "./sections/AboutCTA/AboutCTA";
import styles from "./About.module.scss";
import ClientsPartners from "../Home/sections/ClientsPartners/ClientsPartners";

export default function About() {
  return (
    <main className={styles.aboutPage}>
      <AboutHero />
      <AboutOverview />
      <AboutMarquee />
      <AboutCapabilities />
      <ClientsPartners />
      <AboutProtection />
      <AboutTeam />
      <AboutCTA />
    </main>
  );
}
