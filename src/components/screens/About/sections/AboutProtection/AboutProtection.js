import React from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container/Container";
import SectionHeader from "@/components/common/SectionHeader/SectionHeader";
import ExpandOnView from "@/components/common/ExpandOnView/ExpandOnView";
import styles from "./AboutProtection.module.scss";

const CHECKLIST_ITEMS = [
  "24/7 threat monitoring and rapid incident response",
  "Advanced protection against malware, ransomware & zero-days",
  "Customized cybersecurity solutions tailored for your business",
  "DPDPA & statutory compliance-ready defense strategies",
];

export default function AboutProtection() {
  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        <div className={styles.grid}>
          {/* Left Text & Checklist Column */}
          <div className={styles.contentCol} data-aos="fade-right">
            <SectionHeader
              subtitle="MAXIMUM PROTECTION"
              title="Cybersecurity Solutions for Complete Digital Safety"
              description="Safeguard your firm with our comprehensive cybersecurity services. We protect your data, networks, and cloud infrastructure using advanced threat detection, proactive defense strategies, and rapid incident response — ensuring peace of mind in an increasingly hostile digital world."
              variant="dark"
              alignment="left"
              className={styles.sectionHeader}
            />

            <ul className={styles.checklist}>
              {CHECKLIST_ITEMS.map((item, idx) => (
                <li key={idx} className={styles.checkItem}>
                  <span className={styles.checkIcon}>
                    <i className="fas fa-check" />
                  </span>
                  <span className={styles.checkText}>{item}</span>
                </li>
              ))}
            </ul>

            <div className={styles.btnRow}>
              <Link href="/contact" className={styles.primaryBtn}>
                Request A Security Assessment
              </Link>
            </div>
          </div>

          {/* Right SOC Monitor Visual */}
          <div className={styles.visualCol}>
            <ExpandOnView direction="right" duration={850} className={styles.socImageCard}>
              <Image
                src="/images/about/team-bg1.jpg"
                alt="24/7 Security Operations Center Monitoring"
                width={560}
                height={480}
                className={styles.socImg}
              />
            </ExpandOnView>
          </div>
        </div>
      </Container>
    </section>
  );
}
