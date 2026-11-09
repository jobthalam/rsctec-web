import React from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container/Container";
import SectionHeader from "@/components/common/SectionHeader/SectionHeader";
import { DPDPA_SERVICES_LIST } from "@/constants/dpdpaData";
import styles from "./DpdpaServicesGrid.module.scss";
import Button from "@/components/ui/Button/Button";

export default function DpdpaServicesGrid({ isHome }) {
  const DPDPA_SERVICES_LIST_MAP = isHome
    ? DPDPA_SERVICES_LIST.slice(0, 3)
    : DPDPA_SERVICES_LIST;

  return (
    <section id="services" className={styles.section}>
      <Container className={styles.container}>
        <SectionHeader
          subtitle="OUR DPDPA SERVICES"
          title="Comprehensive Compliance & Technical Security Offerings"
          description="From initial data discovery and gap audits to enterprise safeguard engineering and ongoing DPO governance."
          variant="dark"
          alignment="center"
        />

        <div className={styles.grid}>
          {DPDPA_SERVICES_LIST_MAP.map((srv, idx) => (
            <div
              key={srv.title}
              className={styles.card}
              data-aos="fade-up"
              data-aos-delay={(idx % 3) * 100}
            >
              <div className={styles.bgIconOverlay} aria-hidden="true">
                <Image
                  src={srv.bgIcon}
                  alt=""
                  width={210}
                  height={210}
                  className={styles.bgIconImg}
                />
              </div>

              <div className={styles.iconBox}>
                <Image
                  src={srv.icon}
                  alt={srv.title}
                  width={38}
                  height={38}
                  className={styles.iconImg}
                />
              </div>

              <h3 className={styles.cardTitle}>{srv.title}</h3>
              <p className={styles.cardDesc}>{srv.deliverable}</p>
              <Link
                href={srv.link || "/contact"}
                className={styles.learnMoreBtn}
              >
                Learn More
              </Link>
            </div>
          ))}
        </div>

        {isHome && (
          <div className={styles.btn}>
            <Button href={"/services"}>Explore Our DPDPA Services</Button>
          </div>
        )}
      </Container>
    </section>
  );
}
