import React from "react";
import Link from "next/link";
import Container from "@/components/ui/Container/Container";
import SectionHeader from "@/components/common/SectionHeader/SectionHeader";
import styles from "./DeliveryMethodology.module.scss";

const MODES = [
  {
    icon: "fas fa-building",
    title: "Corporate Onsite Delivery",
    desc: "Intensive in-person workshops tailored to your organization's tech stack, security tools, and proprietary workflows.",
  },
  {
    icon: "fas fa-laptop-code",
    title: "Interactive Virtual Labs",
    desc: "Real-time instructor-led training with browser-based cyber ranges and isolated attack simulation sandbox environments.",
  },
  {
    icon: "fas fa-user-tie",
    title: "Executive & Board Masterclasses",
    desc: "High-level risk governance briefings specifically curated for C-level executives, audit committees, and legal officers.",
  },
];

export default function DeliveryMethodology() {
  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        <SectionHeader
          subtitle="Flexible Delivery Models"
          title="Tailored for Enterprise Engineering Teams"
          description="We train developers, sysadmins, SOC analysts, and compliance leads with curriculum aligned directly to real-world threats and statutory requirements."
          variant="dark"
          alignment="center"
        />

        <div className={styles.grid}>
          {MODES.map((m, idx) => (
            <div
              key={m.title}
              className={styles.card}
              data-aos="fade-up"
              data-aos-delay={idx * 120}
            >
              <div className={styles.iconBox}>
                <i className={m.icon} />
              </div>
              <h3 className={styles.cardTitle}>{m.title}</h3>
              <p className={styles.cardDesc}>{m.desc}</p>
            </div>
          ))}
        </div>

        <div className={styles.ctaBox} data-aos="zoom-in-up">
          <div className={styles.ctaText}>
            <h3>Need a Custom Corporate Training Batch?</h3>
            <p>
              Connect with our training coordinators to design a customized syllabus and discuss
              corporate group scheduling.
            </p>
          </div>
          <Link href="/contact" className={styles.ctaBtn}>
            Request Corporate Training Proposal
          </Link>
        </div>
      </Container>
    </section>
  );
}
