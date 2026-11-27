// ====================================================
// RS Consulting — Admin Dashboard Constants & Datasets
// ====================================================

export const ADMIN_MENU_GROUPS = [
  {
    groupLabel: "Core",
    items: [
      {
        id: "overview",
        label: "Dashboard Overview",
        icon: "fas fa-th-large",
        description:
          "Executive summary of enquiries, trainings, compliance requests, and site content.",
      },
    ],
  },
  {
    groupLabel: "Leads & Enquiries",
    items: [
      {
        id: "enquiries",
        label: "Consultation Enquiries",
        icon: "fas fa-envelope-open-text",
        badge: "5",
        description:
          "Inbound leads from the Contact Us page and Book a Free Consultation popup.",
      },
      {
        id: "training-enquiries",
        label: "Training Registrations",
        icon: "fas fa-user-graduate",
        badge: "4",
        description:
          "Course syllabus and batch registration enquiries from the Trainings & Certifications portal.",
      },
      {
        id: "grievances",
        label: "DPDPA Grievances",
        icon: "fas fa-user-shield",
        badge: "2",
        description:
          "Statutory Data Principal rights requests and grievance submissions under Section 8 & 13.",
      },
      {
        id: "subscribers",
        label: "Checklist & Newsletter",
        icon: "fas fa-file-download",
        description:
          "25-Point DPDPA Readiness Checklist downloads and newsletter opt-in records.",
      },
    ],
  },
  {
    groupLabel: "Content & Catalog",
    items: [
      {
        id: "trainings",
        label: "Trainings & Courses",
        icon: "fas fa-graduation-cap",
        description:
          "Manage DPDPA role-based training programmes and technical certification courses.",
      },
      {
        id: "services",
        label: "Advisory & Services",
        icon: "fas fa-shield-alt",
        description:
          "Manage Information Security, Data Privacy, DPDPA Compliance, and AI Governance practices.",
      },
      {
        id: "solutions",
        label: "Technology Solutions",
        icon: "fas fa-server",
        description:
          "Manage partner security platforms including Qualys, OpenText, and Securely Share.",
      },
      {
        id: "resources",
        label: "Resources & Blog",
        icon: "fas fa-book-open",
        description:
          "Manage DPDPA Self-Check questions, Myth vs Fact cards, Lead Magnets, and Blog topics.",
      },
    ],
  },
  {
    groupLabel: "Corporate & System",
    items: [
      {
        id: "clients-partners",
        label: "Clients & Partners",
        icon: "fas fa-handshake",
        description:
          "Manage enterprise client logos and global cybersecurity technology partner logos.",
      },
      {
        id: "team",
        label: "Leadership & Team",
        icon: "fas fa-users",
        description:
          "Manage leadership profiles, designations, and professional certifications.",
      },
      {
        id: "settings",
        label: "Site & Announcement",
        icon: "fas fa-cog",
        description:
          "Configure top announcement bar, corporate contact details, and Supabase integration.",
      },
    ],
  },
];

export const ADMIN_KPI_STATS = [
  {
    id: "total-enquiries",
    label: "Consultation Enquiries",
    value: "28",
    trend: "+14% this month",
    icon: "fas fa-envelope-open-text",
    targetTab: "enquiries",
  },
  {
    id: "training-requests",
    label: "Training Enquiries",
    value: "19",
    trend: "4 pending review",
    icon: "fas fa-user-graduate",
    targetTab: "training-enquiries",
  },
  {
    id: "active-courses",
    label: "Published Courses",
    value: "9",
    trend: "4 tracks active",
    icon: "fas fa-graduation-cap",
    targetTab: "trainings",
  },
  {
    id: "dpdpa-grievances",
    label: "DPDPA Requests",
    value: "2",
    trend: "Within 24h SLA",
    icon: "fas fa-user-shield",
    targetTab: "grievances",
  },
];

