import React from "react";
import Link from "next/link";
import styles from "./Button.module.scss";

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  type = "button",
  className = "",
  disabled = false,
  target,
  rel,
  icon,
  iconPosition = "right",
}) {
  const variantClass = styles[variant] || styles.primary;
  const sizeClass = styles[size] || styles.md;
  const buttonClasses = `${styles.btn} ${variantClass} ${sizeClass} ${className}`.trim();

  const content = (
    <>
      {icon && iconPosition === "left" && (
        <span className={styles.iconLeft}>{icon}</span>
      )}
      <span className={styles.label}>{children}</span>
      {icon && iconPosition === "right" && (
        <span className={styles.iconRight}>{icon}</span>
      )}
    </>
  );

  if (href) {
    const isExternal = href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:");
    const finalRel = isExternal && !rel ? "noopener noreferrer" : rel;
    const finalTarget = isExternal && !target ? "_blank" : target;

    return (
      <Link
        href={href}
        className={buttonClasses}
        target={finalTarget}
        rel={finalRel}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={buttonClasses}
      disabled={disabled}
    >
      {content}
    </button>
  );
}
