import React from "react";
import Image from "next/image";
import Container from "@/components/ui/Container/Container";
import SectionHeader from "@/components/common/SectionHeader/SectionHeader";
import ExpandOnView from "@/components/common/ExpandOnView/ExpandOnView";
import styles from "./SolutionsArchitecture.module.scss";

export default function SolutionsArchitecture() {
  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        <SectionHeader
          subtitle="ENTERPRISE ARCHITECTURE"
          title="Integrated Cybersecurity & Compliance Framework"
          description="A multi-layered defense architecture connecting management, identity governance, endpoint security, and application safeguards."
          variant="light"
          alignment="center"
        />

        <div className={styles.diagramWrapper}>
          <ExpandOnView direction="bottom" duration={850} className={styles.diagramCard}>
            <Image
              src="/images/solutions/web-02-02.png"
              alt="RS Consulting Multi-Layered Security Architecture"
              width={1060}
              height={520}
              className={styles.diagramImg}
              priority
            />
          </ExpandOnView>
        </div>
      </Container>
    </section>
  );
}
