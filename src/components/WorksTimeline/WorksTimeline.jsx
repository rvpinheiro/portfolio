import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import styles from './WorksTimeline.module.css';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import jobsData from '../../data/jobsData';

const CARDS_NUMBER = ["card1", "card2", "card3"];
const CARD_OFFSET = 10;
const SCALE_FACTOR = 0.06;

const WorksTimeline = () => {
    const [cards, setCards] = useState(CARDS_NUMBER);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const touchStartX = useRef(0);
    const touchEndX = useRef(0);

    const moveLeft = () => {
        setCards((prevCards) => {
            const newCards = [...prevCards];
            newCards.unshift(newCards.pop());
            return newCards;
        });
        setSelectedIndex((prevIndex) => (prevIndex - 1 + jobsData.length) % jobsData.length);
    };

    const moveRight = () => {
        setCards((prevCards) => {
            const newCards = [...prevCards];
            newCards.push(newCards.shift());
            return newCards;
        });
        setSelectedIndex((prevIndex) => (prevIndex + 1) % jobsData.length);
    };

    const handleTouchStart = (e) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchMove = (e) => {
        touchEndX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = () => {
        const deltaX = touchStartX.current - touchEndX.current;

        if (Math.abs(deltaX) > 50) {
            if (deltaX > 0) {
                moveRight();
            } else {
                moveLeft();
            }
        }
    };

    const handleClick = (index) => {
        index > selectedIndex ? moveRight() : index < selectedIndex && moveLeft();
        setSelectedIndex(index);
    };

    return (
        <div className={styles.wrapper}>
            <ul
                className={styles.cardWrap}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            >
                <button
                    className={`${styles.arrowButton} ${selectedIndex === 0 ? styles.hidden : ''}`}
                    onClick={moveLeft}
                >
                    <IoIosArrowBack size={30} color="#fff" />
                </button>
                {cards.map((cardClass, cardIndex) => (
                    <motion.li
                        key={cardClass}
                        className={`${styles.card} ${styles[cardClass]} ${selectedIndex === cardIndex ? styles.selected : ''}`}
                        animate={{
                            top: cardIndex * -CARD_OFFSET,
                            scale: 1 - cardIndex * SCALE_FACTOR,
                            zIndex: cards.length - cardIndex,
                        }}
                    >
                        <div className={styles.cardContent}>
                            <h2 className={styles.cardContentTitle}>{jobsData[(selectedIndex + cardIndex) % jobsData.length].role}</h2>
                            <p>{jobsData[(selectedIndex + cardIndex) % jobsData.length].description}</p>
                        </div>
                    </motion.li>
                ))}
                <button
                    className={`${styles.arrowButton} ${selectedIndex === jobsData.length - 1 ? styles.hidden : ''}`}
                    onClick={moveRight}
                >
                    <IoIosArrowForward size={30} color="#fff" />
                </button>
            </ul>

            {/* Timeline for desktop */}
            <div className={styles.timeline}>
                <div className={styles.timelineLine}></div>
                {jobsData.map((item, index) => (
                    <div
                        key={index}
                        className={`${styles.timelinePoint} ${selectedIndex === index ? styles.active : ''}`}
                        onClick={() => handleClick(index)}
                        data-title={item.title}
                    >
                        <span className={styles.date}>{item.date}</span>
                        <div className={styles.popup}>
                            <div className={styles.arrowUp}></div>
                            <span>{item.title}</span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Timeline for mobile */}
            <div className={styles.timelineMobileArrows}>
                <button className={styles.arrowMobileLeft} onClick={moveLeft}>
                    <IoIosArrowBack size={30} color="#fff" />
                </button>
                <button className={styles.arrowMobileRight} onClick={moveRight}>
                    <IoIosArrowForward size={30} color="#fff" />
                </button>
            </div>
            <div className={styles.timelineMobile}>
                <div className={styles.timelineMobileLine}></div>
                <div className={styles.timelineMobilePoints}>
                    {jobsData.map((item, index) => (
                        <div
                            key={index}
                            className={`${styles.timelinePointMobile} ${selectedIndex === index ? styles.active : ''}`}
                            onClick={() => handleClick(index)}
                            data-title={item.title}
                        >
                            <span className={styles.dateMobile}>{item.date}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WorksTimeline;
