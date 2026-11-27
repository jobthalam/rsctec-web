"use client";

import React, { useState } from "react";
import DataTableRow from "@/components/screens/Admin/components/DataTable/components/DataTableRow/DataTableRow";
import styles from "./DataTable.module.scss";

export default function DataTable({
  columns,
  rows = [],
  loading = false,
  onRowClick,
  actionLabel = "View",
  selectable = false,
  selectedIds = [],
  onToggleSelect,
  onToggleSelectAll,
  draggable = false,
  onReorder,
  onDelete,
}) {
  const [draggedIndex, setDraggedIndex] = useState(null);
  const [dragOverIndex, setDragOverIndex] = useState(null);

  const allSelected =
    rows.length > 0 && rows.every((r) => selectedIds.includes(r.id));
  const extraCols = (draggable ? 1 : 0) + (selectable ? 1 : 0) + 1;

  const handleDragStart = (e, index) => {
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/plain", String(index));
    setDraggedIndex(index);
  };

  const handleDragOver = (e, index) => {
    if (!draggable) return;
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
    if (dragOverIndex !== index) {
      setDragOverIndex(index);
    }
  };

  const handleDragEnd = () => {
    setDraggedIndex(null);
    setDragOverIndex(null);
  };

  const handleDrop = (e, targetIndex) => {
    if (!draggable) return;
    e.preventDefault();
    if (draggedIndex === null || draggedIndex === targetIndex) {
      setDraggedIndex(null);
      setDragOverIndex(null);
      return;
    }

    const newRows = [...rows];
    const [moved] = newRows.splice(draggedIndex, 1);
    newRows.splice(targetIndex, 0, moved);

    setDraggedIndex(null);
    setDragOverIndex(null);

    if (onReorder) {
      onReorder(newRows);
    }
  };

  return (
    <div className={styles.wrapper}>
      <table className={styles.table}>
        <thead>
          <tr>
            {draggable && (
              <th className={styles.dragCell} aria-label="Reorder" />
            )}
            {selectable && (
              <th className={styles.checkboxCell}>
                <input
                  type="checkbox"
                  aria-label="Select all rows"
                  checked={allSelected}
                  onChange={onToggleSelectAll}
                  className={styles.checkbox}
                />
              </th>
            )}
            {columns.map((col) => (
              <th key={col.key}>{col.label}</th>
            ))}
            <th aria-label="Actions" />
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr>
              <td colSpan={columns.length + extraCols} className={styles.empty}>
                Loading records...
              </td>
            </tr>
          ) : rows.length === 0 ? (
            <tr>
              <td colSpan={columns.length + extraCols} className={styles.empty}>
                No records found.
              </td>
            </tr>
          ) : (
            rows.map((row, index) => (
              <DataTableRow
                key={row.id}
                row={row}
                index={index}
                columns={columns}
                actionLabel={actionLabel}
                isSelected={selectedIds.includes(row.id)}
                isDragging={draggedIndex === index}
                isDragOver={dragOverIndex === index && draggedIndex !== index}
                draggable={draggable}
                selectable={selectable}
                onRowClick={onRowClick}
                onToggleSelect={onToggleSelect}
                onDragStart={handleDragStart}
                onDragOver={handleDragOver}
                onDragEnd={handleDragEnd}
                onDrop={handleDrop}
                onDelete={onDelete}
              />
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
