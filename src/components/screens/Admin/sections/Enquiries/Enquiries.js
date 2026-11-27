"use client";

import React, { useState, useEffect } from "react";
import AdminTablePanel from "@/components/screens/Admin/components/AdminTablePanel/AdminTablePanel";
import { ENQUIRY_PANEL } from "@/constants/adminData";
import styles from "./Enquiries.module.scss";

export default function Enquiries() {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let ignore = false;

    fetch("/api/enquiries", { cache: "no-store" })
      .then((res) => res.json())
      .then((result) => {
        if (!ignore) {
          if (result.success && Array.isArray(result.data)) {
            setRows(result.data);
          }
          setLoading(false);
        }
      })
      .catch((err) => {
        console.error("Failed to fetch enquiries:", err);
        if (!ignore) {
          setLoading(false);
        }
      });

    return () => {
      ignore = true;
    };
  }, []);

  const handleStatusChange = async (id, newStatus) => {
    setRows((prev) =>
      prev.map((r) => (r.id === id ? { ...r, status: newStatus } : r))
    );

    try {
      await fetch(`/api/enquiries/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });
    } catch (err) {
      console.error("Failed to update enquiry status:", err);
    }
  };

  const handleDelete = async (id) => {
    setRows((prev) => prev.filter((r) => r.id !== id));

    try {
      await fetch(`/api/enquiries/${id}`, {
        method: "DELETE",
      });
    } catch (err) {
      console.error("Failed to delete enquiry:", err);
    }
  };

  const handleDeleteSelected = async (ids) => {
    setRows((prev) => prev.filter((r) => !ids.includes(r.id)));

    try {
      await fetch("/api/enquiries", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ids }),
      });
    } catch (err) {
      console.error("Failed to delete selected enquiries:", err);
    }
  };

  return (
    <section className={styles.section}>
      <AdminTablePanel
        config={ENQUIRY_PANEL}
        rows={rows}
        loading={loading}
        onStatusChange={handleStatusChange}
        onDelete={handleDelete}
        onDeleteSelected={handleDeleteSelected}
      />
    </section>
  );
}
