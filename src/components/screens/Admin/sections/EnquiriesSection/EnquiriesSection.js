"use client";

import React, { useState } from "react";
import styles from "./EnquiriesSection.module.scss";

const STATUS_FILTERS = ["All", "New", "In Progress", "Responded", "Resolved"];

export default function EnquiriesSection({
  activeTab,
  searchQuery,
  enquiries,
  trainingEnquiries,
  grievances,
  subscribers,
  onUpdateStatus,
}) {
  const [statusFilter, setStatusFilter] = useState("All");

  const q = (searchQuery || "").toLowerCase();

  const filterList = (list) =>
    list.filter((item) => {
      const matchesStatus =
        statusFilter === "All" || item.status === statusFilter;
      const matchesSearch =
        !q || JSON.stringify(item).toLowerCase().includes(q);
      return matchesStatus && matchesSearch;
    });

  return (
    <div className={styles.wrapper}>
      {activeTab !== "subscribers" && (
        <div className={styles.toolbar}>
          <div className={styles.filterPills}>
            {STATUS_FILTERS.map((st) => (
              <button
                key={st}
                type="button"
                className={`${styles.filterPill} ${
                  statusFilter === st ? styles.filterPillActive : ""
                }`}
                onClick={() => setStatusFilter(st)}
              >
                {st}
              </button>
            ))}
          </div>
        </div>
      )}

      {activeTab === "enquiries" && (
        <div className={styles.cardList}>
          {filterList(enquiries).map((item) => (
            <article key={item.id} className={styles.leadCard}>
              <div className={styles.leadTop}>
                <div>
                  <span className={styles.refCode}>
                    {item.id} · {item.date}
                  </span>
                  <h3 className={styles.leadName}>
                    {item.fullName} — <span>{item.company}</span>
                  </h3>
                  <p className={styles.leadContact}>
                    {item.email} · {item.phone} · {item.industry}
                  </p>
                </div>

                <div className={styles.statusControl}>
                  <select
                    value={item.status}
                    onChange={(e) =>
                      onUpdateStatus("enquiries", item.id, e.target.value)
                    }
                    className={styles.statusSelect}
                    aria-label={`Change status for ${item.fullName}`}
                  >
                    <option value="New">New</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Responded">Responded</option>
                  </select>
                </div>
              </div>

              <div className={styles.leadBody}>
                <span className={styles.topicPill}>{item.interest}</span>
                <p className={styles.messageText}>{item.message}</p>
              </div>

              <div className={styles.leadFooter}>
                <span className={styles.consentTag}>
                  <i className="fas fa-check-circle" aria-hidden="true" /> DPDPA
                  Notice &amp; Consent Verified
                </span>
                {item.newsletter && (
                  <span className={styles.consentTag}>
                    <i className="fas fa-bell" aria-hidden="true" /> Newsletter
                    Opt-In
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      )}

      {activeTab === "training-enquiries" && (
        <div className={styles.cardList}>
          {filterList(trainingEnquiries).map((trn) => (
            <article key={trn.id} className={styles.leadCard}>
              <div className={styles.leadTop}>
                <div>
                  <span className={styles.refCode}>
                    {trn.id} · {trn.date}
                  </span>
                  <h3 className={styles.leadName}>
                    {trn.fullName} — <span>{trn.organization}</span>
                  </h3>
                  <p className={styles.leadContact}>
                    {trn.designation} · {trn.email} · {trn.phone}
                  </p>
                </div>

                <div className={styles.statusControl}>
                  <select
                    value={trn.status}
                    onChange={(e) =>
                      onUpdateStatus(
                        "training-enquiries",
                        trn.id,
                        e.target.value
                      )
                    }
                    className={styles.statusSelect}
                    aria-label={`Change status for ${trn.fullName}`}
                  >
                    <option value="New">New</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Responded">Responded</option>
                  </select>
                </div>
              </div>

              <div className={styles.leadBody}>
                <div className={styles.tagRow}>
                  <span className={styles.topicPill}>{trn.course}</span>
                  <span className={styles.subPill}>{trn.participantType}</span>
                  <span className={styles.subPill}>{trn.trainingMode}</span>
                </div>
                <p className={styles.messageText}>{trn.notes}</p>
              </div>
            </article>
          ))}
        </div>
      )}

      {activeTab === "grievances" && (
        <div className={styles.cardList}>
          {filterList(grievances).map((grv) => (
            <article key={grv.id} className={styles.leadCard}>
              <div className={styles.leadTop}>
                <div>
                  <span className={styles.refCode}>
                    {grv.id} · {grv.referenceSection} · {grv.date}
                  </span>
                  <h3 className={styles.leadName}>{grv.principalName}</h3>
                  <p className={styles.leadContact}>{grv.email}</p>
                </div>

                <select
                  value={grv.status}
                  onChange={(e) =>
                    onUpdateStatus("grievances", grv.id, e.target.value)
                  }
                  className={styles.statusSelect}
                  aria-label={`Change status for ${grv.principalName}`}
                >
                  <option value="In Progress">In Progress</option>
                  <option value="Resolved">Resolved</option>
                </select>
              </div>

              <div className={styles.leadBody}>
                <div className={styles.tagRow}>
                  <span className={styles.topicPill}>{grv.requestType}</span>
                  <span className={styles.subPill}>SLA: {grv.slaStatus}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}

      {activeTab === "subscribers" && (
        <div className={styles.tableCard}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>ID</th>
                <th>Business Email</th>
                <th>Organization</th>
                <th>Lead Source</th>
                <th>Consent Timestamp</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {subscribers.map((sub) => (
                <tr key={sub.id}>
                  <td>{sub.id}</td>
                  <td className={styles.strongText}>{sub.email}</td>
                  <td>{sub.company}</td>
                  <td>{sub.source}</td>
                  <td>{sub.consentTimestamp}</td>
                  <td>
                    <span className={styles.topicPill}>{sub.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
