import styles from './Reader.module.css'
import { useState } from "react";

export default function Reader({ items }) {
    
    const [selectedIdx, setSelectedIdx] = useState(0);

    const handlePrev = () => {
        setSelectedIdx(selectedIdx - 1 );
      };
    
      const handleNext = () => {
        setSelectedIdx(selectedIdx + 1);
      };

    const currentArticle = items[selectedIdx];

    return (
      <div className={styles.container}>
        {" "}
        <div className={styles.reader}>
          {" "}
          <header className={styles.header}>
            {" "}
            <div className={styles.topBar}>
              {" "}
              <span className={styles.label}>READER</span>{" "}
              <span className={styles.counter}>
                {" "}
                {selectedIdx + 1} / {items.length}{" "}
              </span>{" "}
            </div>{" "}
            <div className={styles.progressTrack}>
              {" "}
              <div className={styles.progressBar} />{" "}
            </div>{" "}
          </header>{" "}
          <article className={styles.article}>
            {" "}
            <span className={styles.topicNumber}> TEXT {selectedIdx + 1} </span>{" "}
            <h2 className={styles.title}> Topic </h2>{" "}
            <p className={styles.text}>
              {" "}
              This is the text content of the reader. You can replace this text
              with your own content. The reader provides a clean and comfortable
              space for reading.{" "}
            </p>{" "}
          </article>{" "}
          <nav className={styles.controls}>
            {" "}
            <button className={styles.button} onClick={handlePrev}>
              {" "}
              <span className={styles.arrow}>←</span> Previous{" "}
            </button>{" "}
            <div className={styles.dots}>
              {" "}
              <span className={`${styles.dot} ${styles.activeDot}`} />{" "}
              <span className={styles.dot} /> <span className={styles.dot} />{" "}
              <span className={styles.dot} /> <span className={styles.dot} />{" "}
              <span className={styles.dot} /> <span className={styles.dot} />{" "}
              <span className={styles.dot} /> <span className={styles.dot} />{" "}
              <span className={styles.dot} />{" "}
            </div>{" "}
            <button className={styles.button} onClick={handleNext}>
              {" "}
              Next <span className={styles.arrow}>→</span>{" "}
            </button>{" "}
          </nav>{" "}
        </div>{" "}
      </div>
    );
}