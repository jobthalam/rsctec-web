import React from "react";
import styles from "./DetailValue.module.scss";

export default function DetailValue({ type, value }) {
  if (type === "bool") {
    return (
      <span className={value ? styles.yes : styles.no}>
        <i className={value ? "fas fa-check" : "fas fa-times"} aria-hidden="true" />
        {value ? "Yes" : "No"}
      </span>
    );
  }

  if (value === undefined || value === null || value === "") {
    return <span className={styles.empty}>—</span>;
  }

  if (type === "email") {
    return (
      <a href={`mailto:${value}`} className={styles.link}>
        {value}
      </a>
    );
  }

  if (type === "phone") {
    return (
      <a href={`tel:${String(value).replace(/\s/g, "")}`} className={styles.link}>
        {value}
      </a>
    );
  }

  if (type === "long") {
    return <p className={styles.long}>{value}</p>;
  }

  return <span>{value}</span>;
}
