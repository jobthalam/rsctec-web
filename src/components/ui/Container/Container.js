import React from "react";
import styles from "./Container.module.scss";

export default function Container({
  children,
  className = "",
  size = "default",
}) {
  const containerClass = `${styles.container} ${
    size === "narrow" ? styles.narrow : size === "wide" ? styles.wide : ""
  } ${className}`.trim();

  return <div className={containerClass}>{children}</div>;
}
