"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import AOS from "aos";
import styles from "./AOSInit.module.scss";

export default function AOSInit() {
  const pathname = usePathname();

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
      offset: 50,
      delay: 50,
    });
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [pathname]);

  return <div className={styles.aosHolder} aria-hidden="true" />;
}
