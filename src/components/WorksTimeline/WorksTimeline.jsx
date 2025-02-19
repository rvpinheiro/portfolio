import { useState } from 'react';
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
            newCards.unshift(newCards.pop()); // Rotaciona os cartões para a esquerda
            return newCards;
        });
        setSelectedIndex((prevIndex) => (prevIndex - 1 + jobsData.length) % jobsData.length); // Atualiza o selectedIndex para 1 em 1
    };

    const moveRight = () => {
        setCards((prevCards) => {
            const newCards = [...prevCards];
            newCards.push(newCards.shift()); // Rotaciona os cartões para a direita
            return newCards;
        });
        setSelectedIndex((prevIndex) => (prevIndex + 1) % jobsData.length); // Atualiza o selectedIndex para 1 em 1
    };

    const handleClick = (index) => {
        setSelectedIndex(index); // Atualiza o selectedIndex ao clicar na linha do tempo
    };

    return (
        <div className={styles.wrapper}>
            <div>
                <ul className={styles.cardWrap}>
                    <button className={styles.arrowButton} onClick={moveLeft}>
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
                    <button className={styles.arrowButton} onClick={moveRight}>
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
                    >
                        <span className={styles.date}>{item.date}</span>
                        {selectedIndex === index && (
                            <div className={styles.popup}>
                                <div className={styles.arrowUp}></div>
                                <span>{item.title}</span>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};


export default WorksTimeline;
