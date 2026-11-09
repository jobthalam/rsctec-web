import React from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container/Container";
import styles from "./ProjectCards.module.scss";

const PROJECTS = [
  {
    image: "/images/cyberguard/projects-img6-1000x1000.jpg",
    title: "Banking, Payments & Fintech",
    link: "/solutions#dpdpa",
  },
  {
    image: "/images/cyberguard/projects-img5-1000x1000.jpg",
    title: "IT/ITES, SaaS & Cloud Platforms",
    link: "/solutions#backup",
  },
  {
    image: "/images/cyberguard/projects-img4-1000x1000.jpg",
    title: "Healthcare & Digital Enterprises",
    link: "/solutions#monitoring",
  },
];

export default function ProjectCards() {
  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        <div className={styles.header}>
          <span className={styles.subtitle}>Sector-Specific Focus</span>
          <h2 className={styles.title}>
            Proven Security & Compliance Across Regulated Sectors
          </h2>
          <p className={styles.description}>
            The DPDP Act and modern infosec mandates apply across all industries.
            Explore our specialized security architectures tailored to high-compliance sectors.
          </p>
        </div>

        <div className={styles.grid}>
          {PROJECTS.map((p) => (
            <Link key={p.title} href={p.link} className={styles.projectCard}>
              <div className={styles.imgBox}>
                <Image
                  src={p.image}
                  alt={p.title}
                  width={380}
                  height={380}
                  className={styles.img}
                />
                <div className={styles.hoverOverlay}>
                  <span className={styles.viewDetails}>
                    View Details <i className="caseicon-long-arrow-right" />
                  </span>
                </div>
              </div>
              <div className={styles.captionBox}>
                <h3 className={styles.cardTitle}>{p.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