export const INITIAL_CONSULTATION_ENQUIRIES = [
  {
    id: "ENQ-1042",
    fullName: "Vikramaditya Rao",
    email: "v.rao@finservebank.in",
    phone: "+91 98401 22310",
    company: "FinServe Small Finance Bank",
    industry: "BFSI, Banking & Fintech",
    interest: "DPDPA compliance",
    message:
      "Looking for end-to-end DPDPA gap assessment and RoPA automation across core banking modules.",
    dpdpaConsent: true,
    newsletter: true,
    status: "New",
    date: "2026-11-26",
  },
  {
    id: "ENQ-1041",
    fullName: "Ananya Deshmukh",
    email: "ananya.d@medcarehealth.com",
    phone: "+91 98204 55190",
    company: "MedCare Diagnostics Ltd",
    industry: "Healthcare, Pharma & Life Sciences",
    interest: "ISO/IEC 27001 · 27701 · 42001",
    message:
      "We want to extend our existing ISO 27001 ISMS to ISO 27701 PIMS ahead of May 2027.",
    dpdpaConsent: true,
    newsletter: false,
    status: "In Progress",
    date: "2026-11-25",
  },
  {
    id: "ENQ-1040",
    fullName: "Karthik Subramanian",
    email: "karthik@nexusaas.io",
    phone: "+91 97911 84320",
    company: "NexuSaaS Technologies",
    industry: "Technology, SaaS & E-Commerce",
    interest: "Cybersecurity & VAPT",
    message:
      "Require grey-box web application and API penetration testing for our B2B payment gateway.",
    dpdpaConsent: true,
    newsletter: true,
    status: "New",
    date: "2026-11-24",
  },
  {
    id: "ENQ-1039",
    fullName: "Priya Nair",
    email: "priya.nair@autologix.co.in",
    phone: "+91 94440 31982",
    company: "AutoLogix Supply Chain",
    industry: "Manufacturing, Automotive & Logistics",
    interest: "Technology Solutions (Qualys, OpenText, Securely Share, SearchInform)",
    message:
      "Interested in PII discovery and Securely Share deployment for vendor data exchange.",
    dpdpaConsent: true,
    newsletter: false,
    status: "Responded",
    date: "2026-11-22",
  },
  {
    id: "ENQ-1038",
    fullName: "Siddharth Mehta",
    email: "smehta@capitalpay.in",
    phone: "+91 98112 76409",
    company: "CapitalPay Fintech",
    industry: "BFSI, Banking & Fintech",
    interest: "Advisory & Technical Services",
    message:
      "Virtual DPO and CERT-In 6-hour incident response readiness playbook consultation.",
    dpdpaConsent: true,
    newsletter: true,
    status: "Responded",
    date: "2026-11-20",
  },
];

export const INITIAL_TRAINING_ENQUIRIES = [
  {
    id: "TRN-2089",
    course: "Certified Data Protection Officer (CDPO) Training",
    fullName: "Rohan Kulkarni",
    email: "rohan.k@indusfintech.com",
    phone: "+91 98230 11459",
    designation: "Head of Legal & Compliance",
    organization: "Indus Fintech Solutions",
    participantType: "Corporate Team (2–10 Participants)",
    trainingMode: "Live Online (Instructor-Led)",
    notes: "Looking to enroll 5 compliance leads in the December batch.",
    status: "New",
    date: "2026-11-26",
  },
  {
    id: "TRN-2088",
    course: "DPDPA for Leadership",
    fullName: "Meenakshi Sundaram",
    email: "msundaram@apexbank.co.in",
    phone: "+91 98409 88210",
    designation: "Chief Information Security Officer",
    organization: "Apex Cooperative Bank",
    participantType: "Enterprise Batch (10+ Participants)",
    trainingMode: "Corporate On-Site / In-House Batch",
    notes: "2-hour executive board briefing requested in Chennai headquarters.",
    status: "In Progress",
    date: "2026-11-25",
  },
  {
    id: "TRN-2087",
    course: "DPDPA Practitioner",
    fullName: "Deepak Verma",
    email: "deepak.v@cloudninehr.in",
    phone: "+91 99104 33812",
    designation: "IT Risk Manager",
    organization: "CloudNine HR Systems",
    participantType: "Individual Professional",
    trainingMode: "Weekend Executive Batch",
    notes: "Please share fee details and certification exam schedule.",
    status: "New",
    date: "2026-11-23",
  },
  {
    id: "TRN-2086",
    course: "ISO/IEC 27001:2022 Lead Implementer",
    fullName: "Harini Krishnan",
    email: "harini@secureops.in",
    phone: "+91 97890 65214",
    designation: "Senior GRC Analyst",
    organization: "SecureOps Consulting",
    participantType: "Corporate Team (2–10 Participants)",
    trainingMode: "Live Online (Instructor-Led)",
    notes: "Need syllabus and corporate discount for 3 participants.",
    status: "Responded",
    date: "2026-11-21",
  },
];

export const INITIAL_GRIEVANCES = [
  {
    id: "GRV-301",
    principalName: "Arjun Gopalan",
    email: "arjun.g@outlook.com",
    requestType: "Right to Access & Summary of Personal Data",
    referenceSection: "DPDP Act Section 11",
    slaStatus: "Acknowledged (< 24h)",
    status: "In Progress",
    date: "2026-11-25",
  },
  {
    id: "GRV-300",
    principalName: "Divya Narasimhan",
    email: "divya.n@gmail.com",
    requestType: "Consent Withdrawal & Erasure Request",
    referenceSection: "DPDP Act Section 6(4) & 12",
    slaStatus: "Completed",
    status: "Resolved",
    date: "2026-11-19",
  },
];

