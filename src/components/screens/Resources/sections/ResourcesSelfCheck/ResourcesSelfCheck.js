"use client";

import React, { useState } from "react";
import Link from "next/link";
import Container from "@/components/ui/Container/Container";
import SectionHeader from "@/components/common/SectionHeader/SectionHeader";
import { SELF_CHECK_QUESTIONS } from "@/constants/resourcesData";
import styles from "./ResourcesSelfCheck.module.scss";

export default function ResourcesSelfCheck() {
  const [answers, setAnswers] = useState({});

  const handleToggle = (id, val) => {
    setAnswers((prev) => ({ ...prev, [id]: val }));
  };

  const hasNo = Object.values(answers).some((ans) => ans === "no");

  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        <SectionHeader
          subtitle="Quick Self-Check"
          title="Is Your Organisation DPDPA-Ready?"
          description="Evaluate your baseline readiness against the core obligations of India's Digital Personal Data Protection Act, 2023 with this 5-point assessment."
          variant="dark"
          alignment="center"
        />

        <div className={styles.checkConsole} data-aos="fade-up">
          <div className={styles.questionsList}>
            {SELF_CHECK_QUESTIONS.map((q) => {
              const current = answers[q.id];
              return (
                <div key={q.id} className={styles.questionCard}>
                  <div className={styles.qLeft}>
                    <span className={styles.stepNum}>0{q.id}</span>
                    <p className={styles.qText}>{q.question}</p>
                  </div>

                  <div className={styles.toggleGroup}>
                    <button
                      type="button"
                      className={`${styles.toggleBtn} ${current === "yes" ? styles.selectedYes : ""}`}
                      onClick={() => handleToggle(q.id, "yes")}
                    >
                      <i className="fas fa-check" aria-hidden="true" /> Yes
                    </button>
                    <button
                      type="button"
                      className={`${styles.toggleBtn} ${current === "no" ? styles.selectedNo : ""}`}
                      onClick={() => handleToggle(q.id, "no")}
                    >
                      <i className="fas fa-times" aria-hidden="true" /> No
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          <div className={styles.actionBanner}>
            <div className={styles.bannerText}>
              <h3 className={styles.bannerHeading}>
                {hasNo ? "Any “No”? Talk to us." : "Any “No”? Talk to us."}
              </h3>
              <p className={styles.bannerDesc}>
                Under the DPDP Act, failure to implement reasonable safeguards
                carries penalties up to ₹250 crore. Our team can help you
                identify and remediate every compliance gap.
              </p>
            </div>
            <Link href="/contact" className={styles.bannerBtn}>
              Talk to Our Experts <i className="caseicon-long-arrow-right" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
