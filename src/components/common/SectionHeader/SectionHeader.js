import React from "react";
import styles from "./SectionHeader.module.scss";

export default function SectionHeader({
  subtitle,
  eyebrow,
  title,
  description,
  variant = "dark",
  alignment = "center",
  align,
  titleTag: TitleTag = "h2",
  className = "",
  aos = "fade-up",
  children,
}) {
  const alignClass = alignment || align || "center";
  const containerClasses = [
    styles.header,
    styles[alignClass] || styles.center,
    styles[variant] || styles.dark,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const subText = subtitle || eyebrow;

  return (
    <div className={containerClasses} {...(aos ? { "data-aos": aos } : {})}>
      {subText && <span className={styles.subtitle}>{subText}</span>}
      {title && <TitleTag className={styles.title}>{title}</TitleTag>}
      {description && <p className={styles.description}>{description}</p>}
      {children}
    </div>
  );
}
