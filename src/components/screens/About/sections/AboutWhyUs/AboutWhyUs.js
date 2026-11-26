import React from "react";
import Image from "next/image";
import Container from "@/components/ui/Container/Container";
import SectionHeader from "@/components/common/SectionHeader/SectionHeader";
import { ABOUT_PAGE_DATA } from "@/constants/constants";
import styles from "./AboutWhyUs.module.scss";
import WhyChooseUs from "@/components/screens/Home/sections/WhyChooseUs/WhyChooseUs";

const VALUE_IMAGES = [
  {
    image: "/images/cyberguard/projects-img6-1000x1000.jpg",
    colorVariant: "dark",
    reverse: false,
  },
  {
    image: "/images/cyberguard/projects-img5-1000x1000.jpg",
    colorVariant: "purple",
    reverse: false,
  },
  {
    image: "/images/cyberguard/projects-img4-1000x1000.jpg",
    colorVariant: "purple",
    reverse: true,
  },
  {
    image: "/images/cyberguard/s2.jpg",
    colorVariant: "dark",
    reverse: true,
  },
];

export default function AboutWhyUs() {
  const { values } = ABOUT_PAGE_DATA;

  return (
    <>
      <WhyChooseUs />
      <section className={styles.section}>
        <Container className={styles.container}>
          {/* OUR VALUES */}
          <SectionHeader
            subtitle={values.eyebrow}
            title={values.title}
            variant="light"
            alignment="center"
            className={styles.header}
          />

          <div className={styles.mosaicGrid} data-aos="fade-up">
            {values.items.map((val, idx) => {
              const visual = VALUE_IMAGES[idx % VALUE_IMAGES.length];
              const isPurple = visual.colorVariant === "purple";
              const isReverse = Boolean(visual.reverse);
              const stepNum = String(idx + 1).padStart(2, "0");

              return (
                <div
                  key={val.title}
                  className={`${styles.compoundCard} ${
                    isReverse ? styles.reverse : ""
                  }`}
                >
                  {/* Image Half with large number overlay */}
                  <div className={styles.imageHalf}>
                    <Image
                      src={visual.image}
                      alt={val.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className={styles.bgImage}
                    />
                    <div className={styles.imageOverlay} />
                    <span className={styles.numberOverlay}>{stepNum}</span>
                  </div>

                  {/* Text Content Half */}
                  <div
                    className={`${styles.textHalf} ${
                      isPurple ? styles.purple : styles.dark
                    }`}
                  >
                    <h3 className={styles.title}>{val.title}</h3>
                    <p className={styles.description}>{val.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>
    </>
  );
}
