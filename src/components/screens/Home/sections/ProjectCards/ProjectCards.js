import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./ProjectCards.module.scss";

const PROJECTS = [
  {
    image: "/images/cyberguard/projects-img6-1000x1000.jpg",
    title: "Customer Data Protection",
    link: "/solutions#dpdpa",
  },
  {
    image: "/images/cyberguard/projects-img5-1000x1000.jpg",
    title: "Remote Workforce Protection",
    link: "/solutions#cloud",
  },
  {
    image: "/images/cyberguard/projects-img4-1000x1000.jpg",
    title: "Real-Time Threat Detection",
    link: "/solutions#monitoring",
  },
];

export default function ProjectCards() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.subtitle}>What We Provide</span>
          <h2 className={styles.title}>
            Robust Cybersecurity Services for Today’s Threats
          </h2>
          <p className={styles.description}>
            Explore our specialized interventions built to safeguard data privacy,
            secure distributed cloud workforces, and counter advanced cyber threats.
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
      </div>
    </section>
  );
}