export const INITIAL_SUBSCRIBERS = [
  {
    id: "SUB-501",
    email: "ciso@bharathousing.in",
    source: "25-Point DPDPA Readiness Checklist",
    company: "Bharat Housing Finance",
    consentTimestamp: "2026-11-26 11:20 IST",
    status: "Active",
  },
  {
    id: "SUB-502",
    email: "dpo@tridentpharma.com",
    source: "DPDPA Self-Check Assessment",
    company: "Trident Pharmaceuticals",
    consentTimestamp: "2026-11-25 16:45 IST",
    status: "Active",
  },
  {
    id: "SUB-503",
    email: "compliance@paymatrix.io",
    source: "Consultation Form Opt-In",
    company: "PayMatrix Gateway",
    consentTimestamp: "2026-11-24 09:15 IST",
    status: "Active",
  },
];

export const ADMIN_SERVICES_CATALOG = [
  {
    id: "srv-infosec",
    title: "Information Security Advisory",
    category: "Core Advisory",
    standards: "ISO/IEC 27001:2022 · NIST CSF",
    route: "/services#advisory",
    status: "Published",
  },
  {
    id: "srv-dpdpa",
    title: "DPDP Act, 2023 Compliance Programme",
    category: "Data Privacy",
    standards: "India DPDPA 2023 · 5-Stage Lifecycle",
    route: "/dpdpa-compliance",
    status: "Published",
  },
  {
    id: "srv-privacy",
    title: "Global Data Privacy & PIMS Advisory",
    category: "Data Privacy",
    standards: "ISO/IEC 27701 · GDPR · UAE PDPL",
    route: "/services#standards",
    status: "Published",
  },
  {
    id: "srv-ai",
    title: "AI Governance & Responsible AI",
    category: "Emerging Tech Governance",
    standards: "ISO/IEC 42001",
    route: "/services#advisory",
    status: "Published",
  },
  {
    id: "srv-vapt",
    title: "Security Assessments & VAPT",
    category: "Technical Assurance",
    standards: "OWASP Top 10 · PTES · CERT-In",
    route: "/services#advisory",
    status: "Published",
  },
  {
    id: "srv-vciso",
    title: "Virtual CISO & Virtual DPO Support",
    category: "Managed Governance",
    standards: "Board Reporting · Continuous Audit",
    route: "/services#advisory",
    status: "Published",
  },
];

export const ADMIN_SOLUTIONS_CATALOG = [
  {
    id: "sol-qualys",
    name: "Qualys",
    category: "Vulnerability & Compliance Management",
    partner: "Qualys Cloud Security",
    route: "/solutions#qualys",
    status: "Active Partner",
  },
  {
    id: "sol-opentext",
    name: "OpenText Cybersecurity",
    category: "Enterprise Data Security & Identity Governance",
    partner: "OpenText",
    route: "/solutions#opentext",
    status: "Active Partner",
  },
  {
    id: "sol-securely-share",
    name: "Securely Share",
    category: "PII Discovery & Privacy-Enabled Data Sharing",
    partner: "Securely Share",
    route: "/solutions#securely-share",
    status: "Active Partner",
  },
  {
    id: "sol-searchinform",
    name: "SearchInform",
    category: "360° Data Loss Prevention (DLP) & Insider Risk",
    partner: "SearchInform",
    route: "/solutions#searchinform",
    status: "Active Partner",
  },
];

// ====================================================
// Admin Panel (v2) — Menu, Table Columns & Detail Fields
// ====================================================

export const ADMIN_MENU = [
  { id: "enquiries", label: "Enquiries", icon: "fas fa-envelope-open-text" },
  { id: "trainings", label: "Trainings", icon: "fas fa-graduation-cap" },
];

export const ENQUIRY_PANEL = {
  title: "Enquiries",
  description: "Consultation requests from the website enquiry form.",
  searchKeys: ["id", "fullName", "email", "company", "interest"],
  columns: [
    { key: "id", label: "ID" },
    { key: "fullName", label: "Name" },
    { key: "company", label: "Company" },
    { key: "interest", label: "Interested In" },
    { key: "date", label: "Date" },
    { key: "status", label: "Status", type: "status" },
  ],
  fields: [
    { key: "fullName", label: "Full name" },
    { key: "email", label: "Business email", type: "email" },
    { key: "phone", label: "Phone", type: "phone" },
    { key: "company", label: "Company name" },
    { key: "industry", label: "Industry" },
    { key: "interest", label: "Interested in" },
    { key: "message", label: "Message", type: "long" },
    { key: "dpdpaConsent", label: "DPDPA consent", type: "bool" },
    { key: "newsletter", label: "Newsletter opt-in", type: "bool" },
  ],
};

