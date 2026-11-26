"use client";

import React, { useState } from "react";
import Link from "next/link";
import Container from "@/components/ui/Container/Container";
import { useApp } from "@/context/AppContext";
import styles from "./TrainingTabs.module.scss";

export default function TrainingTabs({ course }) {
  const tabs = course.tabs || [];
  const [activeTabId, setActiveTabId] = useState(tabs[0]?.id || "overview");
  const { openTrainingModal } = useApp();

  const activeTab = tabs.find((t) => t.id === activeTabId) || tabs[0];

  if (!activeTab) return null;

  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        <div className={styles.topNav}>
          <Link href="/trainings-certifications" className={styles.backLink}>
            &larr; Back to Trainings &amp; Certifications
          </Link>
        </div>

        <div className={styles.tabsWrapper}>
          {/* 5-Tab Bar matching uploaded reference image */}
          <div className={styles.tabsBar} role="tablist">
            {tabs.map((tab) => {
              const isActive = tab.id === activeTab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  className={`${styles.tabBtn} ${
                    isActive ? styles.activeTab : ""
                  }`}
                  onClick={() => setActiveTabId(tab.id)}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* HTML Content Panel */}
          <div className={styles.contentPanel} role="tabpanel">
            <div
              className={styles.htmlContent}
              dangerouslySetInnerHTML={{ __html: activeTab.htmlContent }}
            />
          </div>
        </div>

        <div className={styles.ctaRow}>
          <button
            type="button"
            className={styles.enquireBtn}
            onClick={() => openTrainingModal(course.title)}
          >
            Enquire Now
          </button>
        </div>
      </Container>
    </section>
  );
}
