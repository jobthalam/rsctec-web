"use client";

import React from "react";
import styles from "./SuccessState.module.scss";

export default function SuccessState({
  fullName,
  interest,
  email,
  onReset,
  onClose,
}) {
  return (
    <div className={styles.successState}>
      <div className={styles.checkIcon}>
        <i className="fas fa-check" />
      </div>
      <h3>Thank You, {fullName || "Valued Client"}!</h3>
      <p>
        Your inquiry regarding <strong>{interest || "Consultation"}</strong> has
        been received by RS Consulting. A lead security advisor will reach out to
        you at <strong>{email}</strong> shortly.
      </p>
      <div className={styles.actions}>
        {onClose && (
          <button type="button" className={styles.primaryBtn} onClick={onClose}>
            Done
          </button>
        )}
        {onReset && (
          <button
            type="button"
            className={onClose ? styles.secondaryBtn : styles.primaryBtn}
            onClick={onReset}
          >
            Send Another Message
          </button>
        )}
      </div>
    </div>
  );
}
