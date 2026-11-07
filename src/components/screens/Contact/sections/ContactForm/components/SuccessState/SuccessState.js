import React from "react";
import styles from "./SuccessState.module.scss";

export default function SuccessState({ fullName, interest, email, onReset }) {
  return (
    <div className={styles.successState}>
      <div className={styles.checkIcon}>
        <i className="fas fa-check-circle" />
      </div>
      <h3>Thank You, {fullName}!</h3>
      <p>
        Your inquiry regarding <strong>{interest}</strong> has been received by RS Consulting.
        A lead security advisor will reach out to you at <strong>{email}</strong> shortly.
      </p>
      <button type="button" className={styles.resetBtn} onClick={onReset}>
        Send Another Message
      </button>
    </div>
  );
}
