import React from "react";
import Image from "next/image";
import styles from "./AdminSidebar.module.scss";

export default function AdminSidebar({ items, activeId, onSelect }) {
  const handleLogout = async () => {
    try {
      await fetch("/api/auth/logout", { method: "POST" });
    } catch (err) {
      console.error("Logout failed:", err);
    } finally {
      window.location.href = "/admin/login";
    }
  };

  return (
    <aside className={styles.sidebar}>
      <div className={styles.topSection}>
        <div className={styles.brand}>
          <Image
            src="/logo/logo.png"
            alt="RS Consulting"
            width={110}
            height={51}
            className={styles.logo}
            priority
          />
          <span className={styles.tag}>Admin</span>
        </div>

        <nav className={styles.menu} aria-label="Admin navigation">
          {items.map((item) => (
            <button
              key={item.id}
              type="button"
              className={`${styles.menuItem} ${
                activeId === item.id ? styles.active : ""
              }`}
              onClick={() => onSelect(item.id)}
            >
              <i className={item.icon} aria-hidden="true" />
              <span>{item.label}</span>
            </button>
          ))}
        </nav>
      </div>

      <div className={styles.footerSection}>
        <button
          type="button"
          className={styles.logoutBtn}
          onClick={handleLogout}
        >
          <i className="fas fa-sign-out-alt" aria-hidden="true" />
          <span>Sign Out</span>
        </button>
      </div>
    </aside>
  );
}
