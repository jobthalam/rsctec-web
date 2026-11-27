import React from "react";
import styles from "./SearchInput.module.scss";

export default function SearchInput({ value, onChange, label = "Search" }) {
  return (
    <div className={styles.search}>
      <i className="fas fa-search" aria-hidden="true" />
      <input
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search..."
        aria-label={label}
      />
    </div>
  );
}
