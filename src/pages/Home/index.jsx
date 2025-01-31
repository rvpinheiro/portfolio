import React from 'react';
import MainTitle from '../../components/MainTitle/MainTitle';
import styles from './Home.module.css';

const Home = () => {
    const title = "Once a new technology rolls over you, if you're not part of the steamroller, you're part of the road.";
    const author = "Stewart Brand";

    return (
        <div className={styles.homeContainer}>
            <div className={styles.mainContent}>
                <MainTitle title={title} author={author} />
            </div>
        </div>
    );
};

export default Home;
