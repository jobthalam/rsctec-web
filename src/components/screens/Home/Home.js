import React from "react";
import styles from "./Home.module.scss";
import Hero from "./sections/Hero/Hero";
import MidBanner from "./sections/MidBanner/MidBanner";
import AboutExperts from "./sections/AboutExperts/AboutExperts";
import RibbonMarquee from "./sections/RibbonMarquee/RibbonMarquee";
import ServicesGrid from "./sections/ServicesGrid/ServicesGrid";
import WhyChooseUs from "./sections/WhyChooseUs/WhyChooseUs";
import StatsCounter from "./sections/StatsCounter/StatsCounter";
import ClientsPartners from "./sections/ClientsPartners/ClientsPartners";
import ProjectCards from "./sections/ProjectCards/ProjectCards";
import Testimonials from "./sections/Testimonials/Testimonials";
import VideoBanner from "./sections/VideoBanner/VideoBanner";
import DpdpaServicesGrid from "../DpdpaServices/sections/DpdpaServicesGrid/DpdpaServicesGrid";

export default function Home() {
  return (
    <div className={styles.homeWrapper}>
      <Hero />
      <MidBanner />
      <AboutExperts />
      <ClientsPartners />
      <DpdpaServicesGrid isHome />
      <RibbonMarquee />
      <WhyChooseUs />
      <StatsCounter />
      <ProjectCards />
      {/* <Testimonials /> */}
      <VideoBanner />
    </div>
  );
}
