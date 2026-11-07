import React from "react";
import styles from "./SectionTitle.module.scss";

export default function SectionTitle({
  subtitle,
  title,
  description,
  align = "center",
  theme = "dark",
  className = "",
}) {
  const containerClass = `
    ${styles.sectionTitle}
    ${styles[align] || styles.center}
    ${styles[theme] || styles.dark}
    ${className}
  `.trim();

  return (
    <div className={containerClass}>
      {subtitle && (
        <div className={styles.subtitleWrapper}>
          <span className={styles.subtitleDot} />
          <span className={styles.subtitleText}>{subtitle}</span>
        </div>
      )}
      {title && <h2 className={styles.title}>{title}</h2>}
      {description && <p className={styles.description}>{description}</p>}
    </div>
  );
}
