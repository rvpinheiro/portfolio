import React from 'react';
import styles from './Home.module.css';
import homeData from '../../data/homeData';

const Home = () => {
    return (
        <div className={styles.mainContent}>
            <div className={styles.homeContainer}>
                <h1>Hello</h1>
            </div>
        </div>
    );
};

export default Home;
