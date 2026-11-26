import React from "react";
import Image from "next/image";
import Container from "@/components/ui/Container/Container";
import SectionHeader from "@/components/common/SectionHeader/SectionHeader";
import { HOW_WE_WORK } from "@/constants/servicesData";
import styles from "./HowWeWork.module.scss";

export default function HowWeWork() {
  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        <SectionHeader
          subtitle={HOW_WE_WORK.eyebrow}
          title={HOW_WE_WORK.title}
          description={HOW_WE_WORK.description}
          variant="light"
          alignment="center"
          className={styles.header}
        />

        <div className={styles.mosaicGrid} data-aos="fade-up">
          {HOW_WE_WORK.steps.map((step) => {
            const isPurple = step.colorVariant === "purple";
            const isReverse = Boolean(step.reverse);

            return (
              <div
                key={step.step}
                className={`${styles.compoundCard} ${
                  isReverse ? styles.reverse : ""
                }`}
              >
                {/* Image Half with large number overlay */}
                <div className={styles.imageHalf}>
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className={styles.bgImage}
                  />
                  <div className={styles.imageOverlay} />
                  <span className={styles.numberOverlay}>{step.step}</span>
                </div>

                {/* Text Content Half */}
                <div
                  className={`${styles.textHalf} ${
                    isPurple ? styles.purple : styles.dark
                  }`}
                >
                  <h3 className={styles.title}>{step.title}</h3>
                  <p className={styles.description}>{step.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
