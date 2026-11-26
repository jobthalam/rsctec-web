// ====================================================
// RS Consulting — Corporate Website Constants
// Conforms to rules.md: Hardcoded content in constants.js
// ====================================================

export const COMPANY_INFO = {
  brandName: "RS Consulting",
  legalName: "RSC Techasist Private Limited",
  cin: "U62020TN2024PTC171029",
  tagline: "Resilient Cybersecurity & Data Privacy for Regulated Enterprises",
  address:
    "Flat A2, No. 50, 1st Floor, Venkatesa Perumal 2nd Street, Iyappa Nagar, Madipakkam, Chennai – 600091, Tamil Nadu",
  phone: "+91 97910 21099",
  phoneDisplay: "+91 97910 21099",
  email: "konnect@rsctec.com",
  grievanceEmail: "grievance@rsctec.com",
  whatsappUrl:
    "https://api.whatsapp.com/send/?phone=%2B919791021099&text=Hi%2C+I+have+a+question...&type=phone_number&app_absent=0",
  copyright: "© 2026 RSC Techasist Private Limited. All rights reserved.",
  experience: "40+ Years of Collective Leadership",
  foundingYear: "2015",
  incorporationYear: "2024",
};

export const ANNOUNCEMENT_BAR = {
  badge: "DPDP Act, 2023",
  message: "Full compliance due 13 May 2027. Is your organisation ready?",
  linkText: "Explore Advisory Services →",
  href: "/services",
};

export const NAVIGATION_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    submenu: [
      {
        label: "Advisory & Technical Services",
        href: "/services",
        // description: "Information Security, Privacy, AI Governance & VAPT",
      },
      {
        label: "ISO/IEC 27001 · 27701 · 42001",
        href: "/services#standards",
        // description: "ISMS, PIMS & AI Management System Readiness",
      },
      {
        label: "DPDP Act Compliance",
        href: "/dpdpa-compliance",
        // description: "India Digital Personal Data Protection Act Readiness",
      },
      {
        label: "GDPR & UAE Privacy Regulations",
        href: "/services#standards",
        // description: "Global & Regional Cross-Border Privacy Compliance",
      },
    ],
  },
  { label: "Solutions", href: "/solutions" },
  { label: "Trainings", href: "/trainings-certifications" },
  { label: "Contact", href: "/contact" },
];

export const FOOTER_SERVICES_LINKS = [
  { label: "Advisory & Technical Services", href: "/services" },
  { label: "DPDP Act Compliance", href: "/dpdpa-compliance" },
  { label: "ISO/IEC 27001 · 27701 · 42001", href: "/services#standards" },
  { label: "Qualys", href: "/solutions#qualys" },
  { label: "OpenText", href: "/solutions#opentext" },
  { label: "Securely Share", href: "/solutions#securely-share" },
  { label: "SearchInform", href: "/solutions#searchinform" },
];

export const FOOTER_QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Solutions", href: "/solutions" },
  { label: "Trainings", href: "/trainings-certifications" },
  { label: "Resources", href: "/resources" },
  { label: "Our Clients", href: "/#clients-partners" },
  { label: "Our Global Partners", href: "/#clients-partners" },
  { label: "Contact", href: "/contact" },
];

export const FOOTER_LEGAL_LINKS = [
  { label: "Grievance Redressal", href: "/contact#grievance" },
  { label: "Contact Us", href: "/contact" },
];

export const CLIENT_LOGOS = [
  {
    name: "Disney+ Hotstar",
    src: "/images/clients-logos/Disney-Hotstar.avif",
    width: 242,
    height: 120,
  },
  {
    name: "HDFC Bank",
    src: "/images/clients-logos/HDFC.avif",
    width: 284,
    height: 142,
  },
  {
    name: "PayU Payments",
    src: "/images/clients-logos/Pay-U.avif",
    width: 242,
    height: 120,
  },
  {
    name: "Paytm",
    src: "/images/clients-logos/PAYTM.avif",
    width: 242,
    height: 120,
  },
  {
    name: "Myntra",
    src: "/images/clients-logos/MYNTRA.avif",
    width: 242,
    height: 120,
  },
  {
    name: "LTIMindtree",
    src: "/images/clients-logos/Mind-Tree.avif",
    width: 284,
    height: 142,
  },
  {
    name: "Ujjivan Small Finance Bank",
    src: "/images/clients-logos/Ujjivan-Small-Finance-Bank.avif",
    width: 284,
    height: 142,
  },
  {
    name: "Fincare Small Finance Bank",
    src: "/images/clients-logos/Fincare.avif",
    width: 242,
    height: 120,
  },
  {
    name: "Wibmo (A PayU Co.)",
    src: "/images/clients-logos/Wibmo.avif",
    width: 242,
    height: 120,
  },
];

