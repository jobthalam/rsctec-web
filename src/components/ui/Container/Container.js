import React from "react";
import styles from "./Container.module.scss";

export default function Container({
  as: Component = "div",
  children,
  className = "",
  size = "default",
  ...props
}) {
  const containerClass = `${styles.container} ${
    size === "narrow" ? styles.narrow : size === "wide" ? styles.wide : ""
  } ${className}`.trim();

  return (
    <Component className={containerClass} {...props}>
      {children}
    </Component>
  );
}
