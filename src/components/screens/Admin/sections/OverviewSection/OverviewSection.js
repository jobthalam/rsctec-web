"use client";

import React from "react";
import { ADMIN_KPI_STATS } from "@/constants/adminData";
import styles from "./OverviewSection.module.scss";

export default function OverviewSection({
  enquiries,
  trainingEnquiries,
  grievances,
  onSelectTab,
}) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.kpiGrid}>
        {ADMIN_KPI_STATS.map((kpi) => (
          <button
            key={kpi.id}
            type="button"
            className={styles.kpiCard}
            onClick={() => onSelectTab(kpi.targetTab)}
          >
            <div className={styles.kpiTop}>
              <span className={styles.kpiLabel}>{kpi.label}</span>
              <span className={styles.kpiIcon}>
                <i className={kpi.icon} aria-hidden="true" />
              </span>
            </div>
            <div className={styles.kpiValue}>{kpi.value}</div>
            <div className={styles.kpiTrend}>
              <span>{kpi.trend}</span>
              <i className="fas fa-arrow-right" aria-hidden="true" />
            </div>
          </button>
        ))}
      </div>

      <div className={styles.panelsGrid}>
        <section className={styles.panelCard}>
          <div className={styles.panelHeader}>
            <div>
              <h2 className={styles.panelTitle}>
                Recent Consultation Enquiries
              </h2>
              <p className={styles.panelSub}>
                Latest enterprise cybersecurity &amp; DPDPA advisory leads
              </p>
            </div>
            <button
              type="button"
              className={styles.viewAllBtn}
              onClick={() => onSelectTab("enquiries")}
            >
              View All
            </button>
          </div>

          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Contact</th>
                  <th>Company</th>
                  <th>Practice Area</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {enquiries.slice(0, 4).map((item) => (
                  <tr key={item.id}>
                    <td>
                      <div className={styles.primaryCell}>{item.fullName}</div>
                      <div className={styles.secondaryCell}>{item.email}</div>
                    </td>
                    <td>
                      <div className={styles.primaryCell}>{item.company}</div>
                      <div className={styles.secondaryCell}>
                        {item.industry}
                      </div>
                    </td>
                    <td>{item.interest}</td>
                    <td>
                      <span
                        className={`${styles.statusBadge} ${
                          item.status === "New"
                            ? styles.statusNew
                            : item.status === "In Progress"
                              ? styles.statusProgress
                              : styles.statusDone
                        }`}
                      >
                        {item.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className={styles.panelCard}>
          <div className={styles.panelHeader}>
            <div>
              <h2 className={styles.panelTitle}>
                Recent Training Registrations
              </h2>
              <p className={styles.panelSub}>
                DPDPA &amp; certification batch syllabus requests
              </p>
            </div>
            <button
              type="button"
              className={styles.viewAllBtn}
              onClick={() => onSelectTab("training-enquiries")}
            >
              View All
            </button>
          </div>

          <div className={styles.listStack}>
            {trainingEnquiries.slice(0, 4).map((trn) => (
              <div key={trn.id} className={styles.listRow}>
                <div className={styles.listMain}>
                  <span className={styles.courseTag}>{trn.course}</span>
                  <h3 className={styles.listName}>
                    {trn.fullName} · {trn.organization}
                  </h3>
                  <p className={styles.listMeta}>
                    {trn.designation} · {trn.participantType}
                  </p>
                </div>
                <span
                  className={`${styles.statusBadge} ${
                    trn.status === "New"
                      ? styles.statusNew
                      : trn.status === "In Progress"
                        ? styles.statusProgress
                        : styles.statusDone
                  }`}
                >
                  {trn.status}
                </span>
              </div>
            ))}
          </div>
        </section>
      </div>

      <section className={styles.panelCard}>
        <div className={styles.panelHeader}>
          <div>
            <h2 className={styles.panelTitle}>
              Quick Content &amp; System Modules
            </h2>
            <p className={styles.panelSub}>
              Jump directly to website content and statutory compliance sections
            </p>
          </div>
        </div>

        <div className={styles.quickModulesGrid}>
          <button
            type="button"
            className={styles.moduleBox}
            onClick={() => onSelectTab("grievances")}
          >
            <i className="fas fa-user-shield" aria-hidden="true" />
            <div>
              <h3>DPDPA Grievances ({grievances.length})</h3>
              <p>Section 8 &amp; 13 Data Principal rights queue</p>
            </div>
          </button>

          <button
            type="button"
            className={styles.moduleBox}
            onClick={() => onSelectTab("trainings")}
          >
            <i className="fas fa-graduation-cap" aria-hidden="true" />
            <div>
              <h3>Trainings Catalog</h3>
              <p>Manage DPDPA role-based &amp; GRC courses</p>
            </div>
          </button>

          <button
            type="button"
            className={styles.moduleBox}
            onClick={() => onSelectTab("resources")}
          >
            <i className="fas fa-book-open" aria-hidden="true" />
            <div>
              <h3>DPDPA Knowledge Hub</h3>
              <p>25-Point Checklist, Self-Check &amp; Myth/Fact</p>
            </div>
          </button>

          <button
            type="button"
            className={styles.moduleBox}
            onClick={() => onSelectTab("settings")}
          >
            <i className="fas fa-bullhorn" aria-hidden="true" />
            <div>
              <h3>Announcement &amp; Env</h3>
              <p>May 2027 DPDP banner &amp; Supabase status</p>
            </div>
          </button>
        </div>
      </section>
    </div>
  );
}