export const PARTNER_LOGOS = [
  {
    name: "Akamai Technologies",
    src: "/images/partner-logos/akamai.avif",
    width: 290,
    height: 146,
  },
  {
    name: "Cisco Systems",
    src: "/images/partner-logos/cisco.avif",
    width: 242,
    height: 120,
  },
  {
    name: "Qualys Cloud Security",
    src: "/images/partner-logos/Qualys.avif",
    width: 284,
    height: 142,
  },
  {
    name: "OpenText Cybersecurity",
    src: "/images/partner-logos/opentext.avif",
    width: 284,
    height: 142,
  },
  {
    name: "CyberRes Micro Focus",
    src: "/images/partner-logos/MF.avif",
    width: 242,
    height: 120,
  },
  {
    name: "Morphisec Moving Target Defense",
    src: "/images/partner-logos/morphisec.avif",
    width: 242,
    height: 120,
  },
  {
    name: "CYFIRMA Threat Intelligence",
    src: "/images/partner-logos/cyfirma.avif",
    width: 242,
    height: 120,
  },
  {
    name: "Securely Share",
    src: "/images/partner-logos/ss.avif",
    width: 242,
    height: 120,
  },
  {
    name: "Inspark Technologies",
    src: "/images/partner-logos/inspark.avif",
    width: 284,
    height: 130,
  },
];

export const HOME_RSC_BANNER = {
  badge: "RSC",
  headline:
    "Pure-play cybersecurity firm combining hands-on technical services with expert consulting across information security and data privacy.",
  subtext:
    "We help enterprises defend against today's threats and stay aligned with evolving global regulations.",
};

export const HOME_SOLUTIONS_TABS = {
  sectionTitle: "SOLUTIONS & ADVISORY SERVICES",
  tabs: [
    {
      id: "technology",
      label: "Technology Solutions",
      intro:
        "Implementation and support of proven security technologies from our global partners.",
      ctaLabel: "Explore Solutions →",
      ctaHref: "/solutions",
      items: [
        {
          name: "Qualys",
          desc: "Cloud-based vulnerability management, continuous asset discovery, and automated compliance auditing for IT systems and web applications.",
          href: "/solutions#qualys",
          icon: "/images/cyberguard/cloud-storage-min-70x70.png",
          bgIcon: "/images/cyberguard/cloud-storage.png",
        },
        {
          name: "OpenText",
          desc: "Enterprise-grade data security, identity governance, and cyber resilience across hybrid enterprise architectures.",
          href: "/solutions#opentext",
          icon: "/images/cyberguard/fingerprint-min-70x70.png",
          bgIcon: "/images/cyberguard/fingerprint.png",
        },
        {
          name: "Securely Share",
          desc: "Patented data security, PII discovery, and privacy-enabled encrypted data sharing for structured and unstructured datasets.",
          href: "/solutions#securely-share",
          icon: "/images/cyberguard/encryption-min-70x70.png",
          bgIcon: "/images/cyberguard/encryption.png",
        },
        // {
        //   name: "SearchInform",
        //   desc: "360° data loss prevention (DLP), preconfigured industry compliance policies, and insider-risk activity monitoring.",
        //   href: "/solutions#searchinform",
        //   icon: "/images/cyberguard/monitoring-min-70x70.png",
        //   bgIcon: "/images/cyberguard/monitoring.png",
        // },
      ],
    },
    {
      id: "advisory",
      label: "Advisory Services",
      intro:
        "Expert consulting to help you build, assess and sustain security and privacy programmes aligned to global regulations.",
      ctaLabel: "Explore Advisory Services →",
      ctaHref: "/services",
      items: [
        {
          name: "Information Security Advisory",
          desc: "Risk assessments, ISMS design and audit readiness",
          href: "/services#advisory",
          icon: "/images/cyberguard/cyber-security-min-70x70.png",
          bgIcon: "/images/cyberguard/cyber-security.png",
        },
        {
          name: "Data Privacy & Compliance Advisory",
          desc: "Gap assessments, privacy programme design, consent and breach readiness",
          href: "/services#advisory",
          icon: "/images/cyberguard/encryption-min-70x70.png",
          bgIcon: "/images/cyberguard/encryption.png",
        },
        {
          name: "AI Governance Advisory",
          desc: "Responsible AI management frameworks",
          href: "/services#advisory",
          icon: "/images/cyberguard/settings-min-70x70.png",
          bgIcon: "/images/cyberguard/settings.png",
        },
        // {
        //   name: "Security Assessments",
        //   desc: "Vulnerability assessment and penetration testing (VAPT), configuration reviews and security audits",
        //   href: "/services#advisory",
        //   icon: "/images/cyberguard/monitoring-min-70x70.png",
        //   bgIcon: "/images/cyberguard/monitoring.png",
        // },
        // {
        //   name: "Virtual CISO / DPO Support",
        //   desc: "Ongoing governance, reviews and board reporting",
        //   href: "/services#advisory",
        //   icon: "/images/cyberguard/fingerprint-min-70x70.png",
        //   bgIcon: "/images/cyberguard/fingerprint.png",
        // },
      ],
    },
  ],
};

