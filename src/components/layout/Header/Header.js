"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.scss";
import Button from "@/components/ui/Button/Button";
import Container from "@/components/ui/Container/Container";
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
          <Container className={styles.navBarInner}>
            <Link
              href="/"
              className={styles.logo}
              aria-label="RS Consulting Home"
            >
              <Image
                src="/logo/logo.png"
                alt="RS Consulting"
                width={150}
                height={69}
                className={styles.logoImg}
                priority
              />
            </Link>

            <DesktopNav />

            <div className={styles.actions}>
              <Button href="/contact" variant="primary">
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
          </Container>
        </div>
      </header>

      <MobileNav
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
}
