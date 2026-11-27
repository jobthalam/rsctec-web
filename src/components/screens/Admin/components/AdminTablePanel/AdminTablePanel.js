"use client";

import React, { useMemo, useState } from "react";
import AdminCard from "@/components/screens/Admin/components/AdminCard/AdminCard";
import DataTable from "@/components/screens/Admin/components/DataTable/DataTable";
import DetailsModal from "@/components/screens/Admin/components/DetailsModal/DetailsModal";
import PanelHeader from "@/components/screens/Admin/components/PanelHeader/PanelHeader";
import SearchInput from "@/components/screens/Admin/components/SearchInput/SearchInput";
import ConfirmModal from "@/components/common/ConfirmModal/ConfirmModal";
import styles from "./AdminTablePanel.module.scss";

export default function AdminTablePanel({
  config,
  rows = [],
  loading = false,
  onStatusChange,
  onDelete,
  onDeleteSelected,
  selectable = true,
}) {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(null);
  const [selectedIds, setSelectedIds] = useState([]);
  const [showBulkConfirm, setShowBulkConfirm] = useState(false);

  const filteredRows = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return rows;
    return rows.filter((row) =>
      config.searchKeys.some((key) =>
        String(row[key] ?? "").toLowerCase().includes(q)
      )
    );
  }, [query, rows, config.searchKeys]);

  const handleStatusChange = (id, newStatus) => {
    if (selected && selected.id === id) {
      setSelected((prev) => ({ ...prev, status: newStatus }));
    }
    if (onStatusChange) {
      onStatusChange(id, newStatus);
    }
  };

  const handleDeleteSingle = (id) => {
    setSelectedIds((prev) => prev.filter((item) => item !== id));
    if (onDelete) {
      onDelete(id);
    }
  };

  const handleToggleSelect = (id) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleToggleSelectAll = () => {
    const visibleIds = filteredRows.map((r) => r.id);
    const allSelected =
      visibleIds.length > 0 &&
      visibleIds.every((id) => selectedIds.includes(id));

    if (allSelected) {
      setSelectedIds((prev) => prev.filter((id) => !visibleIds.includes(id)));
    } else {
      setSelectedIds((prev) => Array.from(new Set([...prev, ...visibleIds])));
    }
  };

  const handleConfirmBulkDelete = async () => {
    setShowBulkConfirm(false);
    if (onDeleteSelected) {
      await onDeleteSelected(selectedIds);
    }
    setSelectedIds([]);
  };

  return (
    <div className={styles.panel}>
      <PanelHeader title={config.title} description={config.description}>
        {selectable && selectedIds.length > 0 && (
          <button
            type="button"
            className={styles.bulkDeleteBtn}
            onClick={() => setShowBulkConfirm(true)}
          >
            <i className="fas fa-trash-alt" aria-hidden="true" />
            <span>Delete Selected ({selectedIds.length})</span>
          </button>
        )}
        <SearchInput
          value={query}
          onChange={setQuery}
          label={`Search ${config.title}`}
        />
      </PanelHeader>

      <AdminCard
        meta={
          loading
            ? "Loading records..."
            : `${filteredRows.length} of ${rows.length} records`
        }
      >
        <DataTable
          columns={config.columns}
          rows={filteredRows}
          loading={loading}
          onRowClick={setSelected}
          selectable={selectable}
          selectedIds={selectedIds}
          onToggleSelect={handleToggleSelect}
          onToggleSelectAll={handleToggleSelectAll}
        />
      </AdminCard>

      {selected && (
        <DetailsModal
          record={selected}
          fields={config.fields}
          onClose={() => setSelected(null)}
          onStatusChange={onStatusChange ? handleStatusChange : undefined}
          onDelete={onDelete ? handleDeleteSingle : undefined}
        />
      )}

      <ConfirmModal
        isOpen={showBulkConfirm}
        title={`Delete ${selectedIds.length} ${
          selectedIds.length === 1 ? "Enquiry" : "Enquiries"
        }`}
        message={`Are you sure you want to delete ${selectedIds.length} selected ${
          selectedIds.length === 1 ? "record" : "records"
        }? This action cannot be undone.`}
        confirmText="Delete Selected"
        onConfirm={handleConfirmBulkDelete}
        onCancel={() => setShowBulkConfirm(false)}
      />
    </div>
  );
}