export const HOME_ABOUT_BLOCK = {
  eyebrow: "About RS Consulting",
  headline:
    "Pure play Information Security, Cyber Risk Management consulting & Cloud Services Company.",
  paragraphs: [
    "RS Consulting (RSC Techasist Private Limited) delivers Pure-play cybersecurity firm combining hands-on technical services with expert consulting across information security and data privacy. With over four decades of collective team leadership across banking, payments, and technology, we don't stop at paperwork—we implement the technical controls that keep your enterprise resilient.",
    "We help organisations stay ahead of emerging threats and meet evolving global regulatory requirements, by implementing the controls that actually protect their data, not just the policies around it.",
  ],
  checkpoints: [
    // "Technology + advisory under one roof: we design your security and privacy programme, then implement the tools that make it work.",
    // "Tailored, not templated: every engagement starts from your risks, your systems and your regulatory obligations.",
    // "Backed by global technology partners in vulnerability management, data security, data loss prevention and secure data sharing.",
  ],
  ctaLabel: "Read more →",
  ctaHref: "/about",
};

export const ABOUT_PAGE_DATA = {
  heroTitle: "About RS Consulting",
  heroSubtitle:
    "A pure-play cybersecurity company delivering technology solutions and advisory services in information security and data privacy, helping enterprises worldwide protect their systems and personal data while staying aligned with evolving regulations.",
  whoWeAre: {
    eyebrow: "WHO WE ARE",
    title:
      "Security Built Into Systems and Processes, Not Just Policy Documents",
    paragraphs: [
      "RS Consulting is the brand of RSC Techasist Private Limited, a pure-play cybersecurity company headquartered in Chennai. We offer technology solutions and advisory services across information security and data privacy, for enterprises in banking, payments, fintech, technology and other highly regulated sectors.",
      "Founded in 2015 as a proprietorship, the firm was incorporated as RSC Techasist Private Limited in 2024. Our leadership team brings more than 40 years of collective experience in IT and information security. They have seen technology grow from a tool that supported business operations into the lifeline businesses run on. That experience shapes how we work: security has to be built into systems and processes, not written into policy documents and filed away.",
    ],
  },
  whatWeDo: {
    eyebrow: "WHAT WE DO",
    title: "Technology Solutions & Advisory Services Under One Roof",
    items: [
      {
        title: "Technology Solutions",
        desc: "We implement and support proven security technologies from our global partners: vulnerability and compliance management, data security and identity governance, data loss prevention, and secure data sharing.",
        ctaLabel: "Explore Solutions →",
        ctaHref: "/solutions",
        icon: "fas fa-server",
      },
      {
        title: "Advisory Services",
        desc: "We help organisations build, assess and sustain security and privacy programmes that meet evolving global standards and regulations. Our work covers information security management, data privacy compliance, AI governance, security assessments, and ongoing virtual CISO/DPO support.",
        ctaLabel: "Explore Advisory Services →",
        ctaHref: "/services",
        icon: "fas fa-compass",
      },
    ],
  },
  visionMission: [
    {
      badge: "OUR VISION",
      title: "Trusted Cybersecurity & Privacy Partner",
      text: "To be the trusted cybersecurity and privacy partner for organisations in India and beyond, helping them stay secure, compliant and resilient as threats and regulations evolve.",
      icon: "fas fa-eye",
    },
    {
      badge: "OUR MISSION",
      title: "Practical Technology & Expert Advice",
      text: "To bring together practical technology and expert advice, so that every client's security and privacy programme works in practice, not just on paper.",
      icon: "fas fa-bullseye",
    },
  ],
  whyUs: {
    eyebrow: "WHY RS CONSULTING",
    title: "Why Regulated Enterprises Choose RS Consulting",
    items: [
      {
        title: "Security-led, not paperwork-led",
        desc: "We implement the technical controls that regulations call for, not just the documentation.",
      },
      {
        title: "One partner, end to end",
        desc: "Assessment, programme design, technology implementation and ongoing support.",
      },
      {
        title: "Regulation-ready",
        desc: "Our advisory work aligns your programme with Indian and international security and privacy requirements.",
      },
      {
        title: "Experienced practitioners",
        desc: "Senior consultants with deep experience in banking, payments, fintech and other regulated sectors.",
      },
      {
        title: "Tailored engagements",
        desc: "Every challenge is different, so every solution is built around your business.",
      },
    ],
  },
  values: {
    eyebrow: "OUR VALUES",
    title: "Principles That Guide Every Engagement",
    items: [
      {
        title: "People",
        desc: "Our people are our business. We invest in their expertise so that clients get the best of it.",
        icon: "fas fa-users",
      },
      {
        title: "Quality",
        desc: "Quality is part of everything we deliver, from the first assessment to the last control implemented.",
        icon: "fas fa-award",
      },
      {
        title: "Integrity",
        desc: "We work with the highest integrity and give honest advice, even when it isn't the easiest answer.",
        icon: "fas fa-shield-alt",
      },
      {
        title: "Confidentiality",
        desc: "We treat client information with the same care we ask our clients to take with their own data.",
        icon: "fas fa-lock",
      },
    ],
  },
};

