import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./DefendingInnovation.module.scss";

export default function DefendingInnovation() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.contentCol}>
            <span className={styles.subtitle}>Cyber Security Experts</span>
            <h2 className={styles.title}>
              Defending Businesses With Expertise And Innovation
            </h2>
            <p className={styles.description}>
              Our cybersecurity practice helps organizations navigate the evolving
              threat landscape by implementing actionable controls, continuous
              vulnerability mitigation, and comprehensive DPDPA statutory alignment.
            </p>

            <Link href="/contact" className={styles.btn}>
              Request Consultation <i className="caseicon-long-arrow-right" />
            </Link>

            <div className={styles.ratingBox}>
              <div className={styles.stars}>
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="fas fa-star" />
                ))}
              </div>
              <span className={styles.ratingText}>
                <strong>5.0 Rating</strong> on Google Verified Reviews
              </span>
            </div>
          </div>

          <div className={styles.imageCol}>
            <div className={styles.expertImgBox}>
              <Image
                src="/images/cyberguard/c1.png"
                alt="Cybersecurity Senior Consultant"
                width={500}
                height={550}
                className={styles.expertImg}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
