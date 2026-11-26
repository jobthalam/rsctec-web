"use client";

import React from "react";
import Link from "next/link";
import { DPDPA_COURSES, CATALOG_COURSES } from "@/constants/trainingsData";
import {
  LEAD_MAGNET,
  SELF_CHECK_QUESTIONS,
  MYTH_FACT_SERIES,
  BLOG_TOPICS,
} from "@/constants/resourcesData";
import {
  ADMIN_SERVICES_CATALOG,
  ADMIN_SOLUTIONS_CATALOG,
} from "@/constants/adminData";
import styles from "./CatalogSection.module.scss";

export default function CatalogSection({ activeTab, searchQuery }) {
  const q = (searchQuery || "").toLowerCase();

  if (activeTab === "trainings") {
    const filteredCatalog = CATALOG_COURSES.filter(
      (c) => !q || JSON.stringify(c).toLowerCase().includes(q)
    );

    return (
      <div className={styles.wrapper}>
        <div className={styles.sectionBar}>
          <div>
            <h2 className={styles.sectionTitle}>
              Role-Based DPDPA Programmes ({DPDPA_COURSES.length}) &amp; Full
              Catalog ({CATALOG_COURSES.length})
            </h2>
            <p className={styles.sectionSub}>
              Courses published on /trainings-certifications with detail tabs
            </p>
          </div>
          <Link href="/trainings-certifications" className={styles.previewBtn}>
            <i className="fas fa-external-link-alt" aria-hidden="true" />{" "}
            Preview Page
          </Link>
        </div>

        <div className={styles.cardsGrid}>
          {filteredCatalog.map((course) => (
            <article key={course.id} className={styles.catalogCard}>
              <div className={styles.cardTop}>
                <span className={styles.categoryBadge}>{course.category}</span>
                <span className={styles.durationTag}>{course.duration}</span>
              </div>
              <h3 className={styles.cardTitle}>{course.title}</h3>
              <p className={styles.cardAudience}>
                <strong>Audience:</strong> {course.audience}
              </p>
              <p className={styles.cardDesc}>{course.desc}</p>
              <div className={styles.cardFooter}>
                <span className={styles.slugCode}>/{course.slug}</span>
                <Link
                  href={`/trainings-certifications/${course.slug}`}
                  className={styles.cardLink}
                >
                  View Syllabus →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    );
  }

  if (activeTab === "services") {
    return (
      <div className={styles.wrapper}>
        <div className={styles.sectionBar}>
          <div>
            <h2 className={styles.sectionTitle}>
              Advisory &amp; Technical Services ({ADMIN_SERVICES_CATALOG.length})
            </h2>
            <p className={styles.sectionSub}>
              Information Security, Data Privacy, DPDPA Compliance &amp; AI
              Governance practices
            </p>
          </div>
          <Link href="/services" className={styles.previewBtn}>
            <i className="fas fa-external-link-alt" aria-hidden="true" />{" "}
            Preview Services
          </Link>
        </div>

        <div className={styles.cardsGrid}>
          {ADMIN_SERVICES_CATALOG.map((srv) => (
            <article key={srv.id} className={styles.catalogCard}>
              <div className={styles.cardTop}>
                <span className={styles.categoryBadge}>{srv.category}</span>
                <span className={styles.statusLive}>{srv.status}</span>
              </div>
              <h3 className={styles.cardTitle}>{srv.title}</h3>
              <p className={styles.cardAudience}>
                <strong>Frameworks:</strong> {srv.standards}
              </p>
              <div className={styles.cardFooter}>
                <span className={styles.slugCode}>{srv.route}</span>
                <Link href={srv.route} className={styles.cardLink}>
                  Open Route →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    );
  }

  if (activeTab === "solutions") {
    return (
      <div className={styles.wrapper}>
        <div className={styles.sectionBar}>
          <div>
            <h2 className={styles.sectionTitle}>
              Partner Technology Solutions ({ADMIN_SOLUTIONS_CATALOG.length})
            </h2>
            <p className={styles.sectionSub}>
              Enterprise security platforms deployed and supported by RS
              Consulting
            </p>
          </div>
          <Link href="/solutions" className={styles.previewBtn}>
            <i className="fas fa-external-link-alt" aria-hidden="true" />{" "}
            Preview Solutions
          </Link>
        </div>

        <div className={styles.cardsGrid}>
          {ADMIN_SOLUTIONS_CATALOG.map((sol) => (
            <article key={sol.id} className={styles.catalogCard}>
              <div className={styles.cardTop}>
                <span className={styles.categoryBadge}>{sol.partner}</span>
                <span className={styles.statusLive}>{sol.status}</span>
              </div>
              <h3 className={styles.cardTitle}>{sol.name}</h3>
              <p className={styles.cardDesc}>{sol.category}</p>
              <div className={styles.cardFooter}>
                <span className={styles.slugCode}>{sol.route}</span>
                <Link href={sol.route} className={styles.cardLink}>
                  View Solution →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.sectionBar}>
        <div>
          <h2 className={styles.sectionTitle}>
            DPDPA Resources, Self-Check &amp; Blog Hub
          </h2>
          <p className={styles.sectionSub}>
            Lead magnet checklist, 5-point self-check, myth vs fact series, and
            featured articles
          </p>
        </div>
        <Link href="/resources" className={styles.previewBtn}>
          <i className="fas fa-external-link-alt" aria-hidden="true" /> Preview
          Resources
        </Link>
      </div>

      <article className={styles.catalogCard}>
        <span className={styles.categoryBadge}>Active Lead Magnet</span>
        <h3 className={styles.cardTitle}>{LEAD_MAGNET.title}</h3>
        <p className={styles.cardDesc}>{LEAD_MAGNET.text}</p>
      </article>

      <div className={styles.dualGrid}>
        <div className={styles.panelBox}>
          <h3 className={styles.panelHeading}>
            5-Point DPDPA Self-Check Questions ({SELF_CHECK_QUESTIONS.length})
          </h3>
          <ul className={styles.simpleList}>
            {SELF_CHECK_QUESTIONS.map((item) => (
              <li key={item.id}>
                <span className={styles.itemTag}>{item.category}</span>
                <p>{item.question}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.panelBox}>
          <h3 className={styles.panelHeading}>
            Published Blog Topics ({BLOG_TOPICS.length}) &amp; Myths (
            {MYTH_FACT_SERIES.length})
          </h3>
          <ul className={styles.simpleList}>
            {BLOG_TOPICS.map((post) => (
              <li key={post.id}>
                <span className={styles.itemTag}>
                  {post.tag} · {post.readTime}
                </span>
                <p>{post.title}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