export const ABOUT_CAPABILITIES = [
  {
    title: "Vulnerability Assessment & Pen-Testing",
    desc: "Identify system weaknesses and misconfigurations before adversaries do, eliminate attack surfaces, and strengthen overall security posture.",
    icon: "/images/about/padlock-100x100.png",
  },
  {
    title: "Data Protection & DPDPA Compliance",
    desc: "Safeguard sensitive personal data and business secrets against breaches with advanced encryption, granular access control, and regulatory compliance.",
    icon: "/images/about/cloud-100x100.png",
  },
  {
    title: "Brand Reputation & Cyber Governance",
    desc: "Preserve customer trust, investor confidence, and brand integrity through proactive incident response, continuous audit readiness, and risk assurance.",
    icon: "/images/about/quality-100x100.png",
  },
];

export const ABOUT_TEAM = [
  {
    name: "R. S. Narayanan",
    role: "Chief Information Security Consultant",
    cert: "CISM · CISSP · ISO 27001 LA",
    img: "/images/about/team-img1.jpg",
  },
  {
    name: "Sarah Johnson",
    role: "Lead Cyber Threat Analyst",
    cert: "CEH · OSCP · Cloud Security",
    img: "/images/about/team-img2.jpg",
  },
  {
    name: "Thomas Bennett",
    role: "Cloud Security & Architecture Specialist",
    cert: "CCSP · AWS Security · ISO 42001",
    img: "/images/about/team-img3.jpg",
  },
  {
    name: "Joshua Henry",
    role: "Incident Response & SOC Lead",
    cert: "GCIH · Threat Hunting · DevSecOps",
    img: "/images/about/team-img4.jpg",
  },
];
