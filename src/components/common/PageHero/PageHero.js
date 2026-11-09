import React from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container/Container";
import styles from "./PageHero.module.scss";

export default function PageHero({
  title = "",
  breadcrumb,
  quote,
  subtitle,
  description,
  bgImage = "/images/about/ptitle-bg1.jpg",
  className = "",
  children,
}) {
  let breadcrumbItems = [];
  if (Array.isArray(breadcrumb)) {
    breadcrumbItems = breadcrumb;
  } else if (typeof breadcrumb === "string") {
    breadcrumbItems = [
      { label: "Home", href: "/" },
      { label: breadcrumb },
    ];
  } else if (breadcrumb !== false && title) {
    breadcrumbItems = [
      { label: "Home", href: "/" },
      { label: typeof title === "string" ? title : "" },
    ];
  }

  return (
    <section className={`${styles.heroSection} ${className}`.trim()}>
      {bgImage && (
        <div className={styles.bgWrapper}>
          <Image
            src={bgImage}
            alt=""
            fill
            priority
            className={styles.bgImage}
          />
        </div>
      )}
      <div className={styles.overlay} />
      <Container className={styles.container}>
        <div className={styles.contentRow}>
          <div className={styles.leftCol} data-aos="fade-right">
            {subtitle && <span className={styles.subtitle}>{subtitle}</span>}
            {title && <h1 className={styles.pageTitle}>{title}</h1>}
            {description && <p className={styles.description}>{description}</p>}
            {breadcrumbItems.length > 0 && (
              <nav aria-label="Breadcrumb" className={styles.breadcrumb}>
                {breadcrumbItems.map((item, idx) => {
                  const isLast = idx === breadcrumbItems.length - 1;
                  return (
                    <React.Fragment key={idx}>
                      {idx > 0 && <span className={styles.separator}>&gt;</span>}
                      {item.href && !isLast ? (
                        <Link href={item.href} className={styles.breadcrumbLink}>
                          {item.label}
                        </Link>
                      ) : (
                        <span className={styles.current}>{item.label}</span>
                      )}
                    </React.Fragment>
                  );
                })}
              </nav>
            )}
          </div>
          {(quote || children) && (
            <div className={styles.rightCol} data-aos="fade-left" data-aos-delay="150">
              {quote && (
                <blockquote className={styles.quote}>
                  {typeof quote === "string" &&
                  !quote.startsWith("‘") &&
                  !quote.startsWith("'") &&
                  !quote.startsWith("“")
                    ? `‘${quote}’`
                    : quote}
                </blockquote>
              )}
              {children}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
