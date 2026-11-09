import React from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container/Container";
import styles from "./ServicesGrid.module.scss";

const SERVICES = [
  {
    icon: "/images/cyberguard/encryption-min-70x70.png",
    bgIcon: "/images/cyberguard/encryption.png",
    title: "Data Privacy & DPDPA Compliance",
    desc: "Assessment, remediation and security controls to meet India's Digital Personal Data Protection Act, delivered by cybersecurity specialists.",
    link: "/solutions#dpdpa",
  },
  {
    icon: "/images/cyberguard/cyber-security-min-70x70.png",
    bgIcon: "/images/cyberguard/cyber-security.png",
    title: "Cyber Risk & VAPT",
    desc: "Comprehensive web, mobile, and network penetration testing with prioritized risk remediation and vulnerability management.",
    link: "/solutions#qualys",
  },
  {
    icon: "/images/cyberguard/fingerprint-min-70x70.png",
    bgIcon: "/images/cyberguard/fingerprint.png",
    title: "Data Loss Prevention (DLP)",
    desc: "Preventing sensitive data leaks and insider misuse with SearchInform and OpenText data discovery and classification.",
    link: "/solutions#searchinform",
  },
  {
    icon: "/images/cyberguard/cloud-storage-min-70x70.png",
    bgIcon: "/images/cyberguard/cloud-storage.png",
    title: "Cloud Security & Posture",
    desc: "Hardening AWS, Azure, and hybrid cloud infrastructures against misconfigurations, privilege escalation, and data exposures.",
    link: "/solutions#backup",
  },
  {
    icon: "/images/cyberguard/settings-min-70x70.png",
    bgIcon: "/images/cyberguard/settings.png",
    title: "Moving Target Defense (MTD)",
    desc: "Deterministic neutralization of zero-day memory exploits, fileless malware, and evasive ransomware powered by Morphisec.",
    link: "/solutions#morphisec",
  },
  {
    icon: "/images/cyberguard/monitoring-min-70x70.png",
    bgIcon: "/images/cyberguard/monitoring.png",
    title: "Security Monitoring & SOC",
    desc: "24/7 SIEM monitoring, threat detection, and rapid incident response aligned with CERT-In and DPDPA statutory timelines.",
    link: "/solutions#monitoring",
  },
];

export default function ServicesGrid() {
  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        <div className={styles.header}>
          <span className={styles.subtitle}>What We Deliver</span>
          <h2 className={styles.title}>
            Security-Led Cyber Defense & DPDPA Compliance
          </h2>
          <p className={styles.description}>
            We protect Indian businesses from ever-evolving cyber risks and
            statutory liabilities with engineering-led security controls,
            continuous assessments, and proven partner technologies.
          </p>
        </div>

        <div className={styles.grid}>
          {SERVICES.map((s) => (
            <div key={s.title} className={styles.card}>
              <div className={styles.bgIconOverlay} aria-hidden="true">
                <Image
                  src={s.bgIcon}
                  alt=""
                  width={210}
                  height={210}
                  className={styles.bgIconImg}
                />
              </div>

              <div className={styles.iconBox}>
                <Image
                  src={s.icon}
                  alt={s.title}
                  width={38}
                  height={38}
                  className={styles.iconImg}
                />
              </div>

              <h3 className={styles.cardTitle}>{s.title}</h3>
              <p className={styles.cardDesc}>{s.desc}</p>
              <Link href={s.link} className={styles.learnMoreBtn}>
                Learn more &rarr;
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
