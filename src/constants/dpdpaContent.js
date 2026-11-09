// ====================================================
// RS Consulting — DPDPA Core Content & Offerings
// ====================================================

export const DPDPA_SEO = {
  url: "/dpdpa-compliance",
  title: "DPDPA Compliance Services in India | RS Consulting",
  description:
    "Get DPDPA-ready before May 2027. Security-led DPDP Act compliance: gap assessment, consent, breach readiness and controls. Chennai-based experts.",
  keywords: [
    "DPDPA compliance",
    "DPDP Act 2023 consultant",
    "DPDP Rules 2025",
    "data protection compliance India",
    "DPDPA gap assessment Chennai",
  ],
};

export const DPDPA_HERO = {
  eyebrow: "DPDP ACT, 2023 & DPDP RULES, 2025",
  headline: "Get DPDPA-Ready Before 13 May 2027",
  subheadline:
    "Security-led compliance with the Digital Personal Data Protection Act, 2023 and DPDP Rules, 2025, from gap assessment to the controls that protect your data every day.",
  primaryBtn: { text: "Book a Free Readiness Assessment", href: "/contact" },
  secondaryBtn: { text: "Download the DPDPA Checklist", href: "#services" },
};

export const DPDPA_WHY_MATTERS = {
  title: "India's data protection law is now in force. Is your organisation ready?",
  description:
    "The DPDP Act applies to every organisation that processes digital personal data in India. That includes customer records, employee and payroll data, vendor details and CCTV footage. Full obligations become enforceable on 13 May 2027, and penalties can reach ₹250 crore per instance.",
  milestones: [
    {
      milestone: "DPDP Rules notified; Data Protection Board set up",
      date: "13 Nov 2025",
      impact: "The law is live and the compliance clock is running",
      status: "Active",
    },
    {
      milestone: "Consent Manager framework in force",
      date: "13 Nov 2026",
      impact: "Consent systems must be ready to work with registered Consent Managers",
      status: "Upcoming",
    },
    {
      milestone: "Core obligations enforceable: notice, consent, security safeguards, breach reporting, children's data",
      date: "13 May 2027",
      impact: "Penalties of up to ₹250 Cr apply for non-compliance",
      status: "Enforcement",
    },
  ],
  commonGaps: [
    "No complete map of the personal data they hold, or where it is stored",
    "Consent forms and privacy notices that don't meet the new standard",
    "No tested process to detect a breach and report it to the Data Protection Board",
    "Vendors and service providers without DPDPA-ready contracts",
    "Security gaps in identity, endpoints and logging, the controls the Act calls “reasonable security safeguards”",
  ],
};

export const DPDPA_MYTH_FACT = {
  eyebrow: "MYTH VS FACT",
  myth: "“DPDP applies only to tech companies.”",
  fact: "It applies to any company processing personal data digitally, including its own employee records.",
  description:
    "If you hold employee and payroll records, customer data, vendor and visitor logs, or CCTV and attendance data in digital form, the Act applies to you.",
  ctaText: "Explore Full Compliance Scope",
  ctaLink: "/contact",
};

export const DPDPA_SERVICES_LIST = [
  {
    icon: "/images/cyberguard/cyber-security-min-70x70.png",
    bgIcon: "/images/cyberguard/cyber-security.png",
    title: "DPDPA Readiness Assessment",
    deliverable:
      "Personal-data inventory and data-flow map, gap report against every Act and Rules obligation, risk heat-map and prioritised roadmap.",
    link: "/contact",
  },
  {
    icon: "/images/cyberguard/fingerprint-min-70x70.png",
    bgIcon: "/images/cyberguard/fingerprint.png",
    title: "Notice & Consent Architecture",
    deliverable:
      "Plain-language, multilingual privacy notices and consent journeys, ready to work with registered Consent Managers.",
    link: "/contact",
  },
  {
    icon: "/images/cyberguard/encryption-min-70x70.png",
    bgIcon: "/images/cyberguard/encryption.png",
    title: "Security Safeguards Implementation",
    deliverable:
      "Identity and MFA, privileged access, endpoint protection, encryption, logging and monitoring: the controls that prevent and detect breaches.",
    link: "/contact",
  },
  {
    icon: "/images/cyberguard/monitoring-min-70x70.png",
    bgIcon: "/images/cyberguard/monitoring.png",
    title: "Breach Readiness & Reporting",
    deliverable:
      "Detection and response playbook, Data Protection Board and CERT-In reporting workflow, tabletop exercises.",
    link: "/contact",
  },
  {
    icon: "/images/cyberguard/fingerprint-min-70x70.png",
    bgIcon: "/images/cyberguard/fingerprint.png",
    title: "Data Principal Rights Management",
    deliverable:
      "Workflows for access, correction, erasure, nomination and grievance redressal requests within prescribed statutory windows.",
    link: "/contact",
  },
  {
    icon: "/images/cyberguard/settings-min-70x70.png",
    bgIcon: "/images/cyberguard/settings.png",
    title: "Vendor & Processor Governance",
    deliverable:
      "Supplier risk assessments, processor due diligence, and statutory DPDPA clauses for all third-party data-processing contracts.",
    link: "/contact",
  },
  {
    icon: "/images/cyberguard/cloud-storage-min-70x70.png",
    bgIcon: "/images/cyberguard/cloud-storage.png",
    title: "Policies & Corporate Governance",
    deliverable:
      "Comprehensive privacy policy, retention and deletion schedules, roles and accountability frameworks.",
    link: "/contact",
  },
  {
    icon: "/images/cyberguard/cyber-security-min-70x70.png",
    bgIcon: "/images/cyberguard/cyber-security.png",
    title: "Training & Workforce Awareness",
    deliverable:
      "Role-based practical sessions for executive leadership, IT engineering, HR, marketing and customer support teams.",
    link: "/contact",
  },
  {
    icon: "/images/cyberguard/monitoring-min-70x70.png",
    bgIcon: "/images/cyberguard/monitoring.png",
    title: "Ongoing Compliance Support",
    deliverable:
      "Periodic reviews, control monitoring, statutory regulatory updates and audit support to guarantee year-round readiness.",
    link: "/contact",
  },
];

export const DPDPA_TECH_MAPPINGS = [
  {
    obligation: "Reasonable security safeguards",
    howWeAddress: "Vulnerability management, patching and configuration compliance",
    partner: "Qualys",
    logo: "/images/partner-logos/Qualys.avif",
  },
  {
    obligation: "Know what personal data you hold",
    howWeAddress: "Data discovery, classification and protection across hybrid silos",
    partner: "OpenText",
    logo: "/images/solutions/CyberRes - Microfocus.png",
  },
  {
    obligation: "Prevent leaks and insider misuse",
    howWeAddress: "Data loss prevention (DLP) and user activity monitoring",
    partner: "SearchInform",
    logo: "/images/solutions/Searchinform.png",
  },
  {
    obligation: "Share data securely with processors",
    howWeAddress: "Controlled, audited file sharing with patented zero-trust vaulting",
    partner: "Securely Share",
    logo: "/images/solutions/Securely Share.png",
  },
  {
    obligation: "Prevent breaches on endpoints",
    howWeAddress: "Advanced endpoint protection via Moving Target Defense",
    partner: "Morphisec",
    logo: "/images/partner-logos/morphisec.avif",
  },
  {
    obligation: "Detect breaches and report on time",
    howWeAddress: "24/7 continuous monitoring plus tested breach-response playbook",
    partner: "Qualys + RS Consulting Services",
    logo: "/images/partner-logos/Qualys.avif",
  },
];
