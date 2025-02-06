import React, { useState } from 'react';
import styles from './WorksTimeline.module.css';
import jobsData from '../../data/jobsData';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const WorksTimeline = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const handleClick = (index) => {
        setSelectedIndex(index);
    };

    return (
        <div className={styles.timelineContainer}>
            <div className={styles.arrowContainer}>
                <div
                    className={`${styles.arrow} ${styles.left} ${selectedIndex === 0 ? styles.hidden : ''}`}
                    onClick={() => selectedIndex > 0 && setSelectedIndex(selectedIndex - 1)}
                >
                    <IoIosArrowBack size={30} color="#fff" />
                </div>
                <div
                    className={`${styles.arrow} ${styles.right} ${selectedIndex === jobsData.length - 1 ? styles.hidden : ''}`}
                    onClick={() => selectedIndex < jobsData.length - 1 && setSelectedIndex(selectedIndex + 1)}
                >
                    <IoIosArrowForward size={30} color="#fff" />
                </div>
            </div>
            <div className={styles.outerBox}>
                <div className={styles.content}>
                    <div className={styles.contentText}>
                        <h2>{jobsData[selectedIndex].title}</h2>
                        <p>{jobsData[selectedIndex].description}</p>
                    </div>
                </div>
            </div>
            <div className={styles.timeline}>
                <div className={styles.timelineLine}></div>
                {jobsData.map((item, index) => (
                    <div
                        key={index}
                        className={`${styles.timelinePoint} ${selectedIndex === index ? styles.active : ''}`}
                        onClick={() => handleClick(index)}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <span className={styles.date}>{item.date}</span>
                        {hoveredIndex === index && (
                            <div className={styles.popup}>
                                <div className={styles.arrowUp}></div>
                                <span>{jobsData[index].title}</span>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WorksTimeline;
