"use client";

import React, { useState } from "react";
import AdminCard from "@/components/screens/Admin/components/AdminCard/AdminCard";
import FormField from "@/components/screens/Admin/components/FormField/FormField";
import PanelHeader from "@/components/screens/Admin/components/PanelHeader/PanelHeader";
import Button from "@/components/ui/Button/Button";
import TabContentEditor from "@/components/screens/Admin/sections/Trainings/components/TabContentEditor/TabContentEditor";
import ConfirmModal from "@/components/common/ConfirmModal/ConfirmModal";
import { TRAINING_CATEGORIES } from "@/constants/trainingsData";
import {
  EMPTY_TRAINING,
  TRAINING_FORM_FIELDS,
  TRAINING_STATUS_OPTIONS,
  slugify,
} from "@/constants/adminData";
import styles from "./TrainingForm.module.scss";

const OPTIONS = {
  categories: TRAINING_CATEGORIES.filter((c) => c !== "All Tracks"),
  statuses: TRAINING_STATUS_OPTIONS,
};

const toFormState = (record) => {
  const base = { ...EMPTY_TRAINING, ...(record || {}) };
  return { ...base, tabs: base.tabs.map((t, i) => ({ ...t, uid: `tab-${i}` })) };
};

export default function TrainingForm({
  initial,
  trainings,
  onCancel,
  onSave,
  onDelete,
}) {
  const isEdit = Boolean(initial);
  const [form, setForm] = useState(() => toFormState(initial));
  const [slugTouched, setSlugTouched] = useState(isEdit);
  const [errors, setErrors] = useState({});
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  const handleChange = (name, value) => {
    setForm((prev) => {
      const next = { ...prev, [name]: value };
      if (name === "title" && !slugTouched) next.slug = slugify(value);
      if (name === "slug") next.slug = slugify(value);
      return next;
    });
    if (name === "slug") setSlugTouched(true);
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const next = {};
    TRAINING_FORM_FIELDS.filter((f) => f.required).forEach((f) => {
      if (!String(form[f.name] ?? "").trim()) next[f.name] = `${f.label} is required.`;
    });
    const slugTaken = trainings.some(
      (t) => t.slug === form.slug && t.id !== initial?.id
    );
    if (form.slug && slugTaken) next.slug = "This slug is already in use.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    const tabs = form.tabs.map(({ uid, ...tab }) => ({
      ...tab,
      id: tab.id || slugify(tab.label) || uid,
    }));
    onSave({
      ...form,
      id: initial?.id || form.slug,
      featured: form.status === "Published",
      link: `/trainings-certifications/${form.slug}`,
      tabs,
    });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <button type="button" className={styles.back} onClick={onCancel}>
        <i className="fas fa-arrow-left" aria-hidden="true" /> Back to trainings
      </button>

      <PanelHeader
        title={isEdit ? `Edit: ${initial.title}` : "Create New Training"}
        description={
          isEdit
            ? "Update the training details and page content."
            : "Fill in the training details and page content."
        }
      >
        {isEdit && onDelete && (
          <Button
            variant="light"
            size="sm"
            type="button"
            onClick={() => setShowDeleteConfirm(true)}
            icon={<i className="fas fa-trash-alt" aria-hidden="true" />}
            iconPosition="left"
          >
            Delete
          </Button>
        )}
        <Button variant="light" size="sm" onClick={onCancel}>
          Cancel
        </Button>
        <Button variant="primary" size="sm" type="submit">
          {isEdit ? "Save Changes" : "Create Training"}
        </Button>
      </PanelHeader>

      {Object.values(errors).some(Boolean) && (
        <p className={styles.errorBanner} role="alert">
          Please fix the highlighted fields before saving.
        </p>
      )}

      <AdminCard title="Details" padded>
        <div className={styles.grid}>
          {TRAINING_FORM_FIELDS.map((field) => (
            <FormField
              key={field.name}
              field={field}
              value={form[field.name]}
              options={OPTIONS[field.optionsKey]}
              error={errors[field.name]}
              onChange={handleChange}
            />
          ))}
        </div>
      </AdminCard>

      <AdminCard title="Page Content" meta="Each tab appears on the course detail page" padded>
        <TabContentEditor
          tabs={form.tabs}
          onChange={(tabs) => setForm((prev) => ({ ...prev, tabs }))}
        />
      </AdminCard>

      <div className={styles.footer}>
        {isEdit && onDelete && (
          <Button
            variant="light"
            size="sm"
            type="button"
            onClick={() => setShowDeleteConfirm(true)}
            icon={<i className="fas fa-trash-alt" aria-hidden="true" />}
            iconPosition="left"
          >
            Delete Course
          </Button>
        )}
        <Button variant="light" size="sm" onClick={onCancel}>
          Cancel
        </Button>
        <Button variant="primary" size="sm" type="submit">
          {isEdit ? "Save Changes" : "Create Training"}
        </Button>
      </div>

      <ConfirmModal
        isOpen={showDeleteConfirm}
        title={`Delete "${initial?.title}"`}
        message="Are you sure you want to delete this training course? It will be permanently removed from the website and database."
        confirmText="Delete Course"
        onConfirm={() => {
          setShowDeleteConfirm(false);
          onDelete(initial);
        }}
        onCancel={() => setShowDeleteConfirm(false)}
      />
    </form>
  );
}
