import React from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container/Container";
import SectionHeader from "@/components/common/SectionHeader/SectionHeader";
import ExpandOnView from "@/components/common/ExpandOnView/ExpandOnView";
import {
  SERVICES_HERO,
  ADVISORY_SERVICES_LIST,
  TECHNICAL_SERVICES_LIST,
} from "@/constants/servicesData";
import styles from "./AdvisoryPillars.module.scss";

export default function AdvisoryPillars() {
  return (
    <>
      {/* Advisory Services: Split Visual + Feature Rows Layout (like AboutCapabilities) */}
      <section id="advisory" className={styles.section}>
        <Container className={styles.container}>
          <SectionHeader
            subtitle={ADVISORY_SERVICES_LIST.eyebrow}
            title={ADVISORY_SERVICES_LIST.title}
            description={SERVICES_HERO.intro}
            variant="light"
            alignment="center"
          />

          <div className={styles.grid}>
            {/* Left Overlapping Images with Badge */}
            <div className={styles.visualCol}>
              <div className={styles.imageStack}>
                <ExpandOnView
                  direction="left"
                  duration={850}
                  className={styles.mainImgCard}
                >
                  <Image
                    src="/images/cyberguard/blog-img9.jpg"
                    alt="RS Consulting Advisory & Security Operations"
                    width={460}
                    height={340}
                    className={styles.stackImg}
                  />
                  <div className={styles.statBadge}>
                    <span className={styles.statNum}>40+</span>
                    <span className={styles.statLabel}>
                      Years Collective Security &amp; Advisory Leadership
                    </span>
                  </div>
                </ExpandOnView>
                <div
                  className={styles.overlapImgCard}
                  data-aos="zoom-in"
                  data-aos-delay="200"
                >
                  <Image
                    src="/images/about/blog-details3.jpg"
                    alt="Enterprise Security & Privacy Architecture"
                    width={320}
                    height={240}
                    className={styles.stackImg}
                  />
                </div>
              </div>
            </div>

            {/* Right 5 Advisory Feature Rows */}
            <div className={styles.featuresCol}>
              {ADVISORY_SERVICES_LIST.items.map((item, idx) => (
                <div
                  key={item.title}
                  className={styles.featureRow}
                  data-aos="fade-left"
                  data-aos-delay={idx * 90}
                >
                  <div className={styles.iconBox}>
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={48}
                      height={48}
                      className={styles.capIcon}
                    />
                  </div>
                  <div className={styles.featureContent}>
                    <h3 className={styles.featureTitle}>{item.title}</h3>
                    <p className={styles.featureDesc}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Technical Services: Dark Split Checklist + SOC Visual Layout (like AboutProtection) */}
      <section className={styles.techSection}>
        <Container className={styles.container}>
          <div className={styles.techGrid}>
            <div className={styles.techContentCol} data-aos="fade-right">
              <SectionHeader
                subtitle={TECHNICAL_SERVICES_LIST.eyebrow}
                title={TECHNICAL_SERVICES_LIST.title}
                description={TECHNICAL_SERVICES_LIST.description}
                variant="dark"
                alignment="left"
                className={styles.techHeader}
              />

              <ul className={styles.checklist}>
                {TECHNICAL_SERVICES_LIST.items.map((item, idx) => (
                  <li key={idx} className={styles.checkItem}>
                    <span className={styles.checkIcon}>
                      <i className="fas fa-check" />
                    </span>
                    <span className={styles.checkText}>{item}</span>
                  </li>
                ))}
              </ul>

              <div className={styles.btnRow}>
                <Link href="/contact" className={styles.primaryBtn}>
                  Book a Free Advisory Consultation
                </Link>
              </div>
            </div>

            <div className={styles.techVisualCol}>
              <ExpandOnView
                direction="right"
                duration={850}
                className={styles.socImageCard}
              >
                <Image
                  src="/images/about/team-bg1.jpg"
                  alt="Hands-On Technical Security Assessments"
                  width={560}
                  height={480}
                  className={styles.socImg}
                />
              </ExpandOnView>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
