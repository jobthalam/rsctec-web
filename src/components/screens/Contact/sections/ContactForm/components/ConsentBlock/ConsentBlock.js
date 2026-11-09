import React from "react";
import Link from "next/link";
import styles from "./ConsentBlock.module.scss";

export default function ConsentBlock({
  dpdpaConsent,
  newsletter,
  onChange,
}) {
  return (
    <div className={styles.consentBlock}>
      <p className={styles.noticeText}>
        RSC Techasist Private Limited (RS Consulting) will use the details you provide only to
        respond to your enquiry and share information about the services you selected. We keep this
        data for 12 months unless you become a client. You can request access, correction or
        deletion, or withdraw consent, at any time by writing to{" "}
        <a href="mailto:grievance@rsctec.com" className={styles.emailLink}>
          grievance@rsctec.com
        </a>
        . See our{" "}
        <Link href="/contact#grievance" className={styles.privacyLink}>
          Privacy Policy
        </Link>
        .
      </p>

      <div className={styles.checkboxGroup}>
        <label className={styles.checkboxLabel}>
          <input
            type="checkbox"
            name="dpdpaConsent"
            checked={dpdpaConsent}
            onChange={onChange}
            required
          />
          <span className={styles.labelSpan}>
            I agree to RS Consulting contacting me about my enquiry.{" "}
            <span className={styles.requiredMark}>(required)</span>
          </span>
        </label>

        <label className={styles.checkboxLabel}>
          <input
            type="checkbox"
            name="newsletter"
            checked={newsletter}
            onChange={onChange}
          />
          <span className={styles.labelSpan}>
            Send me occasional updates on data protection and cybersecurity.{" "}
            <span className={styles.optionalMark}>(optional)</span>
          </span>
        </label>
      </div>
    </div>
  );
}
