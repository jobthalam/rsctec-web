import React from "react";
import Link from "next/link";
import Image from "next/image";
import Container from "@/components/ui/Container/Container";
import styles from "./Footer.module.scss";
import {
  COMPANY_INFO,
  FOOTER_SERVICES_LINKS,
  FOOTER_QUICK_LINKS,
  FOOTER_LEGAL_LINKS,
} from "@/constants/constants";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container className={styles.container}>
        <div className={styles.grid}>
          {/* Column 1: Company Profile */}
          <div className={styles.companyCol}>
            <Link href="/" className={styles.brand} aria-label="RS Consulting Home">
              <Image
                src="/logo/logo.png"
                alt="RS Consulting"
                width={160}
                height={74}
                className={styles.footerLogoImg}
              />
            </Link>
            <p className={styles.tagline}>{COMPANY_INFO.tagline}</p>
            <p className={styles.legalEntity}>
              <strong>Legal Entity:</strong> {COMPANY_INFO.legalName}
              <br />
              <strong>CIN:</strong> {COMPANY_INFO.cin}
            </p>
            <p className={styles.experienceBadge}>
              <i className="fas fa-shield-alt" /> {COMPANY_INFO.experience}
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className={styles.linkCol}>
            <h4 className={styles.colTitle}>Quick Links</h4>
            <ul className={styles.linkList}>
              {FOOTER_QUICK_LINKS.map((item) => (
                <li key={item.label} className={styles.linkItem}>
                  <Link href={item.href} className={styles.link}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Practices & Solutions */}
          <div className={styles.linkCol}>
            <h4 className={styles.colTitle}>Services & Solutions</h4>
            <ul className={styles.linkList}>
              {FOOTER_SERVICES_LINKS.map((item) => (
                <li key={item.label} className={styles.linkItem}>
                  <Link href={item.href} className={styles.link}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Office */}
          <div className={styles.contactCol}>
            <h4 className={styles.colTitle}>Headquarters</h4>
            <address className={styles.address}>
              {COMPANY_INFO.address}
            </address>
            <div className={styles.contactEntries}>
              <div className={styles.entry}>
                <span className={styles.entryLabel}>Phone:</span>
                <a href={`tel:${COMPANY_INFO.phone}`} className={styles.entryValue}>
                  {COMPANY_INFO.phoneDisplay}
                </a>
              </div>
              <div className={styles.entry}>
                <span className={styles.entryLabel}>Email:</span>
                <a href={`mailto:${COMPANY_INFO.email}`} className={styles.entryValue}>
                  {COMPANY_INFO.email}
                </a>
              </div>
              <div className={styles.entry}>
                <span className={styles.entryLabel}>Direct Chat:</span>
                <a
                  href={COMPANY_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.whatsappLink}
                >
                  WhatsApp Consultation <i className="caseicon-long-arrow-right" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal Sub-bar */}
        <div className={styles.bottomBar}>
          <p className={styles.copyright}>{COMPANY_INFO.copyright}</p>
          <ul className={styles.legalList}>
            {FOOTER_LEGAL_LINKS.map((link) => (
              <li key={link.label} className={styles.legalItem}>
                <Link href={link.href} className={styles.legalLink}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
