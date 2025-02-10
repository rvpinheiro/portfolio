import React from 'react'
import homeData from "../../data/homeData";
import styles from './HomeTitle.module.css'

const HomeTitle = () => {
    return (
        <div className={styles.titleContainer}>
            <h1 className={styles.name}>{homeData.bio.name}</h1>
            <h2 className={styles.role}>{homeData.bio.role}</h2>
        </div>
    );
};

export default HomeTitle