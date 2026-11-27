"use client";

import React, { useEffect, useState } from "react";
import StatusBadge from "@/components/screens/Admin/components/StatusBadge/StatusBadge";
import DetailValue from "@/components/screens/Admin/components/DetailValue/DetailValue";
import ConfirmModal from "@/components/common/ConfirmModal/ConfirmModal";
import styles from "./DetailsModal.module.scss";

export default function DetailsModal({
  record,
  fields,
  onClose,
  onStatusChange,
  onDelete,
}) {
  const [showConfirm, setShowConfirm] = useState(false);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape" && !showConfirm) onClose();
    };
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKey);
    };
  }, [onClose, showConfirm]);

  const handleConfirmDelete = () => {
    setShowConfirm(false);
    if (onDelete) onDelete(record.id);
    onClose();
  };

  return (
    <div
      className={styles.overlay}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="admin-details-title"
    >
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <div>
            <div className={styles.meta}>
              <span>{record.id}</span>
              <span className={styles.dot} />
              <span>{record.date}</span>
              {record.status && <StatusBadge status={record.status} />}
            </div>
            <h2 id="admin-details-title" className={styles.title}>
              {record.fullName}
            </h2>
          </div>
          <button
            type="button"
            className={styles.closeBtn}
            onClick={onClose}
            aria-label="Close details"
          >
            <i className="fas fa-times" aria-hidden="true" />
          </button>
        </div>

        <dl className={styles.body}>
          {fields.map((field) => (
            <div
              key={field.key}
              className={`${styles.field} ${
                field.type === "long" ? styles.full : ""
              }`}
            >
              <dt>{field.label}</dt>
              <dd>
                <DetailValue type={field.type} value={record[field.key]} />
              </dd>
            </div>
          ))}
        </dl>

        {(onStatusChange || onDelete) && (
          <div className={styles.footer}>
            {onStatusChange ? (
              <div className={styles.statusWrapper}>
                <label htmlFor="modal-status-select">Status:</label>
                <select
                  id="modal-status-select"
                  value={record.status || "New"}
                  onChange={(e) => onStatusChange(record.id, e.target.value)}
                >
                  <option value="New">New</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Responded">Responded</option>
                </select>
              </div>
            ) : (
              <span />
            )}

            {onDelete && (
              <button
                type="button"
                className={styles.deleteBtn}
                onClick={() => setShowConfirm(true)}
              >
                <i className="fas fa-trash-alt" aria-hidden="true" />
                Delete
              </button>
            )}
          </div>
        )}
      </div>

      <ConfirmModal
        isOpen={showConfirm}
        title={`Delete Enquiry ${record.id}`}
        message={`Are you sure you want to delete the enquiry from ${
          record.fullName || record.id
        }? This action cannot be undone.`}
        confirmText="Delete Enquiry"
        onConfirm={handleConfirmDelete}
        onCancel={() => setShowConfirm(false)}
      />
    </div>
  );
}
