"use client";

import React, { useState, useEffect } from "react";
import TrainingList from "@/components/screens/Admin/sections/Trainings/components/TrainingList/TrainingList";
import TrainingForm from "@/components/screens/Admin/sections/Trainings/components/TrainingForm/TrainingForm";
import { buildAdminTrainings } from "@/constants/adminData";
import {
  DPDPA_COURSES,
  CATALOG_COURSES,
  getCourseBySlug,
} from "@/constants/trainingsData";
import styles from "./ManageTrainings.module.scss";

export default function ManageTrainings() {
  const [trainings, setTrainings] = useState(() =>
    buildAdminTrainings(DPDPA_COURSES, CATALOG_COURSES, getCourseBySlug)
  );
  // null = list view, {} = create, record = edit
  const [editing, setEditing] = useState(null);
  const [notice, setNotice] = useState("");

  useEffect(() => {
    let ignore = false;

    fetch("/api/trainings", { cache: "no-store" })
      .then((res) => res.json())
      .then((result) => {
        if (!ignore && result.success && Array.isArray(result.data)) {
          setTrainings(result.data);
        }
      })
      .catch((err) => {
        console.error("Failed to fetch trainings:", err);
      });

    return () => {
      ignore = true;
    };
  }, []);

  const handleSave = async (record) => {
    try {
      const res = await fetch("/api/trainings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(record),
      });
      const result = await res.json();
      if (!res.ok || result.error) {
        throw new Error(result.error || "Failed to save training.");
      }

      const saved = result.data || record;
      setTrainings((prev) => {
        const exists = prev.some((t) => t.id === saved.id);
        return exists
          ? prev.map((t) => (t.id === saved.id ? saved : t))
          : [saved, ...prev];
      });

      setNotice(`"${record.title}" saved successfully to database.`);
      setEditing(null);
    } catch (err) {
      setNotice(`Error: ${err.message}`);
    }
  };

  const handleDelete = async (training) => {
    try {
      const res = await fetch(`/api/trainings/${training.id}`, {
        method: "DELETE",
      });
      if (!res.ok) {
        throw new Error("Failed to delete training.");
      }
      setTrainings((prev) => prev.filter((t) => t.id !== training.id));
      setNotice(`"${training.title}" deleted successfully.`);
      if (editing && editing.id === training.id) {
        setEditing(null);
      }
    } catch (err) {
      setNotice(`Error: ${err.message}`);
    }
  };

  const handleReorder = async (newTrainings) => {
    setTrainings(newTrainings);

    try {
      const ids = newTrainings.map((t) => t.id);
      await fetch("/api/trainings", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ids }),
      });
    } catch (err) {
      console.error("Failed to persist training order:", err);
    }
  };

  const open = (record) => {
    setNotice("");
    setEditing(record);
  };

  return (
    <div className={styles.manage}>
      {notice && !editing && (
        <div className={styles.notice} role="status">
          <i className="fas fa-check-circle" aria-hidden="true" />
          {notice}
        </div>
      )}

      {editing ? (
        <TrainingForm
          key={editing.id || "new"}
          initial={editing.id ? editing : null}
          trainings={trainings}
          onCancel={() => setEditing(null)}
          onSave={handleSave}
          onDelete={handleDelete}
        />
      ) : (
        <TrainingList
          trainings={trainings}
          onCreate={() => open({})}
          onEdit={open}
          onDelete={handleDelete}
          onReorder={handleReorder}
        />
      )}
    </div>
  );
}
