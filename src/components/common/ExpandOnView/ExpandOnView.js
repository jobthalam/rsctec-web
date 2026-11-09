"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "./ExpandOnView.module.scss";

const directions = {
  left: {
    hidden: "inset(0 100% 0 0)",
    visible: "inset(0 0 0 0)",
  },
  right: {
    hidden: "inset(0 0 0 100%)",
    visible: "inset(0 0 0 0)",
  },
  top: {
    hidden: "inset(0 0 100% 0)",
    visible: "inset(0 0 0 0)",
  },
  bottom: {
    hidden: "inset(100% 0 0 0)",
    visible: "inset(0 0 0 0)",
  },
};

export default function ExpandOnView({
  children,
  className = "",
  direction = "left",
  delay = 0,
  duration = 1000,
}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const selectedDirection = directions[direction] || directions.left;

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (!("IntersectionObserver" in window)) {
      const timer = setTimeout(() => setIsVisible(true), 0);
      return () => clearTimeout(timer);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      {
        threshold: 0,
        rootMargin: "0px 0px -5% 0px",
      }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${styles.wipe} ${isVisible ? styles.visible : ""} ${className}`}
      style={{
        "--wipe-hidden": selectedDirection.hidden,
        "--wipe-visible": selectedDirection.visible,
        "--wipe-duration": `${duration}ms`,
        "--wipe-delay": `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
