"use client";

import React, { useState } from "react";
import Container from "@/components/ui/Container/Container";
import SuccessState from "./components/SuccessState/SuccessState";
import ConsentBlock from "./components/ConsentBlock/ConsentBlock";
import styles from "./ContactForm.module.scss";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    interest: "Cybersecurity & VAPT",
    message: "",
    dpdpaConsent: false,
    newsletter: false,
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

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
    }, 800);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      company: "",
      interest: "Cybersecurity & VAPT",
      message: "",
      dpdpaConsent: false,
      newsletter: false,
    });
  };

  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        <div className={styles.formCard}>
          <div className={styles.header}>
            <span className={styles.subtitle}>Direct Consultation Request</span>
            <h2 className={styles.title}>Send Us a Project or Compliance Enquiry</h2>
            <p className={styles.description}>
              Our senior security architects respond within one business day under strict
              confidentiality.
            </p>
          </div>

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
                  <label htmlFor="fullName">Full Name *</label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="e.g. Ramesh Kumar"
                  />
                </div>
                <div className={styles.field}>
                  <label htmlFor="email">Work Email *</label>
                  <input
                    id="email"
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
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                  />
                </div>
                <div className={styles.field}>
                  <label htmlFor="company">Company / Organization *</label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your Company Name"
                  />
                </div>
              </div>

              <div className={styles.field}>
                <label htmlFor="interest">Area of Strategic Interest</label>
                <select
                  id="interest"
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                >
                  <option value="Cybersecurity & VAPT">Cyber Risk Assessment & VAPT</option>
                  <option value="DPDPA Compliance Architecture">
                    DPDPA 2023 Statutory Readiness & DPIA
                  </option>
                  <option value="Cloud Security Assessment">Cloud Security & Architecture</option>
                  <option value="Qualys VMDR Platform">Qualys Cloud VMDR Platform</option>
                  <option value="OpenText Cyber Resilience">OpenText Data Discovery & Governance</option>
                  <option value="SearchInform DLP">SearchInform DLP & User Monitoring</option>
                  <option value="Securely Share File Protection">Securely Share Data Protection</option>
                  <option value="Morphisec Moving Target Defense">Morphisec Zero-Day MTD Defense</option>
                  <option value="Corporate Training & Certification">
                    Corporate Training & Certifications
                  </option>
                </select>
              </div>

              <div className={styles.field}>
                <label htmlFor="message">Project Requirements / Scope *</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe your current infrastructure, compliance timelines, or specific security needs..."
                />
              </div>

              <ConsentBlock
                dpdpaConsent={formData.dpdpaConsent}
                newsletter={formData.newsletter}
                onChange={handleChange}
              />

              <button
                type="submit"
                disabled={loading || !formData.dpdpaConsent}
                className={styles.submitBtn}
              >
                {loading ? "Submitting Inquiry..." : "Submit Consultation Request"}
              </button>
            </form>
          )}
        </div>
      </Container>
    </section>
  );
}
