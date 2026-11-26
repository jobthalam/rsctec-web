"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ADMIN_MENU_GROUPS } from "@/constants/adminData";
import styles from "./AdminSidebar.module.scss";

export default function AdminSidebar({
  activeTab,
  onSelectTab,
  isOpen,
  onClose,
  counts,
}) {
  const handleItemClick = (id) => {
    onSelectTab(id);
    if (onClose) onClose();
  };

  return (
    <>
      {isOpen && (
        <div
          className={styles.backdrop}
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      <aside
        className={`${styles.sidebar} ${isOpen ? styles.sidebarOpen : ""}`}
        aria-label="Admin Sidebar Navigation"
      >
        <div className={styles.brandHeader}>
          <Link href="/" className={styles.logoLink}>
            <Image
              src="/logo/white-logo.png"
              alt="RS Consulting"
              width={136}
              height={62}
              className={styles.logoImg}
              priority
            />
          </Link>
          <span className={styles.consoleBadge}>ADMIN</span>
          <button
            type="button"
            className={styles.mobileCloseBtn}
            onClick={onClose}
            aria-label="Close sidebar"
          >
            <i className="fas fa-times" />
          </button>
        </div>

        <nav className={styles.navScroll}>
          {ADMIN_MENU_GROUPS.map((group) => (
            <div key={group.groupLabel} className={styles.menuGroup}>
              <span className={styles.groupTitle}>{group.groupLabel}</span>
              <ul className={styles.menuList}>
                {group.items.map((item) => {
                  const isActive = activeTab === item.id;
                  const dynamicBadge =
                    counts && counts[item.id] !== undefined
                      ? counts[item.id]
                      : item.badge;

                  return (
                    <li key={item.id} className={styles.menuItem}>
                      <button
                        type="button"
                        onClick={() => handleItemClick(item.id)}
                        className={`${styles.menuButton} ${
                          isActive ? styles.menuButtonActive : ""
                        }`}
                      >
                        <span className={styles.menuIcon}>
                          <i className={item.icon} aria-hidden="true" />
                        </span>
                        <span className={styles.menuLabel}>{item.label}</span>
                        {dynamicBadge ? (
                          <span className={styles.menuBadge}>
                            {dynamicBadge}
                          </span>
                        ) : null}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </nav>

        <div className={styles.sidebarFooter}>
          <div className={styles.dbStatusBox}>
            <span className={styles.statusDot} />
            <div className={styles.statusMeta}>
              <span className={styles.statusTitle}>Supabase Ready</span>
              <span className={styles.statusSub}>Auth Bypassed (Dev)</span>
            </div>
          </div>

          <Link href="/" className={styles.exitLink}>
            <i className="fas fa-external-link-alt" aria-hidden="true" />
            <span>View Live Website</span>
          </Link>
        </div>
      </aside>
    </>
  );
}
