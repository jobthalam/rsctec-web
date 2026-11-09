import React from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container/Container";
import SectionHeader from "@/components/common/SectionHeader/SectionHeader";
import { BLOG_TOPICS } from "@/constants/resourcesData";
import styles from "./ResourcesBlogTopics.module.scss";

export default function ResourcesBlogTopics() {
  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        <SectionHeader
          subtitle="Expert Guidance & Field Analysis"
          title="Featured DPDPA Compliance Insights"
          description="In-depth explorations of technical safeguards, regulatory overlaps, statutory incident reporting, and sector-specific playbooks."
          variant="dark"
          alignment="center"
        />

        <div className={styles.grid}>
          {BLOG_TOPICS.map((topic, idx) => (
            <Link
              key={topic.id}
              href={topic.link}
              className={styles.card}
              data-aos="fade-up"
              data-aos-delay={(idx % 3) * 100}
            >
              <div className={styles.imageWrapper}>
                <Image
                  src={topic.image}
                  alt={topic.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className={styles.bgImage}
                />
              </div>

              <div className={styles.overlay} />

              <div className={styles.content}>
                <div className={styles.cardTop}>
                  <span className={styles.pillBadge}>{topic.tag}</span>
                  <span className={styles.readTime}>
                    <i className="far fa-clock" aria-hidden="true" /> {topic.readTime}
                  </span>
                </div>

                <h3 className={styles.title}>{topic.title}</h3>

                <div className={styles.cardFooter}>
                  <span className={styles.readLink}>
                    Request Full Briefing <i className="caseicon-long-arrow-right" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
