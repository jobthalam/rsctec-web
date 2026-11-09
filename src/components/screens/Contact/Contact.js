import React from "react";
import ContactHero from "./sections/ContactHero/ContactHero";
import ContactForm from "./sections/ContactForm/ContactForm";
import GrievanceSection from "./sections/GrievanceSection/GrievanceSection";
import styles from "./Contact.module.scss";

export default function Contact() {
  return (
    <main className={styles.page}>
      <ContactHero />
      <ContactForm />
      <GrievanceSection />
    </main>
  );
}
