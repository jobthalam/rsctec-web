// ====================================================
// RS Consulting — DPDPA Governance, Methodology & FAQs
// ====================================================

export const DPDPA_METHODOLOGY_STEPS = [
  {
    step: "01",
    title: "Discover",
    desc: "Understand your business, systems and where personal data flows across internal and third-party tools.",
    image: "/images/cyberguard/projects-img6-1000x1000.jpg",
    colorVariant: "dark",
    reverse: false,
  },
  {
    step: "02",
    title: "Assess",
    desc: "Measure operational and security gaps against every DPDPA and DPDP Rules obligation.",
    image: "/images/about/blog-details3.jpg",
    colorVariant: "purple",
    reverse: false,
  },
  {
    step: "03",
    title: "Plan",
    desc: "A prioritised compliance roadmap with effort, cost and timelines mapped directly to May 2027.",
    image: "/images/about/blog-details1.jpg",
    colorVariant: "dark",
    reverse: true,
  },
  {
    step: "04",
    title: "Implement",
    desc: "Fix privacy notices, consent journeys, vendor contracts, internal processes and security controls.",
    image: "/images/cyberguard/blog-img9.jpg",
    colorVariant: "dark",
    reverse: true,
  },
  {
    step: "05",
    title: "Train",
    desc: "Equip your teams with role-based training to ensure ongoing accountability and confidence.",
    image: "/images/cyberguard/s2.jpg",
    colorVariant: "purple",
    reverse: false,
  },
  {
    step: "06",
    title: "Sustain",
    desc: "Continuous control monitoring, periodic posture reviews, regulatory updates and Board reporting.",
    image: "/images/cyberguard/s3.jpg",
    colorVariant: "dark",
    reverse: false,
  },
];

export const DPDPA_SECTORS = [
  {
    industry: "Banking, NBFCs, Insurance, Payments & Fintech",
    priorities: "High volumes of financial and KYC data; possible Significant Data Fiduciary obligations; regulator and customer audits.",
    isFeatured: true,
  },
  {
    industry: "IT/ITES, SaaS & BPO",
    priorities: "Processor obligations under client contracts; secure software development; cross-border service delivery.",
    isFeatured: true,
  },
  {
    industry: "Healthcare, Hospitals & Diagnostics",
    priorities: "Sensitive patient records, diagnostic reports and telemedicine; high breach impact.",
    isFeatured: false,
  },
  {
    industry: "Education & EdTech",
    priorities: "Children's personal data safeguards and verifiable parental consent frameworks.",
    isFeatured: false,
  },
  {
    industry: "Retail, E-Commerce & Consumer Brands",
    priorities: "Customer databases, loyalty programmes, behavioural tracking and marketing consent.",
    isFeatured: false,
  },
  {
    industry: "Manufacturing, Logistics & Automotive",
    priorities: "Employee, contractor, vendor and visitor records; CCTV and facility access-control data.",
    isFeatured: false,
  },
  {
    industry: "Real Estate, Hospitality & Travel",
    priorities: "Booking histories, guest and tenant data; identity document storage and purging.",
    isFeatured: false,
  },
  {
    industry: "Telecom, Media & Digital Platforms",
    priorities: "Large digital user bases, behavioural telemetry, Consent Manager interoperability at scale.",
    isFeatured: false,
  },
  {
    industry: "Professional Services, NGOs & Associations",
    priorities: "Confidential client engagements, member registries and donor record protections.",
    isFeatured: false,
  },
  {
    industry: "Government Bodies & PSUs",
    priorities: "Citizen data governance, public-service platforms and statutory compliance auditing.",
    isFeatured: false,
  },
];

export const DPDPA_ENGAGEMENT_OPTIONS = [
  {
    tier: "DPDPA Starter",
    bestFor: "Startups and SMEs",
    badge: "Fast-Track",
    includes: [
      "Readiness assessment & data mapping",
      "Privacy notice and consent templates",
      "Core internal data policies",
      "One workforce awareness training session",
    ],
    popular: false,
  },
  {
    tier: "DPDPA Comprehensive",
    bestFor: "Mid-size and large organisations",
    badge: "Most Popular",
    includes: [
      "Full 25-point compliance audit & data inventory",
      "Security-control implementation & configuration",
      "Vendor and processor contract amendments",
      "Breach response playbook & tabletop simulation",
      "Role-based multi-department training",
    ],
    popular: true,
  },
  {
    tier: "DPDPA Assure",
    bestFor: "Ongoing compliance & governance",
    badge: "Continuous",
    includes: [
      "Quarterly compliance reviews & gap audits",
      "Security control & log monitoring",
      "Data Principal rights-request management",
      "Regulatory updates & DPB advisory support",
      "Dedicated DPO advisory support",
    ],
    popular: false,
  },
];

export const DPDPA_WHY_RS = [
  {
    icon: "fas fa-cogs",
    title: "Security-Led, Not Paperwork-Led",
    desc: "We implement the actual technical safeguards, encryption, and endpoint controls—not just binders of policy checklists.",
  },
  {
    icon: "fas fa-users-cog",
    title: "Specialists in Information Security & Risk",
    desc: "Over 4 decades of collective team leadership navigating enterprise information security and risk management.",
  },
  {
    icon: "fas fa-university",
    title: "Proven in Highly Regulated Sectors",
    desc: "Verified experience securing banking, payments, healthcare, and high-compliance IT infrastructures across India.",
  },
  {
    icon: "fas fa-network-wired",
    title: "Global Technology Partners",
    desc: "Direct implementation of market-leading platforms: Qualys, OpenText, SearchInform, Securely Share, and Morphisec.",
  },
  {
    icon: "fas fa-calendar-check",
    title: "Deadline-Driven Delivery",
    desc: "Milestone-backed project timelines mapped directly to the statutory 13 May 2027 enforcement deadline.",
  },
];

export const DPDPA_FAQS = [
  { q: "Does the DPDP Act apply to my business?", a: "If you collect or process digital personal data of individuals in India, such as customers, employees or vendors' staff, it almost certainly does. That includes small businesses and startups." },
  { q: "When do we need to be compliant?", a: "The core obligations covering notice, consent, security safeguards, breach reporting and children's data become enforceable on 13 May 2027. The Consent Manager framework is in force from 13 November 2026." },
  { q: "What are the penalties?", a: "The Data Protection Board can impose penalties of up to ₹250 crore per instance, depending on the breach—for example, failing to implement reasonable security safeguards under Section 33." },
  { q: "We already have ISO 27001. Isn't that enough?", a: "It's a strong foundation, and we reuse your existing controls. However, DPDPA adds India-specific requirements such as bilingual notice formats, verifiable parental consent, Consent Manager interoperability, Data Protection Board reporting and grievance timelines." },
  { q: "How does DPDPA relate to CERT-In directions?", a: "They work together. CERT-In requires cyber incidents to be reported within 6 hours, while DPDPA requires personal-data breaches to be reported to the Data Protection Board and affected individuals. We build a unified breach-response process that covers both." },
  { q: "How long does a readiness assessment take?", a: "Typically 2 to 4 weeks, depending on the number of systems, business units, data flows, and third-party vendors involved." },
  { q: "We have no in-house IT or security team. Can you still help?", a: "Yes. RS Consulting can implement the required technical controls, draft policies, configure security tools, and support your organization on an ongoing basis without needing an internal security department." },
];

export const DPDPA_CLOSING_CTA = {
  headline: "The deadline won't move. Your compliance can.",
  text: "Talk to an RS Consulting specialist about where your organisation stands today.",
  phone: "+91 97910 21099",
  email: "konnect@rsctec.com",
};
