"use client";

import React, { useState } from "react";
import Link from "next/link";
import Container from "@/components/ui/Container/Container";
import SectionHeader from "@/components/common/SectionHeader/SectionHeader";
import { TRAINING_CATEGORIES, CATALOG_COURSES } from "@/constants/trainingsData";
import styles from "./CourseCatalog.module.scss";

export default function CourseCatalog() {
  const [activeCategory, setActiveCategory] = useState("All Tracks");

  const filteredCourses =
    activeCategory === "All Tracks"
      ? CATALOG_COURSES
      : CATALOG_COURSES.filter((c) => c.category === activeCategory);

  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        <SectionHeader
          subtitle="Curriculum Directory"
          title="Explore All Accredited Programs"
          description="Filter courses by domain. Each curriculum includes live instructor-led masterclasses, practical simulation drills, and verified completion credentials."
          variant="dark"
          alignment="center"
        >
          <div className={styles.filterPills}>
            {TRAINING_CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`${styles.pillBtn} ${activeCategory === cat ? styles.active : ""}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </SectionHeader>

        <div className={styles.grid}>
          {filteredCourses.map((c, idx) => (
            <div
              key={c.title}
              className={styles.courseCard}
              data-aos="fade-up"
              data-aos-delay={(idx % 2) * 100}
            >
              <div className={styles.cardTop}>
                <span className={styles.categoryBadge}>{c.category}</span>
                <span className={styles.durationBadge}>
                  <i className="far fa-clock" /> {c.duration}
                </span>
              </div>

              <h3 className={styles.courseTitle}>{c.title}</h3>
              <p className={styles.audience}>
                <strong>Target Audience:</strong> {c.audience}
              </p>
              <p className={styles.courseDesc}>{c.desc}</p>

              <div className={styles.cardBottom}>
                <Link href="/contact" className={styles.enquireLink}>
                  Request Syllabus & Batch Info <i className="caseicon-long-arrow-right" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
