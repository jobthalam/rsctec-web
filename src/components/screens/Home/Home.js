import React from "react";
import styles from "./Home.module.scss";
import Hero from "./sections/Hero/Hero";
import MidBanner from "./sections/MidBanner/MidBanner";
import AboutExperts from "./sections/AboutExperts/AboutExperts";
import RibbonMarquee from "./sections/RibbonMarquee/RibbonMarquee";
import ServicesGrid from "./sections/ServicesGrid/ServicesGrid";
import WhyChooseUs from "./sections/WhyChooseUs/WhyChooseUs";
import StatsCounter from "./sections/StatsCounter/StatsCounter";
import DefendingInnovation from "./sections/DefendingInnovation/DefendingInnovation";
import ProjectCards from "./sections/ProjectCards/ProjectCards";
import Testimonials from "./sections/Testimonials/Testimonials";
import VideoBanner from "./sections/VideoBanner/VideoBanner";

export default function Home() {
  return (
    <div className={styles.homeWrapper}>
      <Hero />
      <MidBanner />
      <AboutExperts />
      <RibbonMarquee />
      <ServicesGrid />
      <WhyChooseUs />
      <StatsCounter />
      <DefendingInnovation />
      <ProjectCards />
      <Testimonials />
      <VideoBanner />
    </div>
  );
}
