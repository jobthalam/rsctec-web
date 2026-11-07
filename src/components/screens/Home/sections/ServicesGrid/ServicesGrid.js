import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./ServicesGrid.module.scss";

const SERVICES = [
  {
    icon: "/images/cyberguard/cyber-security-min-70x70.png",
    bgIcon: "/images/cyberguard/cyber-security.png",
    title: "Network Security",
    desc: "Deploying firewalls and intrusion detection systems to safeguard networks.",
    link: "/solutions#cyber-security",
  },
  {
    icon: "/images/cyberguard/encryption-min-70x70.png",
    bgIcon: "/images/cyberguard/encryption.png",
    title: "Data Encryption",
    desc: "Encrypting sensitive data at rest and in transit using advanced encryption.",
    link: "/solutions#encryption",
  },
  {
    icon: "/images/cyberguard/fingerprint-min-70x70.png",
    bgIcon: "/images/cyberguard/fingerprint.png",
    title: "Identity & Access",
    desc: "Managing user identities and access with MFA and detailed role-based control.",
    link: "/solutions#identity",
  },
  {
    icon: "/images/cyberguard/monitoring-min-70x70.png",
    bgIcon: "/images/cyberguard/monitoring.png",
    title: "Security Monitoring",
    desc: "24/7 monitoring with advanced SIEM systems for real-time detection.",
    link: "/solutions#monitoring",
  },
  {
    icon: "/images/cyberguard/cloud-storage-min-70x70.png",
    bgIcon: "/images/cyberguard/cloud-storage.png",
    title: "Backup & Recovery",
    desc: "Protecting critical data with secure backups and rapid recovery plans.",
    link: "/solutions#backup",
  },
  {
    icon: "/images/cyberguard/settings-min-70x70.png",
    bgIcon: "/images/cyberguard/settings.png",
    title: "Security Configuration",
    desc: "Hardening systems and applying secure configurations across all infrastructure.",
    link: "/solutions#configuration",
  },
];

export default function ServicesGrid() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.subtitle}>What We Provide</span>
          <h2 className={styles.title}>
            Robust Cybersecurity Services for Today’s Threats
          </h2>
          <p className={styles.description}>
            Protect your business from ever-evolving cyber risks with our
            end-to-end security solutions, advanced threat detection, and
            proactive compliance governance.
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
                Learn More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
