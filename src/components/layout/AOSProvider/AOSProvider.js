"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import ExpandOnView from "@/components/common/ExpandOnView/ExpandOnView";
import styles from "./AOSProvider.module.scss";

export default function AOSProvider({ children }) {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);
  const [isHidden, setIsHidden] = useState(false);

  // Refresh AOS when pathname changes (after initial load)
  useEffect(() => {
    if (!isLoading) {
      AOS.refresh();
    }
  }, [pathname, isLoading]);

  // Minimum preloader display duration
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1100);

    return () => clearTimeout(timer);
  }, []);

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
          <ExpandOnView className={styles.loader}>
            <Image
              src="/logo/logo.png"
              alt="RS Consulting"
              width={220}
              height={101}
              priority
              className={styles.logoImg}
            />
          </ExpandOnView>
        </div>
      )}

      {children}
    </>
  );
}
