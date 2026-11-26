"use client";

import React, { useState, useEffect } from "react";
import { useApp } from "@/context/AppContext";
import ConsentBlock from "@/components/screens/Contact/sections/ContactForm/components/ConsentBlock/ConsentBlock";
import SuccessState from "@/components/screens/Contact/sections/ContactForm/components/SuccessState/SuccessState";
import styles from "./EnquiryModal.module.scss";

const INDUSTRY_OPTIONS = [
  "BFSI, Banking & Fintech",
  "Healthcare, Pharma & Life Sciences",
  "Technology, SaaS & E-Commerce",
  "Manufacturing, Automotive & Logistics",
  "Telecommunications & Media",
  "Professional & Legal Services",
  "Government & Public Sector",
  "Other",
];

const INTEREST_OPTIONS = [
  "Advisory & Technical Services",
  "DPDPA compliance",
  "ISO/IEC 27001 · 27701 · 42001",
  "GDPR & UAE Privacy Regulations",
  "Technology Solutions (Qualys, OpenText, Securely Share, SearchInform)",
  "Cybersecurity & VAPT",
  "Training & Certifications",
  "Other",
];

export default function EnquiryModal() {
  const { enquiryModal, openEnquiryModal, closeEnquiryModal } = useApp();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    industry: "",
    interest: "Advisory & Technical Services",
    message: "",
    dpdpaConsent: false,
    newsletter: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Global click interceptor for any CTA button/link pointing to /contact (except main nav links)
  useEffect(() => {
    const handleGlobalCtaClick = (e) => {
      const anchor = e.target.closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href) return;

      const isContactCta =
        href === "/contact" ||
        (href.startsWith("/contact") && href !== "/contact#grievance");

      if (!isContactCta) return;

      // Let Main Menu ("Contact") and Footer navigation links navigate normally to /contact page
      const isNavMenuLink =
        anchor.closest("nav") || anchor.closest("footer");
      if (isNavMenuLink) return;

      e.preventDefault();
      e.stopPropagation();
      const ctaText = anchor.textContent ? anchor.textContent.trim() : "";
      openEnquiryModal(ctaText);
    };

    document.addEventListener("click", handleGlobalCtaClick, true);
    return () =>
      document.removeEventListener("click", handleGlobalCtaClick, true);
  }, [openEnquiryModal]);

  useEffect(() => {
    if (enquiryModal.isOpen) {
      document.body.style.overflow = "hidden";
      if (enquiryModal.subject) {
        setFormData((prev) => ({
          ...prev,
          message: prev.message || `Enquiry regarding: ${enquiryModal.subject}`,
        }));
      }
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [enquiryModal.isOpen, enquiryModal.subject]);

  if (!enquiryModal.isOpen) return null;

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

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      company: "",
      industry: "",
      interest: "Advisory & Technical Services",
      message: "",
      dpdpaConsent: false,
      newsletter: false,
    });
    closeEnquiryModal();
  };

  return (
    <div
      className={styles.overlay}
      onClick={closeEnquiryModal}
      role="dialog"
      aria-modal="true"
      aria-labelledby="enquiry-modal-title"
    >
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <div>
            <span className={styles.eyebrow}>RS CONSULTING</span>
            <h2 id="enquiry-modal-title" className={styles.title}>
              {enquiryModal.subject || "Book a Free Consultation"}
            </h2>
          </div>
          <button
            type="button"
            className={styles.closeBtn}
            onClick={closeEnquiryModal}
            aria-label="Close enquiry popup"
          >
            ✕
          </button>
        </div>

        <div className={styles.modalBody}>
          {submitted ? (
            <SuccessState
              fullName={formData.fullName}
              interest={formData.interest}
              email={formData.email}
              onReset={handleReset}
            />
          ) : (
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.row}>
                <div className={styles.field}>
                  <label htmlFor="modal-fullName">Full name *</label>
                  <input
                    id="modal-fullName"
                    name="fullName"
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Your Full Name"
                  />
                </div>
                <div className={styles.field}>
                  <label htmlFor="modal-email">Business email *</label>
                  <input
                    id="modal-email"
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
                  <label htmlFor="modal-phone">Phone (optional)</label>
                  <input
                    id="modal-phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                  />
                </div>
                <div className={styles.field}>
                  <label htmlFor="modal-company">Company name *</label>
                  <input
                    id="modal-company"
                    name="company"
                    type="text"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your Company Name"
                  />
                </div>
              </div>

              <div className={styles.row}>
                <div className={styles.field}>
                  <label htmlFor="modal-industry">Industry *</label>
                  <select
                    id="modal-industry"
                    name="industry"
                    required
                    value={formData.industry}
                    onChange={handleChange}
                  >
                    <option value="" disabled>
                      Select your industry
                    </option>
                    {INDUSTRY_OPTIONS.map((ind) => (
                      <option key={ind} value={ind}>
                        {ind}
                      </option>
                    ))}
                  </select>
                </div>
                <div className={styles.field}>
                  <label htmlFor="modal-interest">I&apos;m interested in *</label>
                  <select
                    id="modal-interest"
                    name="interest"
                    required
                    value={formData.interest}
                    onChange={handleChange}
                  >
                    {INTEREST_OPTIONS.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className={styles.field}>
                <label htmlFor="modal-message">Message (optional)</label>
                <textarea
                  id="modal-message"
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe your inquiry, compliance timelines, or security scope..."
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
                  {loading ? "Sending..." : "Submit Enquiry"}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
