"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useApp } from "@/context/AppContext";
import styles from "./AOSProvider.module.scss";

export default function AOSProvider({ children }) {
  const pathname = usePathname();
  const { isVideoLoaded } = useApp();
  const [isLoading, setIsLoading] = useState(true);
  const [isHidden, setIsHidden] = useState(false);
  const [minTimePassed, setMinTimePassed] = useState(false);
  const [safetyTimeout, setSafetyTimeout] = useState(false);

  const isHomePage = pathname === "/";

  // Minimum preloader display duration (prevents visual flicker)
  useEffect(() => {
    const timer = setTimeout(() => {
      setMinTimePassed(true);
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  // Safety timeout: dismiss preloader if video takes more than 4s
  useEffect(() => {
    if (!isHomePage) return;
    const timer = setTimeout(() => {
      setSafetyTimeout(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, [isHomePage]);

  // Dismiss preloader when conditions are met
  useEffect(() => {
    if (!minTimePassed) return;

    if (!isHomePage) {
      setIsLoading(false);
      return;
    }

    if (isVideoLoaded || safetyTimeout) {
      setIsLoading(false);
    }
  }, [minTimePassed, isHomePage, isVideoLoaded, safetyTimeout]);

  // Hide preloader overlay and initialize AOS animations
  useEffect(() => {
    if (isLoading) return;

    const timer = setTimeout(() => {
      setIsHidden(true);

      AOS.init({
        duration: 800,
        easing: "ease-out-cubic",
        once: true,
        offset: 60,
        delay: 50,
      });

      if (typeof AOS.refreshHard === "function") {
        AOS.refreshHard();
      } else {
        AOS.refresh();
      }
    }, 700);

    return () => clearTimeout(timer);
  }, [isLoading]);

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
