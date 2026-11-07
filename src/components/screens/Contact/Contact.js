import React from "react";
import ContactHero from "./sections/ContactHero/ContactHero";
import ContactGrid from "./sections/ContactGrid/ContactGrid";
import ContactForm from "./sections/ContactForm/ContactForm";
import GrievanceSection from "./sections/GrievanceSection/GrievanceSection";
import styles from "./Contact.module.scss";

export default function Contact() {
  return (
    <main className={styles.page}>
      <ContactHero />
      <ContactGrid />
      <ContactForm />
      <GrievanceSection />
    </main>
  );
}
