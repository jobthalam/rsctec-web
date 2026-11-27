import React from "react";
import styles from "./StatusBadge.module.scss";

const STATUS_CLASS = {
  New: "new",
  "In Progress": "progress",
  Responded: "done",
  Published: "new",
  Draft: "done",
};

export default function StatusBadge({ status }) {
  const variant = STATUS_CLASS[status] || "done";
  return <span className={`${styles.badge} ${styles[variant]}`}>{status}</span>;
}
