# RS Consulting Website — Technical Project Architecture

**Framework:** Next.js 16 (App Router)  
**Language:** JavaScript (ES6+ Functional Components & Hooks)  
**Styling:** SCSS Modules (`.module.scss`)  
**Strict Guidelines:** `rules.md` (Zero Tailwind, Zero TypeScript, Max 200 lines/file, Screen Components pattern)

---

## 1. Directory Tree Overview

```
rsctec/
├── public/
│   ├── favicon.ico
│   ├── images/
│   │   ├── hero/
│   │   ├── partners/
│   │   ├── clients/
│   │   ├── services/
│   │   ├── team/
│   │   └── blog/
│   └── icons/
│
├── src/
│   ├── app/
│   │   ├── layout.js
│   │   ├── page.js
│   │   ├── about/
│   │   │   └── page.js
│   │   ├── dpdpa-compliance/
│   │   │   └── page.js
│   │   ├── services/
│   │   │   ├── page.js
│   │   │   ├── cyber-risk-security/
│   │   │   │   └── page.js
│   │   │   ├── cloud-security/
│   │   │   │   └── page.js
│   │   │   └── managed-security/
│   │   │       └── page.js
│   │   ├── solutions/
│   │   │   ├── page.js
│   │   │   ├── qualys/
│   │   │   │   └── page.js
│   │   │   ├── opentext/
│   │   │   │   └── page.js
│   │   │   ├── searchinform/
│   │   │   │   └── page.js
│   │   │   ├── securely-share/
│   │   │   │   └── page.js
│   │   │   └── morphisec/
│   │   │       └── page.js
│   │   ├── industries/
│   │   │   └── page.js
│   │   ├── trainings-certifications/
│   │   │   └── page.js
│   │   ├── resources/
│   │   │   ├── page.js
│   │   │   ├── dpdpa-checklist/
│   │   │   │   └── page.js
│   │   │   └── myths-vs-facts/
│   │   │       └── page.js
│   │   ├── blog/
│   │   │   ├── page.js
│   │   │   └── [slug]/
│   │   │       └── page.js
│   │   ├── contact/
│   │   │   └── page.js
│   │   ├── privacy-policy/
│   │   │   └── page.js
│   │   ├── terms-of-use/
│   │   │   └── page.js
│   │   └── grievance-officer/
│   │       └── page.js
│   │
│   ├── components/
│   │   ├── common/
│   │   │   ├── BlogCard/
│   │   │   │   ├── BlogCard.js
│   │   │   │   └── BlogCard.module.scss
│   │   │   ├── ContactForm/
│   │   │   │   ├── ContactForm.js
│   │   │   │   └── ContactForm.module.scss
│   │   │   ├── MythFactCard/
│   │   │   │   ├── MythFactCard.js
│   │   │   │   └── MythFactCard.module.scss
│   │   │   ├── PreFooterCTA/
│   │   │   │   ├── PreFooterCTA.js
│   │   │   │   └── PreFooterCTA.module.scss
│   │   │   ├── ServiceCard/
│   │   │   │   ├── ServiceCard.js
│   │   │   │   └── ServiceCard.module.scss
│   │   │   ├── SolutionCard/
│   │   │   │   ├── SolutionCard.js
│   │   │   │   └── SolutionCard.module.scss
│   │   │   ├── StatGrid/
│   │   │   │   ├── StatGrid.js
│   │   │   │   └── StatGrid.module.scss
│   │   │   ├── TimelineStepper/
│   │   │   │   ├── TimelineStepper.js
│   │   │   │   └── TimelineStepper.module.scss
│   │   │   └── TrustStrip/
│   │   │       ├── TrustStrip.js
│   │   │       └── TrustStrip.module.scss
│   │   │
│   │   ├── layout/
│   │   │   ├── CookieBanner/
│   │   │   │   ├── CookieBanner.js
│   │   │   │   └── CookieBanner.module.scss
│   │   │   ├── Footer/
│   │   │   │   ├── Footer.js
│   │   │   │   └── Footer.module.scss
│   │   │   ├── Header/
│   │   │   │   ├── Header.js
│   │   │   │   └── Header.module.scss
│   │   │   ├── MobileNav/
│   │   │   │   ├── MobileNav.js
│   │   │   │   └── MobileNav.module.scss
│   │   │   └── TopAnnouncementBar/
│   │   │       ├── TopAnnouncementBar.js
│   │   │       └── TopAnnouncementBar.module.scss
│   │   │
│   │   ├── screens/
│   │   │   ├── Home/
│   │   │   │   ├── Home.js
│   │   │   │   ├── Home.module.scss
│   │   │   │   └── sections/
│   │   │   │       ├── Hero/
│   │   │   │       │   ├── Hero.js
│   │   │   │       │   └── Hero.module.scss
│   │   │   │       ├── AboutSpotlight/
│   │   │   │       │   ├── AboutSpotlight.js
│   │   │   │       │   └── AboutSpotlight.module.scss
│   │   │   │       ├── ServicesOverview/
│   │   │   │       │   ├── ServicesOverview.js
│   │   │   │       │   └── ServicesOverview.module.scss
│   │   │   │       ├── DPDPAFeature/
│   │   │   │       │   ├── DPDPAFeature.js
│   │   │   │       │   └── DPDPAFeature.module.scss
│   │   │   │       ├── SolutionGrid/
│   │   │   │       │   ├── SolutionGrid.js
│   │   │   │       │   └── SolutionGrid.module.scss
│   │   │   │       ├── IndustriesOverview/
│   │   │   │       │   ├── IndustriesOverview.js
│   │   │   │       │   └── IndustriesOverview.module.scss
│   │   │   │       ├── TestimonialsSection/
│   │   │   │       │   ├── TestimonialsSection.js
│   │   │   │       │   └── TestimonialsSection.module.scss
│   │   │   │       └── BlogPreview/
│   │   │   │           ├── BlogPreview.js
│   │   │   │           └── BlogPreview.module.scss
│   │   │   │
│   │   │   ├── DPDPACompliance/
│   │   │   │   ├── DPDPACompliance.js
│   │   │   │   ├── DPDPACompliance.module.scss
│   │   │   │   └── sections/
│   │   │   │       ├── DPDPAHero/
│   │   │   │       ├── RegulatoryTimeline/
│   │   │   │       ├── ComplianceGaps/
│   │   │   │       ├── DPDPAServicesGrid/
│   │   │   │       ├── TechMapping/
│   │   │   │       ├── LifecycleMethodology/
│   │   │   │       ├── SectorPriorities/
│   │   │   │       ├── EngagementTiers/
│   │   │   │       └── DPDPAFAQ/
│   │   │   │
│   │   │   ├── About/
│   │   │   │   ├── About.js
│   │   │   │   ├── About.module.scss
│   │   │   │   └── sections/
│   │   │   │       ├── AboutHero/
│   │   │   │       ├── CompanyHeritage/
│   │   │   │       ├── CoreValues/
│   │   │   │       └── QualityAssurance/
│   │   │   │
│   │   │   ├── Services/
│   │   │   ├── Solutions/
│   │   │   ├── Industries/
│   │   │   ├── Trainings/
│   │   │   ├── Resources/
│   │   │   ├── Blog/
│   │   │   ├── Contact/
│   │   │   └── Legal/
│   │   │
│   │   └── ui/
│   │       ├── Accordion/
│   │       │   ├── Accordion.js
│   │       │   └── Accordion.module.scss
│   │       ├── Badge/
│   │       │   ├── Badge.js
│   │       │   └── Badge.module.scss
│   │       ├── Button/
│   │       │   ├── Button.js
│   │       │   └── Button.module.scss
│   │       ├── Card/
│   │       │   ├── Card.js
│   │       │   └── Card.module.scss
│   │       ├── Container/
│   │       │   ├── Container.js
│   │       │   └── Container.module.scss
│   │       ├── Input/
│   │       │   ├── Input.js
│   │       │   └── Input.module.scss
│   │       ├── SectionTitle/
│   │       │   ├── SectionTitle.js
│   │       │   └── SectionTitle.module.scss
│   │       └── Tabs/
│   │           ├── Tabs.js
│   │           └── Tabs.module.scss
│   │
│   ├── constants/
│   │   ├── constants.js            # Main export hub
│   │   ├── navigation.js           # Header, footer, and submenus
│   │   ├── companyData.js          # Legal entity, CIN, contact points
│   │   ├── dpdpaData.js            # Milestones, tech mapping, myths, faqs
│   │   ├── servicesData.js         # Service catalog & capabilities
│   │   ├── solutionsData.js        # Qualys, OpenText, SearchInform, etc.
│   │   ├── industriesData.js       # Vertical sector compliance guides
│   │   ├── trainingsData.js        # 16-course accreditation catalog
│   │   └── blogsData.js            # Insights articles & resources
│   │
│   ├── context/
│   │   └── AppContext.js           # Client global state (mobile drawer, modals)
│   │
│   └── styles/
│       ├── fonts.js                # Next/font Poppins & Oxanium
│       ├── globals.scss            # Resets, baseline CSS custom properties
│       └── scss/
│           ├── _variables.scss     # Design tokens (colors, spacing, shadows)
│           ├── _mixins.scss        # Flexbox, glassmorphism, card helpers
│           └── _media_queries.scss # Responsive breakpoint mixins
```

