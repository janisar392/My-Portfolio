import React, { useEffect, useState } from 'react';
import styles from '../assets/CSS/ChangeText.module.css'

const ChangeText = () => {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
        const [previousWordIndex, setPreviousWordIndex] = useState(null);
      
        const words = ["\u00A0 Java \u00A0 Full \u00A0 Stack \u00A0 Developer", "\u00A0 Software \u00A0 Developer"];

      
        useEffect(() => {
          const interval = setInterval(() => {
            setPreviousWordIndex(currentWordIndex); 
            setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
          }, 2000); 
      
          return () => clearInterval(interval);
        }, [currentWordIndex, words.length]);
  return (
    <>
      {words.map((word, wordIndex) => (
                      <span
                        key={wordIndex}
                        className={`${styles.word} ${
                          wordIndex === currentWordIndex ? styles.active : ""
                        }`}
                      >
                        {word.split("").map((letter, letterIndex) => (
                          <span
                            key={letterIndex}
                            className={`${styles.letter} ${
                              wordIndex === currentWordIndex
                                ? styles.in
                                : wordIndex === previousWordIndex
                                ? styles.out
                                : styles.behind
                            }`}
                          >
                            {letter}
                          </span>
                        ))}
                      </span>
                    ))}
    </>
  )
}

export default ChangeText
