"use client";

import React, { useState, useEffect } from "react";
import { useApp } from "@/context/AppContext";
import { DPDPA_COURSES, CATALOG_COURSES } from "@/constants/trainingsData";
import ConsentBlock from "@/components/screens/Contact/sections/ContactForm/components/ConsentBlock/ConsentBlock";
import styles from "./TrainingEnquiryModal.module.scss";

const ALL_COURSE_TITLES = Array.from(
  new Set([
    ...DPDPA_COURSES.map((c) => c.title),
    ...CATALOG_COURSES.map((c) => c.title),
  ])
);

const TRAINING_MODES = [
  "Live Online (Instructor-Led)",
  "Corporate On-Site / In-House Batch",
  "Weekend Executive Batch",
  "Self-Paced + Exam Voucher",
];

const PARTICIPANT_TYPES = [
  "Individual Professional",
  "Corporate Team (2–10 Participants)",
  "Enterprise Batch (10+ Participants)",
];

export default function TrainingEnquiryModal() {
  const { trainingModal, closeTrainingModal } = useApp();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    organization: "",
    designation: "",
    course: ALL_COURSE_TITLES[0] || "",
    trainingMode: TRAINING_MODES[0],
    participantType: PARTICIPANT_TYPES[0],
    notes: "",
    dpdpaConsent: false,
    newsletter: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (trainingModal.isOpen) {
      document.body.style.overflow = "hidden";
      if (trainingModal.courseTitle) {
        setFormData((prev) => ({
          ...prev,
          course: trainingModal.courseTitle,
        }));
      }
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [trainingModal.isOpen, trainingModal.courseTitle]);

  if (!trainingModal.isOpen) return null;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.dpdpaConsent) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const handleClose = () => {
    setSubmitted(false);
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      organization: "",
      designation: "",
      course: ALL_COURSE_TITLES[0] || "",
      trainingMode: TRAINING_MODES[0],
      participantType: PARTICIPANT_TYPES[0],
      notes: "",
      dpdpaConsent: false,
      newsletter: false,
    });
    closeTrainingModal();
  };

  return (
    <div
      className={styles.overlay}
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="training-modal-title"
    >
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <div>
            <span className={styles.eyebrow}>
              TRAININGS &amp; CERTIFICATIONS
            </span>
            <h2 id="training-modal-title" className={styles.title}>
              {trainingModal.courseTitle
                ? `Enquire: ${trainingModal.courseTitle}`
                : "Training & Certification Enquiry"}
            </h2>
          </div>
          <button
            type="button"
            className={styles.closeBtn}
            onClick={handleClose}
            aria-label="Close training enquiry popup"
          >
            ✕
          </button>
        </div>

        <div className={styles.modalBody}>
          {submitted ? (
            <div className={styles.successBox}>
              <div className={styles.successIcon}>
                <i className="fas fa-check" />
              </div>
              <h3 className={styles.successTitle}>
                Training Registration Request Received
              </h3>
              <p className={styles.successText}>
                Thank you, <strong>{formData.fullName}</strong>. Our Training
                &amp; Certification coordinator will share the syllabus,
                upcoming batch schedule, and fee details for{" "}
                <strong>{formData.course}</strong> at{" "}
                <strong>{formData.email}</strong>.
              </p>
              <button
                type="button"
                className={styles.submitBtn}
                onClick={handleClose}
              >
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.field}>
                <label htmlFor="trn-course">
                  Training / Certification Program *
                </label>
                <select
                  id="trn-course"
                  name="course"
                  required
                  value={formData.course}
                  onChange={handleChange}
                >
                  {ALL_COURSE_TITLES.map((title) => (
                    <option key={title} value={title}>
                      {title}
                    </option>
                  ))}
                </select>
              </div>

              <div className={styles.row}>
                <div className={styles.field}>
                  <label htmlFor="trn-fullName">Full name *</label>
                  <input
                    id="trn-fullName"
                    name="fullName"
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Your Full Name"
                  />
                </div>
                <div className={styles.field}>
                  <label htmlFor="trn-email">Email address *</label>
                  <input
                    id="trn-email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@company.com"
                  />
                </div>
              </div>

              <div className={styles.row}>
                <div className={styles.field}>
                  <label htmlFor="trn-phone">Phone / WhatsApp number *</label>
                  <input
                    id="trn-phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                  />
                </div>
                <div className={styles.field}>
                  <label htmlFor="trn-designation">
                    Job Title / Designation *
                  </label>
                  <input
                    id="trn-designation"
                    name="designation"
                    type="text"
                    required
                    value={formData.designation}
                    onChange={handleChange}
                    placeholder="e.g. DPO, Security Analyst, IT Manager"
                  />
                </div>
              </div>

              <div className={styles.row}>
                <div className={styles.field}>
                  <label htmlFor="trn-organization">
                    Organization / Company (optional)
                  </label>
                  <input
                    id="trn-organization"
                    name="organization"
                    type="text"
                    value={formData.organization}
                    onChange={handleChange}
                    placeholder="Your Company Name"
                  />
                </div>
                <div className={styles.field}>
                  <label htmlFor="trn-participantType">Enrollment Type *</label>
                  <select
                    id="trn-participantType"
                    name="participantType"
                    required
                    value={formData.participantType}
                    onChange={handleChange}
                  >
                    {PARTICIPANT_TYPES.map((pt) => (
                      <option key={pt} value={pt}>
                        {pt}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className={styles.field}>
                <label htmlFor="trn-trainingMode">
                  Preferred Delivery Mode *
                </label>
                <select
                  id="trn-trainingMode"
                  name="trainingMode"
                  required
                  value={formData.trainingMode}
                  onChange={handleChange}
                >
                  {TRAINING_MODES.map((mode) => (
                    <option key={mode} value={mode}>
                      {mode}
                    </option>
                  ))}
                </select>
              </div>

              <div className={styles.field}>
                <label htmlFor="trn-notes">
                  Preferred Batch Dates or Questions (optional)
                </label>
                <textarea
                  id="trn-notes"
                  name="notes"
                  rows={2}
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="Let us know your preferred schedule, team size, or certification questions..."
                />
              </div>

              <ConsentBlock
                dpdpaConsent={formData.dpdpaConsent}
                newsletter={formData.newsletter}
                onChange={handleChange}
              />

              <div className={styles.actions}>
                <button
                  type="submit"
                  disabled={loading || !formData.dpdpaConsent}
                  className={styles.submitBtn}
                >
                  {loading ? "Submitting..." : "Request Syllabus & Batch Details"}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
