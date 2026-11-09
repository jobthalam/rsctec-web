import React from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container/Container";
import SectionHeader from "@/components/common/SectionHeader/SectionHeader";
import ExpandOnView from "@/components/common/ExpandOnView/ExpandOnView";
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
        <SectionHeader
          subtitle="Sector-Specific Focus"
          title="Proven Security & Compliance Across Regulated Sectors"
          description="The DPDP Act and modern infosec mandates apply across all industries. Explore our specialized security architectures tailored to high-compliance sectors."
          variant="dark"
          alignment="center"
        />

        <div className={styles.grid}>
          {PROJECTS.map((p, idx) => (
            <Link
              key={p.title}
              href={p.link}
              className={styles.projectCard}
              data-aos="fade-up"
              data-aos-delay={idx * 120}
            >
              <ExpandOnView direction="bottom" duration={800} className={styles.imgBox}>
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
              </ExpandOnView>
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
