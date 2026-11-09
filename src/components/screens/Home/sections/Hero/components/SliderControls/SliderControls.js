import React from "react";
import styles from "./SliderControls.module.scss";

export default function SliderControls({
  slides,
  currentSlide,
  onSelectSlide,
  onPrev,
  onNext,
}) {
  return (
    <div className={styles.sliderControls}>
      <button
        type="button"
        onClick={onPrev}
        className={styles.arrowBtn}
        aria-label="Previous slide"
      >
        &#8592;
      </button>

      <div className={styles.indicators}>
        {slides.map((slide, idx) => (
          <button
            key={slide.id}
            type="button"
            onClick={() => onSelectSlide(idx)}
            className={`${styles.indicatorDot} ${
              idx === currentSlide ? styles.indicatorActive : ""
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          >
            <span className={styles.dotProgress} />
            <span className={styles.dotLabel}>
              {idx === 0
                ? "01. Information Security"
                : "02. Data Protection (DPDPA)"}
            </span>
          </button>
        ))}
      </div>

      <button
        type="button"
        onClick={onNext}
        className={styles.arrowBtn}
        aria-label="Next slide"
      >
        &#8594;
      </button>
    </div>
  );
}
