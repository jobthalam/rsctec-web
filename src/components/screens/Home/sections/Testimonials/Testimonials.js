import React from "react";
import Image from "next/image";
import Container from "@/components/ui/Container/Container";
import SectionHeader from "@/components/common/SectionHeader/SectionHeader";
import styles from "./Testimonials.module.scss";

const REVIEWS = [
  {
    name: "Enterprise Banking Client",
    role: "Chief Information Security Officer",
    company: "BFSI Sector",
    quote:
      "RS Consulting orchestrated our vulnerability management and regulatory security controls seamlessly. Their security-first methodology and deep partner technology expertise gave us immense confidence.",
  },
  {
    name: "Fintech Platform Lead",
    role: "Head of Infrastructure & Cloud",
    company: "Payments Industry",
    quote:
      "Their security-led DPDPA compliance roadmap transformed our data protection architecture. They didn't just give us policies—they implemented the actual endpoint and identity safeguards.",
  },
  {
    name: "Healthcare Network Director",
    role: "VP of Technology & Governance",
    company: "Healthcare Solutions",
    quote:
      "Outstanding incident response readiness and risk posture auditing. Having 4+ decades of collective cyber leadership guiding our compliance ensured zero regulatory blind spots.",
  },
];

export default function Testimonials() {
  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        <SectionHeader
          subtitle="Testimonials"
          title="Hear It from Our Happy Customers"
          description="See how our cybersecurity solutions have helped businesses stay secure, compliant, and resilient against evolving digital threats."
          variant="light"
          alignment="center"
        />

        <div className={styles.grid}>
          {REVIEWS.map((r, idx) => (
            <div
              key={r.name}
              className={styles.reviewCard}
              data-aos="fade-up"
              data-aos-delay={idx * 120}
            >
              <div className={styles.cardTop}>
                <div className={styles.stars}>
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="fas fa-star" />
                  ))}
                </div>
                <Image
                  src="/images/cyberguard/google-icon-30x30.png"
                  alt="Google Review"
                  width={24}
                  height={24}
                  className={styles.googleIcon}
                />
              </div>
              <p className={styles.quote}>&ldquo;{r.quote}&rdquo;</p>
              <div className={styles.authorBox}>
                <div className={styles.authorAvatar}>
                  {r.name.charAt(0)}
                </div>
                <div className={styles.authorInfo}>
                  <h4 className={styles.authorName}>{r.name}</h4>
                  <p className={styles.authorRole}>
                    {r.role} · <span>{r.company}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
