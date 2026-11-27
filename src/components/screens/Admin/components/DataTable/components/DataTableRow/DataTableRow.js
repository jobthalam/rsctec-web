"use client";

import React from "react";
import StatusBadge from "@/components/screens/Admin/components/StatusBadge/StatusBadge";
import styles from "./DataTableRow.module.scss";

export default function DataTableRow({
  row,
  index,
  columns,
  actionLabel,
  isSelected,
  isDragging,
  isDragOver,
  draggable,
  selectable,
  onRowClick,
  onToggleSelect,
  onDragStart,
  onDragOver,
  onDragEnd,
  onDrop,
  onDelete,
}) {
  return (
    <tr
      className={`
        ${styles.row}
        ${isSelected ? styles.selectedRow : ""}
        ${isDragging ? styles.dragging : ""}
        ${isDragOver ? styles.dragOver : ""}
      `}
      onClick={() => onRowClick(row)}
      onDragOver={draggable ? (e) => onDragOver(e, index) : undefined}
      onDrop={draggable ? (e) => onDrop(e, index) : undefined}
    >
      {draggable && (
        <td
          className={styles.dragCell}
          onClick={(e) => e.stopPropagation()}
        >
          <span
            className={styles.dragHandle}
            draggable
            onDragStart={(e) => onDragStart(e, index)}
            onDragEnd={onDragEnd}
            title="Drag to reorder"
            aria-label="Drag to reorder"
          >
            <i className="fas fa-grip-vertical" aria-hidden="true" />
          </span>
        </td>
      )}
      {selectable && (
        <td
          className={styles.checkboxCell}
          onClick={(e) => e.stopPropagation()}
        >
          <input
            type="checkbox"
            aria-label={`Select row ${row.id}`}
            checked={isSelected}
            onChange={() => onToggleSelect && onToggleSelect(row.id)}
            className={styles.checkbox}
          />
        </td>
      )}
      {columns.map((col) => (
        <td key={col.key}>
          {col.type === "status" ? (
            <StatusBadge status={row[col.key]} />
          ) : (
            row[col.key]
          )}
        </td>
      ))}
      <td className={styles.actionCell}>
        <div className={styles.actionsGroup}>
          <button
            type="button"
            className={styles.viewBtn}
            onClick={(e) => {
              e.stopPropagation();
              onRowClick(row);
            }}
          >
            {actionLabel}
          </button>
          {onDelete && (
            <button
              type="button"
              className={styles.deleteBtn}
              title="Delete"
              aria-label={`Delete ${row.title || row.id}`}
              onClick={(e) => {
                e.stopPropagation();
                onDelete(row);
              }}
            >
              <i className="fas fa-trash-alt" aria-hidden="true" />
            </button>
          )}
        </div>
      </td>
    </tr>
  );
}