export const TRAINING_PANEL = {
  title: "Training Enquiries",
  description: "Course and batch registration enquiries from the Trainings portal.",
  searchKeys: ["id", "fullName", "email", "organization", "course"],
  columns: [
    { key: "id", label: "ID" },
    { key: "fullName", label: "Name" },
    { key: "course", label: "Course" },
    { key: "trainingMode", label: "Mode" },
    { key: "date", label: "Date" },
    { key: "status", label: "Status", type: "status" },
  ],
  fields: [
    { key: "course", label: "Course", type: "long" },
    { key: "fullName", label: "Full name" },
    { key: "email", label: "Email", type: "email" },
    { key: "phone", label: "Phone", type: "phone" },
    { key: "designation", label: "Designation" },
    { key: "organization", label: "Organization" },
    { key: "participantType", label: "Participant type" },
    { key: "trainingMode", label: "Training mode" },
    { key: "notes", label: "Notes", type: "long" },
  ],
};

// ====================================================
// Admin Panel (v2) — Trainings Management
// ====================================================

export const TRAINING_SUB_TABS = [
  { id: "manage", label: "Trainings & Certifications" },
  { id: "enquiries", label: "Enquiries" },
];

export const TRAINING_STATUS_OPTIONS = ["Published", "Draft"];

export const TRAINING_LIST_COLUMNS = [
  { key: "title", label: "Title" },
  { key: "category", label: "Category" },
  { key: "duration", label: "Duration" },
  { key: "status", label: "Status", type: "status" },
];

// Form field schema — `type`: text | textarea | select | checkbox
export const TRAINING_FORM_FIELDS = [
  { name: "title", label: "Title", type: "text", required: true, full: true },
  { name: "slug", label: "Slug (URL)", type: "text", required: true, placeholder: "e.g. dpdpa-practitioner" },
  { name: "category", label: "Category", type: "select", required: true, optionsKey: "categories" },
  { name: "badge", label: "Badge", type: "text", placeholder: "e.g. Practitioner" },
  { name: "status", label: "Status", type: "select", optionsKey: "statuses" },
  { name: "audience", label: "Audience", type: "text", placeholder: "e.g. IT, security, compliance" },
  { name: "duration", label: "Duration", type: "text", placeholder: "e.g. 1–2 days" },
  { name: "instructor", label: "Instructor", type: "text", placeholder: "e.g. Lead Implementer" },
  { name: "image", label: "Cover image path", type: "text", placeholder: "/images/..." },
  { name: "avatar", label: "Instructor avatar path", type: "text", placeholder: "/images/..." },
  { name: "desc", label: "Short description", type: "textarea", full: true },
  { name: "outcome", label: "Learning outcome", type: "textarea", full: true },
];

export const DEFAULT_TRAINING_TABS = [
  { id: "overview", label: "Course Overview", htmlContent: "" },
  { id: "about", label: "About", htmlContent: "" },
  { id: "agenda", label: "Agenda", htmlContent: "" },
  { id: "certification", label: "Certification", htmlContent: "" },
  { id: "examination", label: "Examination", htmlContent: "" },
];

export const EMPTY_TRAINING = {
  id: "",
  title: "",
  slug: "",
  category: "",
  badge: "",
  status: "Draft",
  audience: "",
  duration: "",
  instructor: "",
  image: "",
  avatar: "",
  desc: "",
  outcome: "",
  featured: false,
  tabs: DEFAULT_TRAINING_TABS,
};

export function slugify(value = "") {
  return String(value)
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

// Merges DPDPA_COURSES (featured) and CATALOG_COURSES into one editable list.
export function buildAdminTrainings(dpdpaCourses, catalogCourses, getCourseBySlug) {
  const map = new Map();
  catalogCourses.forEach((c) => map.set(c.id, { ...c, featured: false }));
  dpdpaCourses.forEach((c) =>
    map.set(c.id, { ...(map.get(c.id) || {}), ...c, featured: true })
  );

  return [...map.values()].map((c) => ({
    ...EMPTY_TRAINING,
    ...c,
    category: c.category || "DPDPA & Privacy",
    desc: c.desc || c.outcome || "",
    outcome: c.outcome || "",
    status: "Published",
    tabs: c.tabs || getCourseBySlug(c.slug)?.tabs || DEFAULT_TRAINING_TABS,
  }));
}
