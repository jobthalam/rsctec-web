import React from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container/Container";
import SectionHeader from "@/components/common/SectionHeader/SectionHeader";
import styles from "./AboutTeam.module.scss";
import { ABOUT_TEAM } from "@/constants/constants";

export default function AboutTeam() {
  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        <SectionHeader
          subtitle="OUR TEAM"
          title="Complete Cyber Defense Against Modern Attacks"
          description="Led by certified practitioners with over four decades of collective information security leadership and battle-tested industry expertise."
          variant="light"
          alignment="center"
        />

        <div className={styles.grid}>
          {ABOUT_TEAM.map((member, idx) => (
            <div
              key={member.name}
              className={styles.card}
              data-aos="fade-up"
              data-aos-delay={idx * 120}
            >
              <div className={styles.imageWrapper}>
                <Image
                  src={member.img}
                  alt={member.name}
                  width={340}
                  height={380}
                  className={styles.photo}
                />
              </div>

              <div className={styles.cardBody}>
                <h3 className={styles.name}>{member.name}</h3>
                <span className={styles.role}>{member.role}</span>
                <span className={styles.certBadge}>{member.cert}</span>

                <div className={styles.socialRow}>
                  <Link
                    href="/contact"
                    className={styles.socialIcon}
                    aria-label={`Connect with ${member.name}`}
                  >
                    <i className="fab fa-linkedin-in" />
                  </Link>
                  <Link
                    href="/contact"
                    className={styles.socialIcon}
                    aria-label={`Email ${member.name}`}
                  >
                    <i className="fas fa-envelope" />
                  </Link>
                  <Link
                    href="/contact"
                    className={styles.socialIcon}
                    aria-label={`Infosec profile of ${member.name}`}
                  >
                    <i className="fas fa-shield-alt" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
