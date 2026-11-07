import React from "react";
import AboutHero from "./sections/AboutHero/AboutHero";
import AboutMission from "./sections/AboutMission/AboutMission";
import AboutValues from "./sections/AboutValues/AboutValues";
import AboutLeadership from "./sections/AboutLeadership/AboutLeadership";
import styles from "./About.module.scss";

export default function About() {
  return (
    <main className={styles.aboutPage}>
      <AboutHero />
      <AboutMission />
      <AboutValues />
      <AboutLeadership />
    </main>
  );
}
