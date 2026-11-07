import React from "react";
import styles from "./GrievanceSection.module.scss";
import { COMPANY_INFO } from "@/constants/constants";

export default function GrievanceSection() {
  return (
    <section id="grievance" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grievanceCard}>
          <div className={styles.header}>
            <span className={styles.subtitle}>DPDP Act, 2023 Statutory Compliance</span>
            <h2 className={styles.title}>Data Principal Grievance Redressal Mechanism</h2>
            <p className={styles.description}>
              In accordance with the provisions of Section 8 and Section 13 of the Digital Personal
              Data Protection Act, 2023, RS Consulting has instituted a transparent and accessible
              mechanism for Data Principals to exercise their statutory rights and register grievances.
            </p>
          </div>

          <div className={styles.grid}>
            <div className={styles.infoBox}>
              <i className="fas fa-user-shield" />
              <h4>Designated Grievance Officer</h4>
              <p>
                Data Principals may submit written notices regarding consent withdrawal, access to
                personal data, right of correction, or data erasure directly to:
              </p>
              <a href={`mailto:${COMPANY_INFO.grievanceEmail}`} className={styles.officerEmail}>
                {COMPANY_INFO.grievanceEmail}
              </a>
            </div>

            <div className={styles.infoBox}>
              <i className="fas fa-history" />
              <h4>Statutory Resolution Timelines</h4>
              <p>
                - Grievance Acknowledgment: <strong>Within 24 hours</strong> of receipt.
                <br />
                - Statutory Response & Investigation: <strong>Within statutory timelines</strong>.
                <br />
                - Escalation: Escalations are directly reviewed by corporate legal counsel.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
