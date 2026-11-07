"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./Header.module.scss";
import Button from "@/components/ui/Button/Button";
import MobileNav from "@/components/layout/MobileNav/MobileNav";
import TopAnnouncementBar from "@/components/layout/TopAnnouncementBar/TopAnnouncementBar";
import DesktopNav from "@/components/layout/DesktopNav/DesktopNav";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    let lastScrollY =
      window.pageYOffset || document.documentElement.scrollTop || 0;

    const handleScroll = () => {
      const currentScrollY =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0;

      // When near the top, always show header in initial state
      if (currentScrollY <= 40) {
        setIsScrolled(false);
        setIsVisible(true);
        lastScrollY = currentScrollY;
        return;
      }

      setIsScrolled(true);

      const diff = currentScrollY - lastScrollY;

      // Scrolling DOWN past threshold -> hide header
      if (diff > 10 && currentScrollY > 70) {
        setIsVisible(false);
        lastScrollY = currentScrollY;
      }
      // Scrolling UP -> reveal header
      else if (diff < -10) {
        setIsVisible(true);
        lastScrollY = currentScrollY;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const showHeader = isVisible || mobileMenuOpen;

  return (
    <>
      <header
        className={`${styles.header} ${isScrolled ? styles.scrolled : ""} ${
          !showHeader ? styles.hidden : ""
        }`}
      >
        <div
          className={`${styles.topBarWrapper} ${
            isScrolled ? styles.topBarHidden : ""
          }`}
        >
          <TopAnnouncementBar />
        </div>

        <div className={styles.navBar}>
          <div className={styles.navBarInner}>
            <Link href="/" className={styles.logo}>
              <span className={styles.logoShield}>
                <i className="fas fa-shield-alt" />
              </span>
              <span className={styles.logoText}>
                <span className={styles.logoBrand}>RS Consulting</span>
                <span className={styles.logoTagline}>Cyber Risk & Compliance</span>
              </span>
            </Link>

            <DesktopNav />

            <div className={styles.actions}>
              <Button
                href="/dpdpa-compliance"
                variant="outline"
                size="sm"
                className={styles.startFreeBtn}
              >
                Start For Free
              </Button>
              <Button href="/contact" variant="primary" size="sm">
                Get in Touch
              </Button>

              <button
                type="button"
                className={styles.mobileToggle}
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open mobile navigation menu"
              >
                <span className={styles.burgerLine} />
                <span className={styles.burgerLine} />
                <span className={styles.burgerLine} />
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileNav
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
}

