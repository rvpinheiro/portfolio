import React from 'react';
import styles from './HomeTitle.module.css';
import homeData from '../../data/homeData';

const HomeTitle = () => {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.nameContainer}>
                <p className={styles.greeting}>{homeData.bio.greeting}</p>
                <h1 className={styles.subtitleOne}>{homeData.bio.subtitleOne}</h1>
                <h1 className={styles.subtitleTwo}>{homeData.bio.subtitleTwo}</h1>
            </div>
        </div>
    );
};

export default HomeTitle;
