import { useState, useEffect } from 'react';
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

    const handleClick = (index) => {
        index > selectedIndex ? moveRight() : index < selectedIndex && moveLeft();
        setSelectedIndex(index);
    };

    return (
        <div className={styles.wrapper}>
            <div>
                <ul className={styles.cardWrap}>
                    <button
                        className={styles.arrowButton}
                        onClick={moveLeft}
                        style={{ display: selectedIndex === 0 ? 'none' : 'block' }}
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
                        className={styles.arrowButton}
                        onClick={moveRight}
                        style={{ display: selectedIndex === jobsData.length - 1 ? 'none' : 'block' }}
                    >
                        <IoIosArrowForward size={30} color="#fff" />
                    </button>
                </ul>
            </div>
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
        </div>
    );
};

export default WorksTimeline;
