import React from "react";
import styles from "./ConsentBlock.module.scss";

export default function ConsentBlock({
  dpdpaConsent,
  newsletter,
  onChange,
}) {
  return (
    <div className={styles.consentBlock}>
      <label className={styles.checkboxLabel}>
        <input
          type="checkbox"
          name="dpdpaConsent"
          checked={dpdpaConsent}
          onChange={onChange}
          required
        />
        <span>
          <strong>Statutory DPDPA Consent:</strong> I agree to RS Consulting
          processing my contact info solely for responding to this inquiry in
          compliance with the DPDP Act, 2023. *
        </span>
      </label>

      <label className={styles.checkboxLabel}>
        <input
          type="checkbox"
          name="newsletter"
          checked={newsletter}
          onChange={onChange}
        />
        <span>
          Keep me informed about periodic regulatory infosec updates and DPDPA
          advisories.
        </span>
      </label>
    </div>
  );
}
