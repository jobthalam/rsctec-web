import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./AboutExperts.module.scss";

const CHECK_POINTS = [
  "24/7 threat monitoring and response",
  "Advanced protection against malware and ransomware",
  "Customized security solutions for your business",
  "Compliance-ready and future-proof defense strategies",
];

export default function AboutExperts() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.subtitle}>Cybersecurity Experts</span>
          <h2 className={styles.title}>
            Comprehensive Cybersecurity Solutions for Modern Threats
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
                <span className={styles.statNumber}>99.9%</span>
                <span className={styles.statLabel}>
                  Threat detection and prevention rate
                </span>
              </div>
            </div>
          </div>

          <div className={styles.contentCol}>
            <p className={styles.description}>
              For over 15 years, we’ve been safeguarding organizations from evolving
              cyber threats. Our team of experts provides end-to-end security
              solutions — from proactive threat detection and vulnerability assessments
              to rapid incident response — ensuring your data, systems, and
              reputation remain fully protected in an ever-changing digital landscape.
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
      </div>
    </section>
  );
}
