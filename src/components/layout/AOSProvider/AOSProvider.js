"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./AOSProvider.module.scss";

export default function AOSProvider({ children }) {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);
  const [isHidden, setIsHidden] = useState(false);

  // Initialize AOS immediately on mount so elements are never stuck invisible
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
      delay: 50,
    });

    const fadeTimer = setTimeout(() => {
      setIsLoading(false);
    }, 350);

    const removeTimer = setTimeout(() => {
      setIsHidden(true);
      if (typeof AOS.refreshHard === "function") {
        AOS.refreshHard();
      } else {
        AOS.refresh();
      }
    }, 900);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  // Re-trigger AOS refresh whenever the route changes
  useEffect(() => {
    const timer = setTimeout(() => {
      if (typeof AOS.refreshHard === "function") {
        AOS.refreshHard();
      } else {
        AOS.refresh();
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <>
      {!isHidden && (
        <div
          className={`${styles.preloader} ${!isLoading ? styles.hide : ""}`}
          role="status"
          aria-live="polite"
          aria-label="Loading RS Consulting"
        >
          <div className={styles.loaderWrapper}>
            <div className={styles.spinner} aria-hidden="true" />
            <Image
              src="/logo/logo-shield.png"
              alt="RS Consulting"
              width={48}
              height={62}
              priority
              className={styles.logoImg}
            />
          </div>
        </div>
      )}

      {children}
    </>
  );
}
