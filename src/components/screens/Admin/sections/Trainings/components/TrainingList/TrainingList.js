"use client";

import React, { useMemo, useState } from "react";
import AdminCard from "@/components/screens/Admin/components/AdminCard/AdminCard";
import DataTable from "@/components/screens/Admin/components/DataTable/DataTable";
import PanelHeader from "@/components/screens/Admin/components/PanelHeader/PanelHeader";
import SearchInput from "@/components/screens/Admin/components/SearchInput/SearchInput";
import Button from "@/components/ui/Button/Button";
import ConfirmModal from "@/components/common/ConfirmModal/ConfirmModal";
import { TRAINING_LIST_COLUMNS } from "@/constants/adminData";
import styles from "./TrainingList.module.scss";

const SEARCH_KEYS = ["title", "category", "audience", "slug"];

export default function TrainingList({
  trainings,
  onCreate,
  onEdit,
  onDelete,
  onReorder,
}) {
  const [query, setQuery] = useState("");
  const [trainingToDelete, setTrainingToDelete] = useState(null);

  const rows = useMemo(() => {
    const q = query.trim().toLowerCase();
    return trainings.filter(
      (t) =>
        !q ||
        SEARCH_KEYS.some((k) => String(t[k] ?? "").toLowerCase().includes(q))
    );
  }, [trainings, query]);

  const handleConfirmDelete = () => {
    if (trainingToDelete && onDelete) {
      onDelete(trainingToDelete);
    }
    setTrainingToDelete(null);
  };

  const isDraggable = !query.trim();

  return (
    <div className={styles.list}>
      <PanelHeader
        title="Trainings & Certifications"
        description="Manage training programmes, certifications and their display order."
      >
        <SearchInput value={query} onChange={setQuery} label="Search trainings" />
        <Button
          variant="primary"
          size="sm"
          onClick={onCreate}
          icon={<i className="fas fa-plus" aria-hidden="true" />}
          iconPosition="left"
        >
          Create New
        </Button>
      </PanelHeader>

      <AdminCard meta={`${rows.length} of ${trainings.length} trainings`}>
        <DataTable
          columns={TRAINING_LIST_COLUMNS}
          rows={rows}
          onRowClick={(row) => onEdit(trainings.find((t) => t.id === row.id))}
          actionLabel="Edit"
          draggable={isDraggable}
          onReorder={onReorder}
          onDelete={(row) => setTrainingToDelete(row)}
        />
      </AdminCard>

      <ConfirmModal
        isOpen={Boolean(trainingToDelete)}
        title={`Delete "${trainingToDelete?.title}"`}
        message="Are you sure you want to delete this training course? It will be permanently removed from the website and database."
        confirmText="Delete Course"
        onConfirm={handleConfirmDelete}
        onCancel={() => setTrainingToDelete(null)}
      />
    </div>
  );
}
