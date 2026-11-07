"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./MobileNav.module.scss";
import { NAVIGATION_LINKS, COMPANY_INFO } from "@/constants/constants";
import Button from "@/components/ui/Button/Button";

export default function MobileNav({ isOpen, onClose }) {
  const [expandedIndex, setExpandedIndex] = useState(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const toggleSubmenu = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose} role="dialog" aria-modal="true">
      <div className={styles.drawer} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <div className={styles.brand}>
            <span className={styles.brandAccent}>RS</span> Consulting
          </div>
          <button
            type="button"
            className={styles.closeBtn}
            onClick={onClose}
            aria-label="Close navigation"
          >
            ✕
          </button>
        </div>

        <nav className={styles.nav}>
          <ul className={styles.navList}>
            {NAVIGATION_LINKS.map((item, index) => {
              const hasSubmenu = Boolean(item.submenu && item.submenu.length > 0);
              const isExpanded = expandedIndex === index;

              return (
                <li key={item.label} className={styles.navItem}>
                  {hasSubmenu ? (
                    <div>
                      <button
                        type="button"
                        className={styles.submenuToggle}
                        onClick={() => toggleSubmenu(index)}
                        aria-expanded={isExpanded}
                      >
                        <span>{item.label}</span>
                        <span className={`${styles.chevron} ${isExpanded ? styles.open : ""}`}>
                          ▾
                        </span>
                      </button>
                      {isExpanded && (
                        <ul className={styles.submenu}>
                          {item.submenu.map((sub) => (
                            <li key={sub.label} className={styles.submenuItem}>
                              <Link
                                href={sub.href}
                                className={styles.submenuLink}
                                onClick={onClose}
                              >
                                {sub.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className={styles.navLink}
                      onClick={onClose}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        <div className={styles.footer}>
          <div className={styles.contactDetails}>
            <p className={styles.phoneLabel}>Direct Consultation</p>
            <a href={`tel:${COMPANY_INFO.phone}`} className={styles.phoneLink}>
              {COMPANY_INFO.phoneDisplay}
            </a>
          </div>
          <div className={styles.actionButtons}>
            <Button
              href="/contact"
              variant="primary"
              size="md"
              className={styles.fullWidthBtn}
              onClick={onClose}
            >
              Get in Touch
            </Button>
            <Button
              href={COMPANY_INFO.whatsappUrl}
              variant="whatsapp"
              size="md"
              className={styles.fullWidthBtn}
              onClick={onClose}
            >
              WhatsApp Us
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
