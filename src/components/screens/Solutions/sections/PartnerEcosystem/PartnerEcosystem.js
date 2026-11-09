import React from "react";
import Link from "next/link";
import Container from "@/components/ui/Container/Container";
import styles from "./PartnerEcosystem.module.scss";

const PARTNER_SOLUTIONS = [
  {
    id: "qualys",
    partner: "Qualys Cloud Platform",
    tagline: "Vulnerability Management, Detection & Response (VMDR)",
    desc: "Provides 360-degree visibility across hybrid IT, continuously discovering unknown assets, prioritizing vulnerabilities based on real-time threat context, and automating patching workflows.",
    features: [
      "Automated global asset inventory & discovery",
      "Continuous VMDR with risk prioritization",
      "Policy Compliance & CIS Benchmark auditing",
      "Web Application Scanning & Cloud Posture (CSPM)",
    ],
    dpdpaRole: "Fulfills statutory vulnerability mitigation obligations under Section 8(5).",
  },
  {
    id: "opentext",
    partner: "OpenText Cyber Resilience",
    tagline: "Data Discovery & Enterprise Information Governance",
    desc: "Uncovers and classifies sensitive personally identifiable information (PII) residing across on-premise servers, SharePoint, emails, databases, and multi-cloud repositories.",
    features: [
      "Autonomous sensitive data discovery & mapping",
      "Intelligent PII classification & indexing",
      "eDiscovery, archiving & records lifecycle",
      "Encryption & access governance enforcement",
    ],
    dpdpaRole: "Enables mandatory Data Principal discovery & right to erasure compliance.",
  },
  {
    id: "searchinform",
    partner: "SearchInform InfoWatch",
    tagline: "Data Loss Prevention (DLP) & User Activity Monitoring",
    desc: "Monitors and intercepts unauthorized data exfiltration across communication channels—including cloud storage, removable USBs, messengers, print jobs, and business email.",
    features: [
      "Comprehensive DLP across all exfiltration vectors",
      "User & Entity Behavior Analytics (UEBA)",
      "Screen recording, keylogger & clipboard forensics",
      "Automated incident alert dispatch & risk scoring",
    ],
    dpdpaRole: "Prevents unauthorized personal data disclosures and breach liability.",
  },
  {
    id: "securely-share",
    partner: "Securely Share",
    tagline: "Patented Data-Centric Security & Zero-Trust File Protection",
    desc: "Binds granular access control, end-to-end encryption, and dynamic rights management directly to files, allowing safe external sharing with banking and enterprise partners.",
    features: [
      "Dynamic file encryption at rest, transit & in use",
      "Granular view, edit, print & revoke privileges",
      "Watermarking & screen-capture deterrence",
      "Cryptographic audit trails for shared files",
    ],
    dpdpaRole: "Assures Section 6 consent-bounded purpose limitation for shared data.",
  },
  {
    id: "morphisec",
    partner: "Morphisec Moving Target Defense",
    tagline: "Deterministic Prevention of Zero-Day Memory Exploits",
    desc: "Morphisec scrambles application memory space at runtime, creating an unpredictable environment where zero-day exploits, fileless malware, and evasive ransomware immediately fail.",
    features: [
      "Moving Target Defense (MTD) memory randomization",
      "Zero-day exploit & ransomware neutralization",
      "Ultralight agent with zero signature update lag",
      "Protection for legacy OS & air-gapped endpoints",
    ],
    dpdpaRole: "Mitigates critical infrastructure breach vectors triggering statutory fines.",
  },
];

export default function PartnerEcosystem() {
  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        <div className={styles.header}>
          <span className={styles.subtitle}>Verified Partner Technologies</span>
          <h2 className={styles.title}>Integrated Defense-in-Depth Architecture</h2>
          <p className={styles.description}>
            RS Consulting engineers enterprise-grade security architectures leveraging vetted
            global technology leaders tailored to your specific infrastructure and compliance mandates.
          </p>
        </div>

        <div className={styles.grid}>
          {PARTNER_SOLUTIONS.map((item) => (
            <div key={item.id} id={item.id} className={styles.solutionCard}>
              <div className={styles.cardHeader}>
                <span className={styles.partnerBadge}>{item.partner}</span>
                <h3 className={styles.cardTitle}>{item.tagline}</h3>
              </div>
              <p className={styles.cardDesc}>{item.desc}</p>
              
              <ul className={styles.featureList}>
                {item.features.map((feat) => (
                  <li key={feat} className={styles.featureItem}>
                    <i className="fas fa-check-circle" /> {feat}
                  </li>
                ))}
              </ul>

              <div className={styles.dpdpaCallout}>
                <strong>DPDPA Mandate Alignment:</strong> {item.dpdpaRole}
              </div>

              <div className={styles.actionRow}>
                <Link href="/contact" className={styles.enquireBtn}>
                  Request Architecture Briefing <i className="caseicon-long-arrow-right" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
