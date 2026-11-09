import React from "react";
import Container from "@/components/ui/Container/Container";
import styles from "./ContactGrid.module.scss";
import { COMPANY_INFO } from "@/constants/constants";

const CHANNELS = [
  {
    icon: "fas fa-phone-alt",
    title: "Direct Phone Line",
    subtitle: "Mon - Fri, 9:00 AM - 6:00 PM IST",
    value: COMPANY_INFO.phoneDisplay,
    href: `tel:${COMPANY_INFO.phone}`,
    btnLabel: "Call Advisor",
  },
  {
    icon: "fab fa-whatsapp",
    title: "Instant WhatsApp Chat",
    subtitle: "Fast response for initial queries",
    value: COMPANY_INFO.phoneDisplay,
    href: COMPANY_INFO.whatsappUrl,
    btnLabel: "Open WhatsApp",
    isExternal: true,
  },
  {
    icon: "fas fa-envelope-open-text",
    title: "Official Email Enquiries",
    subtitle: "Consulting & proposal submissions",
    value: COMPANY_INFO.email,
    href: `mailto:${COMPANY_INFO.email}`,
    btnLabel: "Send Email",
  },
  {
    icon: "fas fa-map-marked-alt",
    title: "Registered Corporate Office",
    subtitle: `CIN: ${COMPANY_INFO.cin}`,
    value: COMPANY_INFO.address,
    href: "#",
    btnLabel: "Registered in Chennai, TN",
  },
];

export default function ContactGrid() {
  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        <div className={styles.grid}>
          {CHANNELS.map((ch, idx) => (
            <div
              key={ch.title}
              className={styles.channelCard}
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <div className={styles.iconBox}>
                <i className={ch.icon} />
              </div>
              <h3 className={styles.cardTitle}>{ch.title}</h3>
              <span className={styles.subtitle}>{ch.subtitle}</span>
              <p className={styles.valueText}>{ch.value}</p>

              {ch.href !== "#" ? (
                <a
                  href={ch.href}
                  target={ch.isExternal ? "_blank" : undefined}
                  rel={ch.isExternal ? "noopener noreferrer" : undefined}
                  className={styles.channelLink}
                >
                  {ch.btnLabel} <i className="caseicon-long-arrow-right" />
                </a>
              ) : (
                <span className={styles.staticBadge}>{ch.btnLabel}</span>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
