import React from "react";
import TrainingsHero from "./sections/TrainingsHero/TrainingsHero";
import CourseCatalog from "./sections/CourseCatalog/CourseCatalog";
import DeliveryMethodology from "./sections/DeliveryMethodology/DeliveryMethodology";
import styles from "./TrainingsCertifications.module.scss";

export default function TrainingsCertifications() {
  return (
    <main className={styles.page}>
      <TrainingsHero />
      <CourseCatalog />
      <DeliveryMethodology />
    </main>
  );
}
