import React from "react";
import Image from "next/image";
import styles from "./MarqueeRow.module.scss";

export default function MarqueeRow({ items, reverse = false }) {
  const tripleItems = [...items, ...items, ...items];

  return (
    <div className={styles.marqueeContainer}>
      <div className={`${styles.track} ${reverse ? styles.trackReverse : ""}`}>
        {tripleItems.map((item, idx) => (
          <div
            key={`${item.name}-${idx}`}
            className={styles.logoCard}
            title={item.name}
          >
            <Image
              src={item.src}
              alt={`${item.name} logo`}
              width={item.width}
              height={item.height}
              className={styles.logoImg}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
