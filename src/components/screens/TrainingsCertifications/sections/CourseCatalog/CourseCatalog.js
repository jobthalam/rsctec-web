"use client";

import React, { useState } from "react";
import Link from "next/link";
import styles from "./CourseCatalog.module.scss";

const CATEGORIES = [
  "All Tracks",
  "DPDPA & Privacy",
  "Technical & Offensive",
  "GRC & Standards",
  "Cloud Security",
];

const COURSES = [
  {
    category: "DPDPA & Privacy",
    title: "Executive Briefing: DPDP Act, 2023",
    audience: "Board Members, C-Suite & Legal Counsel",
    duration: "1 Day Intensive / 8 Hours",
    desc: "Executive overview of statutory liability, Section 33 penalties (up to ₹250 Cr), and board-level risk governance ahead of the May 2027 enforcement deadline.",
  },
  {
    category: "DPDPA & Privacy",
    title: "Certified Data Protection Officer (DPO)",
    audience: "Appointed DPOs, Infosec Leads, Legal",
    duration: "5 Days / 40 Hours + Assessment",
    desc: "Comprehensive operational training covering Data Principal rights, breach reporting workflows, Consent Manager architecture, and DPIA execution.",
  },
  {
    category: "DPDPA & Privacy",
    title: "Workforce Data Privacy & Handler Training",
    audience: "Customer Support, HR, Operations Teams",
    duration: "Half-Day / 4 Hours",
    desc: "Practical compliance training for front-line personnel handling customer PII, emphasizing clean desk rules, phishing defense, and privacy protocols.",
  },
  {
    category: "Technical & Offensive",
    title: "VAPT Masterclass & Ethical Hacking",
    audience: "Security Engineers & Penetration Testers",
    duration: "4 Weeks / Hands-on Lab Environment",
    desc: "Practical network, web application, and API vulnerability exploitation following OWASP Top 10, PTES standards, and contextual remediation reporting.",
  },
  {
    category: "Technical & Offensive",
    title: "SOC Analyst & Incident Response Operations",
    audience: "Tier 1 & Tier 2 SOC Analysts, Sysadmins",
    duration: "3 Weeks / Simulated Cyber Range",
    desc: "Real-time SIEM log correlation, threat hunting, malware triage, and automated incident response runbook execution.",
  },
  {
    category: "GRC & Standards",
    title: "ISO/IEC 27001:2022 Lead Implementer",
    audience: "Compliance Officers, IT Managers, Risk Leads",
    duration: "5 Days / 40 Hours",
    desc: "Detailed roadmap for architecting, documenting, and auditing an Information Security Management System (ISMS) aligned with updated 2022 controls.",
  },
  {
    category: "GRC & Standards",
    title: "SOC 2 Type II Readiness & Controls",
    audience: "SaaS Founders, CTOs, Compliance Teams",
    duration: "3 Days / 24 Hours",
    desc: "Designing and maintaining operational security, availability, and confidentiality controls for global B2B SaaS assurance.",
  },
  {
    category: "Cloud Security",
    title: "AWS & Azure Cloud Security Engineering",
    audience: "Cloud Architects, DevOps & SRE Engineers",
    duration: "3 Weeks / Lab-Driven",
    desc: "Hardening cloud infrastructure, IAM least privilege, Terraform security scanning, CSPM automation, and zero-trust VPC architecture.",
  },
];

export default function CourseCatalog() {
  const [activeCategory, setActiveCategory] = useState("All Tracks");

  const filteredCourses =
    activeCategory === "All Tracks"
      ? COURSES
      : COURSES.filter((c) => c.category === activeCategory);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.subtitle}>Curriculum Directory</span>
          <h2 className={styles.title}>Explore Accredited Programs</h2>
          <p className={styles.description}>
            Filter courses by focus area. Each curriculum includes live instructor-led sessions,
            hands-on lab drills, and official certificates of completion.
          </p>

          <div className={styles.filterPills}>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`${styles.pillBtn} ${activeCategory === cat ? styles.active : ""}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.grid}>
          {filteredCourses.map((c) => (
            <div key={c.title} className={styles.courseCard}>
              <div className={styles.cardTop}>
                <span className={styles.categoryBadge}>{c.category}</span>
                <span className={styles.durationBadge}>
                  <i className="far fa-clock" /> {c.duration}
                </span>
              </div>

              <h3 className={styles.courseTitle}>{c.title}</h3>
              <p className={styles.audience}>
                <strong>Target Audience:</strong> {c.audience}
              </p>
              <p className={styles.courseDesc}>{c.desc}</p>

              <div className={styles.cardBottom}>
                <Link href="/contact" className={styles.enquireLink}>
                  Request Syllabus & Batch Info <i className="caseicon-long-arrow-right" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
