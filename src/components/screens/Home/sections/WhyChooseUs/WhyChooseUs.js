import React from "react";
import Image from "next/image";
import Container from "@/components/ui/Container/Container";
import SectionHeader from "@/components/common/SectionHeader/SectionHeader";
import ExpandOnView from "@/components/common/ExpandOnView/ExpandOnView";
import styles from "./WhyChooseUs.module.scss";

export default function WhyChooseUs() {
  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        <SectionHeader
          subtitle="Why RS Consulting"
          title="Security-Led, Not Paperwork-Led Cyber Defense"
          description="We implement the practical technical controls required to satisfy the DPDP Act and protect modern enterprise networks, rather than stopping at checklists."
          variant="dark"
          alignment="center"
        />

        <div className={styles.cardsRow}>
          {/* Card 01 */}
          <div className={styles.featureCard} data-aos="fade-up">
            <div className={styles.cardContent}>
              <span className={styles.stepNum}>01</span>
              <h3 className={styles.cardHeading}>Engineering-Led Safeguards</h3>
              <p className={styles.cardText}>
                From vulnerability mitigation to encrypted file sharing and endpoint MTD, we implement
                the actual controls the law calls &ldquo;reasonable security safeguards&rdquo;.
              </p>
            </div>
            <ExpandOnView direction="right" duration={850} className={styles.cardImgBox}>
              <Image
                src="/images/cyberguard/s2.jpg"
                alt="Engineering-Led Safeguards"
                width={260}
                height={220}
                className={styles.cardImg}
              />
            </ExpandOnView>
          </div>

          {/* Card 02 */}
          <div className={styles.featureCard} data-aos="fade-up" data-aos-delay="150">
            <div className={styles.cardContent}>
              <span className={styles.stepNum}>02</span>
              <h3 className={styles.cardHeading}>4+ Decades Collective Leadership</h3>
              <p className={styles.cardText}>
                Specialists in information security and cyber risk with verified experience across
                banking, payments, healthcare, and high-compliance enterprise sectors.
              </p>
            </div>
            <ExpandOnView direction="left" duration={850} className={styles.cardImgBox}>
              <Image
                src="/images/cyberguard/s3.jpg"
                alt="Zero Trust Architecture"
                width={260}
                height={220}
                className={styles.cardImg}
              />
            </ExpandOnView>
          </div>
        </div>
      </Container>
    </section>
  );
}
