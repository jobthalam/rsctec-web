import React from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container/Container";
import { DPDPA_COURSES } from "@/constants/trainingsData";
import styles from "./DpdpaCourses.module.scss";
import SectionHeader from "@/components/common/SectionHeader/SectionHeader";

export default function DpdpaCourses({ courses = DPDPA_COURSES }) {
  const list = courses && courses.length > 0 ? courses : DPDPA_COURSES;

  return (
    <section className={styles.section}>
      <SectionHeader
        subtitle={"Workforce Upskilling & Accreditation"}
        title={"Enterprise Cybersecurity & DPDPA Compliance Training"}
        description={
          "Hands-on technical certifications, offensive security bootcamps, and executive DPDPA masterclasses designed by seasoned practitioners with 40+ years of collective field experience."
        }
        variant="light"
      />
      <Container className={styles.container}>
        <div className={styles.grid}>
          {list.map((course, idx) => {
            const courseLink =
              course.link || `/trainings-certifications/${course.slug}`;
            const courseImg =
              course.image || "/images/about/blog-details1.jpg";
            const courseAvatar =
              course.avatar || "/images/about/team-img1.jpg";

            return (
              <Link
                key={course.id || course.slug}
                href={courseLink}
                className={styles.card}
                data-aos="fade-up"
                data-aos-delay={idx * 100}
              >
                <div className={styles.imageWrapper}>
                  <Image
                    src={courseImg}
                    alt={course.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className={styles.bgImage}
                  />
                </div>

                <div className={styles.overlay} />

                <div className={styles.content}>
                  <div className={styles.badgeWrapper}>
                    <span className={styles.pillBadge}>
                      {course.badge || course.category || "Accredited"}
                    </span>
                  </div>

                  <h3 className={styles.title}>{course.title}</h3>

                  <div className={styles.metaRow}>
                    <div className={styles.metaItem}>
                      <div className={styles.avatarWrapper}>
                        <Image
                          src={courseAvatar}
                          alt=""
                          width={26}
                          height={26}
                          className={styles.avatar}
                        />
                      </div>
                      <span className={styles.metaText}>{course.audience}</span>
                    </div>

                    <div className={styles.metaItem}>
                      <i className="far fa-clock" aria-hidden="true" />
                      <span className={styles.metaText}>{course.duration}</span>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
