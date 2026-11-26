"use client";

import React from "react";
import styles from "./AdminTopbar.module.scss";

export default function AdminTopbar({
  activeMenuMeta,
  searchQuery,
  onSearchChange,
  onOpenSidebar,
  onSelectTab,
}) {
  const supabaseConfigured = Boolean(process.env.NEXT_PUBLIC_SUPABASE_URL);

  return (
    <header className={styles.topbar}>
      <div className={styles.leftArea}>
        <button
          type="button"
          className={styles.burgerBtn}
          onClick={onOpenSidebar}
          aria-label="Open navigation menu"
        >
          <i className="fas fa-bars" aria-hidden="true" />
        </button>

        <div className={styles.titleBlock}>
          <div className={styles.titleRow}>
            <h1 className={styles.pageTitle}>
              {activeMenuMeta?.label || "Dashboard Overview"}
            </h1>
            <span className={styles.envBadge}>
              <i className="fas fa-database" aria-hidden="true" />{" "}
              {supabaseConfigured ? "Supabase Env Active" : "Local Mode"}
            </span>
          </div>
          {activeMenuMeta?.description && (
            <p className={styles.pageDesc}>{activeMenuMeta.description}</p>
          )}
        </div>
      </div>

      <div className={styles.rightArea}>
        <div className={styles.searchBox}>
          <i className={`fas fa-search ${styles.searchIcon}`} />
          <input
            type="search"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search leads, courses, content..."
            className={styles.searchInput}
            aria-label="Search admin records"
          />
        </div>

        <button
          type="button"
          className={styles.quickBtn}
          onClick={() => onSelectTab("settings")}
          title="Site & Announcement Settings"
        >
          <i className="fas fa-sliders-h" aria-hidden="true" />
          <span className={styles.quickBtnText}>Settings</span>
        </button>

        <div className={styles.profilePill}>
          <span className={styles.avatarCircle}>RS</span>
          <div className={styles.profileText}>
            <span className={styles.profileName}>RSC Admin</span>
            <span className={styles.profileRole}>Super Administrator</span>
          </div>
        </div>
      </div>
    </header>
  );
}
