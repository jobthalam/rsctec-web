import React from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container/Container";
import SectionHeader from "@/components/common/SectionHeader/SectionHeader";
import ExpandOnView from "@/components/common/ExpandOnView/ExpandOnView";
import styles from "./AboutOverview.module.scss";

export default function AboutOverview() {
  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        <div className={styles.grid}>
          {/* Left Text Column */}
          <div className={styles.contentCol} data-aos="fade-right">
            <SectionHeader
              subtitle="ABOUT US"
              title="Defending Your Digital World. 24/7"
              variant="light"
              alignment="left"
              className={styles.sectionHeader}
            />
            <p className={styles.lead}>
              Pure play Information Security, Cyber Risk Management consulting &amp; Cloud Services company.
            </p>
            <p className={styles.paragraph}>
              Our visionary team brings together a collective experience of over 4 decades
              in the IT industry, witnessing the evolution of technology from a simple
              operational tool to a critical business lifeline. Founded in 2015, RS Consulting
              is evangelized to create proactive security models where technology stays ahead
              of emerging threats, delivering tailored strategies for modern enterprises.
            </p>
            <div className={styles.btnRow}>
              <Link href="/solutions" className={styles.primaryBtn}>
                Explore Our Solutions
              </Link>
            </div>
          </div>

          {/* Right Visual Column with Dual Images and Experience Badge */}
          <div className={styles.visualCol}>
            <div className={styles.imageGrid}>
              <ExpandOnView direction="left" duration={850} className={styles.imgCardLeft}>
                <Image
                  src="/images/about/blog-details1.jpg"
                  alt="SOC Security Monitoring and Cyber Defense"
                  width={420}
                  height={500}
                  className={styles.featureImg}
                />
              </ExpandOnView>
              <ExpandOnView direction="bottom" duration={850} className={styles.imgCardRight}>
                <Image
                  src="/images/about/blog-details3.jpg"
                  alt="Cryptographic Defense and Hardware Security"
                  width={380}
                  height={460}
                  className={styles.featureImg}
                />
              </ExpandOnView>
              <div className={styles.expBadge} data-aos="zoom-in" data-aos-delay="200">
                <span className={styles.expNumber}>4+</span>
                <span className={styles.expLabel}>Decades of Experience</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
