import React from "react";
import TrainingsHero from "./sections/TrainingsHero/TrainingsHero";
import DpdpaCourses from "./sections/DpdpaCourses/DpdpaCourses";
import CourseCatalog from "./sections/CourseCatalog/CourseCatalog";
import DeliveryMethodology from "./sections/DeliveryMethodology/DeliveryMethodology";
import styles from "./TrainingsCertifications.module.scss";

export default function TrainingsCertifications({ courses }) {
  const publishedCourses = courses?.filter(
    (c) => c.status === "Published" || c.status === undefined
  );
  const list =
    publishedCourses && publishedCourses.length > 0
      ? publishedCourses
      : courses && courses.length > 0
        ? courses
        : undefined;

  return (
    <main className={styles.page}>
      <TrainingsHero />
      <DpdpaCourses courses={list} />
      <CourseCatalog courses={list} />
      <DeliveryMethodology />
    </main>
  );
}
