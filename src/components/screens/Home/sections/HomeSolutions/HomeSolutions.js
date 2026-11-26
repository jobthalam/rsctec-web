"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Container from "@/components/ui/Container/Container";
import SectionHeader from "@/components/common/SectionHeader/SectionHeader";
import { HOME_RSC_BANNER, HOME_SOLUTIONS_TABS } from "@/constants/constants";
import styles from "./HomeSolutions.module.scss";

export default function HomeSolutions() {
  const [activeTabId, setActiveTabId] = useState(
    HOME_SOLUTIONS_TABS.tabs[0].id,
  );

  const activeTab =
    HOME_SOLUTIONS_TABS.tabs.find((t) => t.id === activeTabId) ||
    HOME_SOLUTIONS_TABS.tabs[0];

  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        {/* Bold RSC Statement Block Below Hero Banner */}
        {/* <div className={styles.rscBanner} data-aos="fade-up">
          <span className={styles.rscBadge}>{HOME_RSC_BANNER.badge}</span>
          <h2 className={styles.rscHeadline}>{HOME_RSC_BANNER.headline}</h2>
          <p className={styles.rscSubtext}>{HOME_RSC_BANNER.subtext}</p>
        </div> */}

        <SectionHeader
          subtitle="WHAT WE DELIVER"
          title={HOME_SOLUTIONS_TABS.sectionTitle}
          description={activeTab.intro}
          variant="dark"
          alignment="center"
        />

        {/* Interactive Two-Tab Switcher */}
        <div className={styles.tabControls} role="tablist">
          {HOME_SOLUTIONS_TABS.tabs.map((tab) => {
            const isActive = tab.id === activeTab.id;
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                className={`${styles.tabBtn} ${
                  isActive ? styles.tabBtnActive : ""
                }`}
                onClick={() => setActiveTabId(tab.id)}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Active Tab Grid */}
        <div
          key={activeTab.id}
          className={
            activeTab.id === "advisory" ? styles.advisoryGrid : styles.techGrid
          }
        >
          {activeTab.items.map((item, idx) => (
            <div
              key={item.name}
              className={styles.card}
              data-aos="fade-up"
              data-aos-delay={(idx % 3) * 100}
            >
              <div className={styles.bgIconOverlay} aria-hidden="true">
                <Image
                  src={item.bgIcon}
                  alt=""
                  width={210}
                  height={210}
                  className={styles.bgIconImg}
                />
              </div>

              <div className={styles.iconBox}>
                <Image
                  src={item.icon}
                  alt={item.name}
                  width={38}
                  height={38}
                  className={styles.iconImg}
                />
              </div>

              <h3 className={styles.cardTitle}>{item.name}</h3>
              <p className={styles.cardDesc}>{item.desc}</p>
              <Link href={item.href} className={styles.learnMoreBtn}>
                Learn More
              </Link>
            </div>
          ))}
        </div>

        <div className={styles.ctaRow}>
          <Link href={activeTab.ctaHref} className={styles.exploreBtn}>
            {activeTab.ctaLabel}
          </Link>
        </div>
      </Container>
    </section>
  );
}
