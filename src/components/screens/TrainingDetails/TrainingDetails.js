import React from "react";
import PageHero from "@/components/common/PageHero/PageHero";
import TrainingTabs from "./sections/TrainingTabs/TrainingTabs";
import styles from "./TrainingDetails.module.scss";

export default function TrainingDetails({ course }) {
  return (
    <main className={styles.page}>
      <PageHero
        title={course.title}
        subtitle={course.badge || course.category}
        description={
          course.duration
            ? `Duration: ${course.duration} · Target Audience: ${course.audience}`
            : undefined
        }
        breadcrumb={course.title}
        bgImage={course.image || "/images/about/ptitle-bg1.jpg"}
      />
      <TrainingTabs course={course} />
    </main>
  );
}
