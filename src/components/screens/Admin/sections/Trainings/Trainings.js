"use client";

import React, { useState, useEffect } from "react";
import AdminTabs from "@/components/screens/Admin/components/AdminTabs/AdminTabs";
import AdminTablePanel from "@/components/screens/Admin/components/AdminTablePanel/AdminTablePanel";
import ManageTrainings from "@/components/screens/Admin/sections/Trainings/components/ManageTrainings/ManageTrainings";
import {
  TRAINING_PANEL,
  TRAINING_SUB_TABS,
} from "@/constants/adminData";
import styles from "./Trainings.module.scss";

export default function Trainings() {
  const [activeTab, setActiveTab] = useState(TRAINING_SUB_TABS[0].id);
  const [enquiries, setEnquiries] = useState([]);
  const [loadingEnquiries, setLoadingEnquiries] = useState(true);

  useEffect(() => {
    let ignore = false;

    fetch("/api/training-enquiries", { cache: "no-store" })
      .then((res) => res.json())
      .then((result) => {
        if (!ignore) {
          if (result.success && Array.isArray(result.data)) {
            setEnquiries(result.data);
          }
          setLoadingEnquiries(false);
        }
      })
      .catch((err) => {
        console.error("Failed to fetch training enquiries:", err);
        if (!ignore) {
          setLoadingEnquiries(false);
        }
      });

    return () => {
      ignore = true;
    };
  }, []);

  const handleStatusChange = async (id, newStatus) => {
    setEnquiries((prev) =>
      prev.map((r) => (r.id === id ? { ...r, status: newStatus } : r))
    );

    try {
      await fetch(`/api/training-enquiries/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });
    } catch (err) {
      console.error("Failed to update training enquiry status:", err);
    }
  };

  const handleDelete = async (id) => {
    setEnquiries((prev) => prev.filter((r) => r.id !== id));

    try {
      await fetch(`/api/training-enquiries/${id}`, {
        method: "DELETE",
      });
    } catch (err) {
      console.error("Failed to delete training enquiry:", err);
    }
  };

  const handleDeleteSelected = async (ids) => {
    setEnquiries((prev) => prev.filter((r) => !ids.includes(r.id)));

    try {
      await fetch("/api/training-enquiries", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ids }),
      });
    } catch (err) {
      console.error("Failed to delete selected training enquiries:", err);
    }
  };

  return (
    <section className={styles.section}>
      <AdminTabs
        tabs={TRAINING_SUB_TABS}
        activeId={activeTab}
        onChange={setActiveTab}
      />

      {activeTab === "manage" && <ManageTrainings />}
      {activeTab === "enquiries" && (
        <AdminTablePanel
          config={TRAINING_PANEL}
          rows={enquiries}
          loading={loadingEnquiries}
          onStatusChange={handleStatusChange}
          onDelete={handleDelete}
          onDeleteSelected={handleDeleteSelected}
        />
      )}
    </section>
  );
}
