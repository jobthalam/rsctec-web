import React from "react";
import styles from "./AdminCard.module.scss";

export default function AdminCard({ title, meta, padded = false, children }) {
  return (
    <div className={styles.card}>
      {(title || meta) && (
        <div className={styles.head}>
          {title && <h2 className={styles.title}>{title}</h2>}
          {meta && <span className={styles.meta}>{meta}</span>}
        </div>
      )}
      <div className={padded ? styles.body : ""}>{children}</div>
    </div>
  );
}
