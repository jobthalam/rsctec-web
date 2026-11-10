"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./DesktopNav.module.scss";
import { NAVIGATION_LINKS } from "@/constants/constants";

export default function DesktopNav() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const pathname = usePathname();

  const isLinkActive = (href) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname === href || pathname?.startsWith(href + "/");
  };

  const isParentActive = (item) => {
    if (isLinkActive(item.href)) return true;
    if (item.submenu && item.submenu.length > 0) {
      return item.submenu.some((sub) => isLinkActive(sub.href));
    }
    return false;
  };

  return (
    <nav className={styles.desktopNav} aria-label="Main Navigation">
      <ul className={styles.menu}>
        {NAVIGATION_LINKS.map((item, index) => {
          const hasSubmenu = Boolean(item.submenu && item.submenu.length > 0);
          const isOpen = activeDropdown === index;
          const isActive = isParentActive(item);

          return (
            <li
              key={item.label}
              className={`${styles.menuItem} ${hasSubmenu ? styles.hasDropdown : ""}`}
              onMouseEnter={() => hasSubmenu && setActiveDropdown(index)}
              onMouseLeave={() => hasSubmenu && setActiveDropdown(null)}
            >
              <Link
                href={item.href}
                className={`${styles.menuLink} ${isActive ? styles.active : ""}`}
              >
                {item.label}
                {hasSubmenu && (
                  <i className={`caseicon-angle-arrow-down ${styles.dropdownArrow}`} />
                )}
              </Link>

              {hasSubmenu && (
                <div className={`${styles.dropdown} ${isOpen ? styles.dropdownOpen : ""}`}>
                  <ul className={styles.dropdownList}>
                    {item.submenu.map((sub) => {
                      const isSubActive = isLinkActive(sub.href);
                      return (
                        <li key={sub.label} className={styles.dropdownItem}>
                          <Link
                            href={sub.href}
                            className={`${styles.dropdownLink} ${
                              isSubActive ? styles.active : ""
                            }`}
                          >
                            <span className={styles.dropdownLabel}>{sub.label}</span>
                            {sub.description && (
                              <span className={styles.dropdownDesc}>
                                {sub.description}
                              </span>
                            )}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
