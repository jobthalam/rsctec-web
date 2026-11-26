import React from "react";
import Image from "next/image";
import Container from "@/components/ui/Container/Container";
import SectionHeader from "@/components/common/SectionHeader/SectionHeader";
import ExpandOnView from "@/components/common/ExpandOnView/ExpandOnView";
import { ABOUT_PAGE_DATA } from "@/constants/constants";
import styles from "./AboutOverview.module.scss";

export default function AboutOverview() {
  const { whoWeAre, visionMission } = ABOUT_PAGE_DATA;

  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        <div className={styles.introBanner} data-aos="fade-up">
          <p className={styles.introText}>{ABOUT_PAGE_DATA.heroSubtitle}</p>
        </div>

        <SectionHeader
          subtitle={whoWeAre.eyebrow}
          title={whoWeAre.title}
          variant="light"
          alignment="center"
          className={styles.sectionHeader}
        />

        <br />
        <br />
        <br />

        <div className={styles.grid}>
          {/* Left Text Column: WHO WE ARE */}
          <div className={styles.contentCol} data-aos="fade-right">
            {whoWeAre.paragraphs.map((text, idx) => (
              <p key={idx} className={styles.paragraph}>
                {text}
              </p>
            ))}
          </div>

          {/* Right Visual Column with Dual Images and Experience Badge */}
          <div className={styles.visualCol}>
            <div className={styles.imageGrid}>
              <ExpandOnView
                direction="left"
                duration={850}
                className={styles.imgCardLeft}
              >
                <Image
                  src="/images/about/blog-details1.jpg"
                  alt="SOC Security Monitoring and Cyber Defense"
                  width={420}
                  height={500}
                  className={styles.featureImg}
                />
              </ExpandOnView>
              <ExpandOnView
                direction="bottom"
                duration={850}
                className={styles.imgCardRight}
              >
                <Image
                  src="/images/about/blog-details3.jpg"
                  alt="Cryptographic Defense and Hardware Security"
                  width={380}
                  height={460}
                  className={styles.featureImg}
                />
              </ExpandOnView>
              <div
                className={styles.expBadge}
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                <span className={styles.expNumber}>40+</span>
                <span className={styles.expLabel}>Years of Experience</span>
              </div>
            </div>
          </div>
        </div>

        {/* OUR VISION & OUR MISSION Cards */}
        <div className={styles.visionMissionGrid}>
          {visionMission.map((vm, idx) => (
            <div
              key={vm.badge}
              className={styles.vmCard}
              data-aos="fade-up"
              data-aos-delay={idx * 120}
            >
              <div className={styles.vmHeader}>
                <div className={styles.vmIconBox}>
                  <i className={vm.icon} />
                </div>
                <span className={styles.vmBadge}>{vm.badge}</span>
              </div>
              <h3 className={styles.vmTitle}>{vm.title}</h3>
              <p className={styles.vmText}>{vm.text}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
