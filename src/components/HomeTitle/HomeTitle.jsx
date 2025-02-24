import React from 'react'
import homeData from "../../data/homeData";
import styles from './HomeTitle.module.css'

const HomeTitle = () => {
    return (
        <div className={styles.titleContainer}>
            <p className={styles.name}>{homeData.bio.greeting}</p>
            <p className={styles.name}>
                I'm <span className={styles.highlight}>{homeData.bio.name.split(" ")[1]}</span>
            </p>
            <p className={styles.role}>{homeData.bio.role}</p>
        </div>
    );
};

export default HomeTitle