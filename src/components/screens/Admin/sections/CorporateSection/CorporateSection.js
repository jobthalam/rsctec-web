"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  CLIENT_LOGOS,
  PARTNER_LOGOS,
  ABOUT_TEAM,
  COMPANY_INFO,
  ANNOUNCEMENT_BAR,
} from "@/constants/constants";
import styles from "./CorporateSection.module.scss";

export default function CorporateSection({ activeTab }) {
  const [bannerState, setBannerState] = useState({
    badge: ANNOUNCEMENT_BAR.badge,
    message: ANNOUNCEMENT_BAR.message,
    linkText: ANNOUNCEMENT_BAR.linkText,
    href: ANNOUNCEMENT_BAR.href,
  });
  const [savedNotice, setSavedNotice] = useState(false);

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";

  const handleSaveSettings = (e) => {
    e.preventDefault();
    setSavedNotice(true);
    setTimeout(() => setSavedNotice(false), 2500);
  };

  if (activeTab === "clients-partners") {
    return (
      <div className={styles.wrapper}>
        <section className={styles.panelCard}>
          <div className={styles.panelHeader}>
            <h2 className={styles.panelTitle}>
              Enterprise Clients ({CLIENT_LOGOS.length})
            </h2>
            <span className={styles.badge}>Homepage &amp; Trust Marquee</span>
          </div>
          <div className={styles.logoGrid}>
            {CLIENT_LOGOS.map((client) => (
              <div key={client.name} className={styles.logoItem}>
                <div className={styles.logoPreview}>
                  <Image
                    src={client.src}
                    alt={client.name}
                    width={120}
                    height={56}
                    className={styles.logoImg}
                  />
                </div>
                <span className={styles.logoName}>{client.name}</span>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.panelCard}>
          <div className={styles.panelHeader}>
            <h2 className={styles.panelTitle}>
              Global Technology Partners ({PARTNER_LOGOS.length})
            </h2>
            <span className={styles.badge}>Solutions &amp; Ecosystem</span>
          </div>
          <div className={styles.logoGrid}>
            {PARTNER_LOGOS.map((partner) => (
              <div key={partner.name} className={styles.logoItem}>
                <div className={styles.logoPreview}>
                  <Image
                    src={partner.src}
                    alt={partner.name}
                    width={120}
                    height={56}
                    className={styles.logoImg}
                  />
                </div>
                <span className={styles.logoName}>{partner.name}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    );
  }

  if (activeTab === "team") {
    return (
      <div className={styles.wrapper}>
        <section className={styles.panelCard}>
          <div className={styles.panelHeader}>
            <h2 className={styles.panelTitle}>
              Leadership &amp; Practice Leads ({ABOUT_TEAM.length})
            </h2>
            <span className={styles.badge}>{COMPANY_INFO.experience}</span>
          </div>

          <div className={styles.teamGrid}>
            {ABOUT_TEAM.map((member) => (
              <article key={member.name} className={styles.teamCard}>
                <Image
                  src={member.img}
                  alt={member.name}
                  width={80}
                  height={80}
                  className={styles.memberAvatar}
                />
                <div className={styles.memberInfo}>
                  <h3 className={styles.memberName}>{member.name}</h3>
                  <p className={styles.memberRole}>{member.role}</p>
                  <span className={styles.memberCert}>{member.cert}</span>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className={styles.wrapper}>
      <section className={styles.panelCard}>
        <div className={styles.panelHeader}>
          <h2 className={styles.panelTitle}>
            Supabase Environment Configuration
          </h2>
          <span className={styles.badge}>
            {supabaseUrl ? "Connected" : "Missing Env"}
          </span>
        </div>

        <div className={styles.envGrid}>
          <div className={styles.envBox}>
            <span className={styles.envLabel}>NEXT_PUBLIC_SUPABASE_URL</span>
            <code className={styles.envCode}>
              {supabaseUrl || "Not configured"}
            </code>
          </div>
          <div className={styles.envBox}>
            <span className={styles.envLabel}>
              NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY
            </span>
            <code className={styles.envCode}>
              sb_publishable_••••••••••••••••••••
            </code>
          </div>
        </div>
      </section>

      <section className={styles.panelCard}>
        <div className={styles.panelHeader}>
          <h2 className={styles.panelTitle}>
            Top Announcement Bar &amp; Corporate Identity
          </h2>
          {savedNotice && (
            <span className={styles.savedTag}>Changes Saved</span>
          )}
        </div>

        <form onSubmit={handleSaveSettings} className={styles.settingsForm}>
          <div className={styles.formGrid}>
            <div className={styles.field}>
              <label htmlFor="adm-badge">Announcement Badge</label>
              <input
                id="adm-badge"
                type="text"
                value={bannerState.badge}
                onChange={(e) =>
                  setBannerState({ ...bannerState, badge: e.target.value })
                }
              />
            </div>
            <div className={styles.field}>
              <label htmlFor="adm-cta">Announcement CTA Text</label>
              <input
                id="adm-cta"
                type="text"
                value={bannerState.linkText}
                onChange={(e) =>
                  setBannerState({ ...bannerState, linkText: e.target.value })
                }
              />
            </div>
          </div>

          <div className={styles.field}>
            <label htmlFor="adm-msg">Announcement Message</label>
            <input
              id="adm-msg"
              type="text"
              value={bannerState.message}
              onChange={(e) =>
                setBannerState({ ...bannerState, message: e.target.value })
              }
            />
          </div>

          <div className={styles.formGrid}>
            <div className={styles.field}>
              <label htmlFor="adm-legal">Legal Entity &amp; CIN</label>
              <input
                id="adm-legal"
                type="text"
                readOnly
                value={`${COMPANY_INFO.legalName} (${COMPANY_INFO.cin})`}
              />
            </div>
            <div className={styles.field}>
              <label htmlFor="adm-emails">
                Primary &amp; Grievance Officer Emails
              </label>
              <input
                id="adm-emails"
                type="text"
                readOnly
                value={`${COMPANY_INFO.email} | ${COMPANY_INFO.grievanceEmail}`}
              />
            </div>
          </div>

          <button type="submit" className={styles.saveBtn}>
            Save Configuration
          </button>
        </form>
      </section>
    </div>
  );
}
