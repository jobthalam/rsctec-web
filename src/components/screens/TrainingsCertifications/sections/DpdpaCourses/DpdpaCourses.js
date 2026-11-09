import React from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container/Container";
import { DPDPA_COURSES } from "@/constants/trainingsData";
import styles from "./DpdpaCourses.module.scss";
import SectionHeader from "@/components/common/SectionHeader/SectionHeader";

export default function DpdpaCourses() {
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
          {DPDPA_COURSES.map((course, idx) => (
            <Link
              key={course.id}
              href={course.link}
              className={styles.card}
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <div className={styles.imageWrapper}>
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className={styles.bgImage}
                />
              </div>

              <div className={styles.overlay} />

              <div className={styles.content}>
                <div className={styles.badgeWrapper}>
                  <span className={styles.pillBadge}>{course.badge}</span>
                </div>

                <h3 className={styles.title}>{course.title}</h3>

                <div className={styles.metaRow}>
                  <div className={styles.metaItem}>
                    <div className={styles.avatarWrapper}>
                      <Image
                        src={course.avatar}
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
          ))}
        </div>
      </Container>
    </section>
  );
}
