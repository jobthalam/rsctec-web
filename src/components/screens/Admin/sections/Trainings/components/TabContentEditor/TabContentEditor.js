"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import ConfirmModal from "@/components/common/ConfirmModal/ConfirmModal";
import styles from "./TabContentEditor.module.scss";

const RichTextEditor = dynamic(
  () =>
    import("@/components/screens/Admin/components/RichTextEditor/RichTextEditor"),
  {
    ssr: false,
    loading: () => <div className={styles.loading}>Loading editor…</div>,
  },
);

export default function TabContentEditor({ tabs, onChange }) {
  const [activeUid, setActiveUid] = useState(tabs[0]?.uid);
  const [tabToDelete, setTabToDelete] = useState(null);
  const activeTab = tabs.find((t) => t.uid === activeUid) || tabs[0];

  const updateTab = (uid, patch) =>
    onChange(tabs.map((t) => (t.uid === uid ? { ...t, ...patch } : t)));

  const addTab = () => {
    const uid = `new-${Date.now()}`;
    onChange([...tabs, { uid, id: "", label: "New Tab", htmlContent: "" }]);
    setActiveUid(uid);
  };

  const handleConfirmRemove = () => {
    if (!tabToDelete) return;
    const remaining = tabs.filter((t) => t.uid !== tabToDelete);
    onChange(remaining);
    setActiveUid(remaining[0]?.uid);
    setTabToDelete(null);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.strip}>
        {tabs.map((tab) => (
          <button
            key={tab.uid}
            type="button"
            className={`${styles.pill} ${tab.uid === activeTab?.uid ? styles.active : ""}`}
            onClick={() => setActiveUid(tab.uid)}
          >
            {tab.label || "Untitled"}
          </button>
        ))}
        <button type="button" className={styles.add} onClick={addTab}>
          <i className="fas fa-plus" aria-hidden="true" /> Add tab
        </button>
      </div>

      {activeTab ? (
        <div className={styles.panel}>
          <div className={styles.labelRow}>
            <div className={styles.labelField}>
              <label htmlFor="tab-label">Tab label</label>
              <input
                id="tab-label"
                type="text"
                value={activeTab.label}
                onChange={(e) =>
                  updateTab(activeTab.uid, { label: e.target.value })
                }
              />
            </div>
            <button
              type="button"
              className={styles.remove}
              onClick={() => setTabToDelete(activeTab.uid)}
            >
              <i className="fas fa-trash-alt" aria-hidden="true" /> Remove tab
            </button>
          </div>

          <RichTextEditor
            key={activeTab.uid}
            value={activeTab.htmlContent}
            onChange={(html) => updateTab(activeTab.uid, { htmlContent: html })}
          />
        </div>
      ) : (
        <p className={styles.empty}>
          No content tabs yet. Add one to get started.
        </p>
      )}

      <ConfirmModal
        isOpen={Boolean(tabToDelete)}
        title="Remove Content Tab"
        message="Are you sure you want to remove this tab and its content? This action cannot be undone."
        confirmText="Remove Tab"
        onConfirm={handleConfirmRemove}
        onCancel={() => setTabToDelete(null)}
      />
    </div>
  );
}