---

## 2. Page & Screen Architecture Mapping

Every `src/app/**/page.js` route is a pure Server Component that does nothing except export metadata and invoke its Screen Component:

```javascript
// src/app/dpdpa-compliance/page.js
import DPDPACompliance from "@/components/screens/DPDPACompliance/DPDPACompliance";

export const metadata = {
  title: "DPDPA Compliance Services in India | RS Consulting",
  description: "Get DPDPA-ready before May 2027. Security-led DPDP Act compliance: gap assessment, consent, breach readiness and controls.",
  alternates: {
    canonical: "https://www.rsctec.com/dpdpa-compliance",
  },
};

export default function Page() {
  return <DPDPACompliance />;
}
```

---

## 3. Component Design & Sizing Pattern (<200 Lines)

When a screen or section approaches the 200-line ceiling, it decomposes into structured sub-components:

```
src/components/screens/DPDPACompliance/
├── DPDPACompliance.js                   # Orchestrates sections (approx 60 lines)
├── DPDPACompliance.module.scss          # Screen-level container spacing
└── sections/
    ├── DPDPAHero/                       # Hero banner & CTA triggers (approx 120 lines)
    ├── RegulatoryTimeline/              # Milestone stepper Nov 2025 - May 2027 (approx 140 lines)
    ├── ComplianceGaps/                  # 5 blindspot cards (approx 110 lines)
    ├── DPDPAServicesGrid/               # 9 service cards (approx 130 lines)
    ├── TechMapping/                     # Partner tech mapping table (approx 150 lines)
    ├── LifecycleMethodology/            # 6-step lifecycle (approx 120 lines)
    ├── SectorPriorities/                # Sector priorities guide (approx 140 lines)
    ├── EngagementTiers/                 # Starter / Comprehensive / Assure (approx 160 lines)
    └── DPDPAFAQ/                        # Accordion FAQ (approx 110 lines)
```

---

## 4. SCSS Module Conventions & Global Mixins

1. **Global Injection:** SCSS modules must never include `@use "@/styles/scss/..."`.
2. **Responsive Design:** Strictly use mixins:
   - `@include respond-above(lg) { ... }`
   - `@include respond-below(md) { ... }`
   - `@include respond-between(sm, md) { ... }`
3. **No Hardcoded Values:**
   - Backgrounds: `$background`, `$background-surface`, `$background-card`
   - Accents: `$primary`, `$accent`, `$primary-gradient`, `$accent-gradient`
   - Spacing: `$space-xs`, `$space-sm`, `$space-md`, `$space-lg`, `$space-xl`, `$space-xxl`
   - Radius: `$radius-sm`, `$radius-md`, `$radius-lg`, `$radius-full`
   - Shadows: `$shadow-card`, `$shadow-glow-primary`, `$shadow-glow-cyan`
