import React from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container/Container";
import styles from "./AboutExperts.module.scss";

const CHECK_POINTS = [
  "Security-led, not paperwork-led: We implement technical controls, not just policies",
  "Proven track record across banking, payments, and highly regulated fintech",
  "Continuous vulnerability management, VAPT, and CIS configuration benchmarks",
  "End-to-end DPDPA gap assessment, consent architecture, DPIA, and breach readiness",
];

export default function AboutExperts() {
  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        <div className={styles.header}>
          <span className={styles.subtitle}>About RS Consulting</span>
          <h2 className={styles.title}>
            Delivering Ingenious Perspective to Enterprise Cyber Resilience
          </h2>
        </div>

        <div className={styles.row}>
          <div className={styles.imageCol}>
            <div className={styles.imageWrapper}>
              <div className={styles.mainImgBox}>
                <Image
                  src="/images/cyberguard/blog-img9.jpg"
                  alt="Security Operations Center"
                  width={540}
                  height={360}
                  className={styles.mainImg}
                />
              </div>

              <div className={styles.shieldImgBox}>
                <Image
                  src="/images/cyberguard/img-contact1-308x308.jpg"
                  alt="Cyber Shield Protection"
                  width={240}
                  height={240}
                  className={styles.shieldImg}
                />
              </div>

              <div className={styles.statBadge}>
                <span className={styles.statNumber}>40+</span>
                <span className={styles.statLabel}>
                  Years collective team leadership experience
                </span>
              </div>
            </div>
          </div>

          <div className={styles.contentCol}>
            <p className={styles.description}>
              RS Consulting (RSC Techasist Private Limited) delivers pure-play Information Security,
              Cyber Risk Management, and security-led DPDPA compliance. With over four decades of
              collective team leadership across banking, payments, and technology, we don&apos;t stop
              at paperwork—we implement the technical controls that keep your enterprise resilient.
            </p>

            <ul className={styles.checkList}>
              {CHECK_POINTS.map((item) => (
                <li key={item} className={styles.checkItem}>
                  <span className={styles.checkIcon}>
                    <i className="fas fa-check" />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <Link href="/contact" className={styles.auditBtn}>
              Request a Security Audit <i className="caseicon-long-arrow-right" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
