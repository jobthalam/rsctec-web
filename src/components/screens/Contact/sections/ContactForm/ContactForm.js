"use client";

import React, { useState } from "react";
import Container from "@/components/ui/Container/Container";
import ContactInfoCard from "./components/ContactInfoCard/ContactInfoCard";
import SuccessState from "./components/SuccessState/SuccessState";
import ConsentBlock from "./components/ConsentBlock/ConsentBlock";
import styles from "./ContactForm.module.scss";

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
  "DPDPA compliance",
  "Cybersecurity",
  "Cloud security",
  "Training",
  "Other",
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    industry: "",
    interest: "DPDPA compliance",
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
    }, 700);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      company: "",
      industry: "",
      interest: "DPDPA compliance",
      message: "",
      dpdpaConsent: false,
      newsletter: false,
    });
  };

  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        <div className={styles.header} data-aos="fade-up">
          <h2 className={styles.title}>Send Your Message</h2>
          <p className={styles.description}>
            Whether you have a question, a suggestion, or just want to say hello, this is the place
            to do it. Please fill out the form below with your details and message, and we&apos;ll get
            back to you as soon as possible.
          </p>
        </div>

        <div className={styles.grid}>
          <div className={styles.infoCol}>
            <ContactInfoCard />
          </div>

          <div className={styles.formCol} data-aos="fade-left">
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
                    <label htmlFor="fullName">Full name *</label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Your Full Name"
                    />
                  </div>

                  <div className={styles.field}>
                    <label htmlFor="email">Business email *</label>
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
                    <label htmlFor="phone">Phone (optional)</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                    />
                  </div>

                  <div className={styles.field}>
                    <label htmlFor="company">Company name *</label>
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

                <div className={styles.row}>
                  <div className={styles.field}>
                    <label htmlFor="industry">Industry *</label>
                    <select
                      id="industry"
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
                    <label htmlFor="interest">I&apos;m interested in *</label>
                    <select
                      id="interest"
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
                  <label htmlFor="message">Message (optional)</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
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

                <button
                  type="submit"
                  disabled={loading || !formData.dpdpaConsent}
                  className={styles.submitBtn}
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
