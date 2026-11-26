import React from "react";
import Image from "next/image";
import Container from "@/components/ui/Container/Container";
import SectionHeader from "@/components/common/SectionHeader/SectionHeader";
import ExpandOnView from "@/components/common/ExpandOnView/ExpandOnView";
import styles from "./WhyChooseUs.module.scss";

const WHY_CARDS = [
  {
    num: "01",
    heading: "Security-led, not paperwork-led",
    text: "We implement the technical controls that regulations call for, not just the documentation.",
    img: "/images/cyberguard/s2.jpg",
    direction: "right",
  },
  {
    num: "02",
    heading: "One partner, end to end",
    text: "Assessment, programme design, technology implementation and ongoing support.",
    img: "/images/cyberguard/s3.jpg",
    direction: "left",
  },
  {
    num: "03",
    heading: "Regulation-ready",
    text: "Our advisory work aligns your programme with Indian and international security and privacy requirements.",
    img: "/images/cyberguard/projects-img6-1000x1000.jpg",
    direction: "right",
  },
  {
    num: "04",
    heading: "Experienced practitioners",
    text: "Senior consultants with deep experience in banking, payments, fintech and other regulated sectors.",
    img: "/images/cyberguard/projects-img5-1000x1000.jpg",
    direction: "left",
  },
  {
    num: "05",
    heading: "Tailored engagements",
    text: "Every challenge is different, so every solution is built around your business.",
    img: "/images/cyberguard/projects-img4-1000x1000.jpg",
    direction: "right",
  },
];

export default function WhyChooseUs() {
  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        <SectionHeader
          subtitle="WHY RS CONSULTING"
          title="Security-Led, Not Paperwork-Led Cyber Defense"
          description="We implement the technical controls that regulations call for, not just the documentation."
          variant="dark"
          alignment="center"
        />

        <div className={styles.cardsRow}>
          {WHY_CARDS.map((card, idx) => (
            <div
              key={card.num}
              className={styles.featureCard}
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <div className={styles.cardContent}>
                <span className={styles.stepNum}>{card.num}</span>
                <h3 className={styles.cardHeading}>{card.heading}</h3>
                <p className={styles.cardText}>{card.text}</p>
              </div>
              <ExpandOnView
                direction={card.direction}
                duration={850}
                className={styles.cardImgBox}
              >
                <Image
                  src={card.img}
                  alt={card.heading}
                  width={260}
                  height={220}
                  className={styles.cardImg}
                />
              </ExpandOnView>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
