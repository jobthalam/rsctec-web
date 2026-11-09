"use client";

import React, { useState } from "react";
import Container from "@/components/ui/Container/Container";
import SectionHeader from "@/components/common/SectionHeader/SectionHeader";
import { DPDPA_FAQS } from "@/constants/dpdpaData";
import styles from "./DpdpaFAQ.module.scss";

export default function DpdpaFAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (idx) => {
    setOpenIndex((prev) => (prev === idx ? -1 : idx));
  };

  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        <SectionHeader
          subtitle="FAQS"
          title="Frequently Asked Questions About DPDPA"
          description="Clear answers to the most common questions on applicability, timelines, penalties, and technical implementation."
          variant="light"
          alignment="center"
        />

        <div className={styles.faqWrap}>
          {DPDPA_FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className={`${styles.faqItem} ${isOpen ? styles.open : ""}`}
                data-aos-delay={idx * 50}
              >
                <button
                  type="button"
                  className={styles.questionBtn}
                  onClick={() => toggleFAQ(idx)}
                  aria-expanded={isOpen}
                >
                  <span className={styles.questionText}>{faq.q}</span>
                  <span className={styles.iconCircle}>
                    <i className={`fas ${isOpen ? "fa-minus" : "fa-plus"}`} />
                  </span>
                </button>

                {isOpen && (
                  <div className={styles.answerBox}>
                    <p className={styles.answerText}>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
