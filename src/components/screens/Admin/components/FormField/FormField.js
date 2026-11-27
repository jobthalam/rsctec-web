import React from "react";
import styles from "./FormField.module.scss";

export default function FormField({ field, value, options = [], error, onChange }) {
  const id = `field-${field.name}`;
  const handle = (e) =>
    onChange(field.name, field.type === "checkbox" ? e.target.checked : e.target.value);

  if (field.type === "checkbox") {
    return (
      <label className={`${styles.checkbox} ${field.full ? styles.full : ""}`}>
        <input type="checkbox" checked={!!value} onChange={handle} />
        <span>{field.label}</span>
      </label>
    );
  }

  return (
    <div className={`${styles.field} ${field.full ? styles.full : ""}`}>
      <label htmlFor={id}>
        {field.label}
        {field.required && <span className={styles.req}> *</span>}
      </label>

      {field.type === "select" && (
        <select id={id} value={value} onChange={handle}>
          <option value="">Select…</option>
          {options.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      )}

      {field.type === "textarea" && (
        <textarea id={id} rows={3} value={value} onChange={handle} placeholder={field.placeholder} />
      )}

      {field.type === "text" && (
        <input id={id} type="text" value={value} onChange={handle} placeholder={field.placeholder} />
      )}

      {error && <span className={styles.error}>{error}</span>}
    </div>
  );
}
