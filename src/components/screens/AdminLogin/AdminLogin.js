"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "./AdminLogin.module.scss";

export default function AdminLogin() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok || data.error) {
        throw new Error(data.error || "Authentication failed.");
      }

      // Check search params for return URL or redirect to /admin
      const urlParams = new URLSearchParams(window.location.search);
      const redirectTarget = urlParams.get("from") || "/admin";
      router.push(redirectTarget);
      router.refresh();
    } catch (err) {
      setError(err.message || "Invalid email or password.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className={styles.page}>
      <div className={styles.card}>
        <div className={styles.brand}>
          <Image
            src="/logo/logo.png"
            alt="RS Consulting"
            width={120}
            height={55}
            className={styles.logo}
            priority
          />
          <span className={styles.badge}>Admin</span>
        </div>

        <div className={styles.header}>
          <h1 className={styles.title}>Admin Portal</h1>
          <p className={styles.description}>
            Sign in to access inquiries, training registrations, and course management.
          </p>
        </div>

        {error && (
          <div className={styles.errorBanner} role="alert">
            <i className="fas fa-exclamation-circle" aria-hidden="true" />
            <span>{error}</span>
          </div>
        )}

        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          <div className={styles.field}>
            <label htmlFor="admin-email">Administrator Email</label>
            <div className={styles.inputWrapper}>
              <i className={`fas fa-envelope ${styles.fieldIcon}`} aria-hidden="true" />
              <input
                id="admin-email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@company.com"
              />
            </div>
          </div>

          <div className={styles.field}>
            <label htmlFor="admin-password">Password</label>
            <div className={`${styles.inputWrapper} ${styles.passwordWrapper}`}>
              <i className={`fas fa-lock ${styles.fieldIcon}`} aria-hidden="true" />
              <input
                id="admin-password"
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
              />
              <button
                type="button"
                className={styles.toggleBtn}
                onClick={() => setShowPassword((prev) => !prev)}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                <i
                  className={showPassword ? "fas fa-eye-slash" : "fas fa-eye"}
                  aria-hidden="true"
                />
              </button>
            </div>
          </div>

          <button
            type="submit"
            className={styles.submitBtn}
            disabled={loading}
          >
            {loading ? (
              <>
                <i className="fas fa-spinner fa-spin" aria-hidden="true" />
                <span>Signing In…</span>
              </>
            ) : (
              <>
                <i className="fas fa-sign-in-alt" aria-hidden="true" />
                <span>Sign In</span>
              </>
            )}
          </button>
        </form>

        <div className={styles.footer}>
          RS Consulting — Internal Administrative Console
        </div>
      </div>
    </main>
  );
}
