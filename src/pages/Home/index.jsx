import React, { useState } from 'react';
import MainTitle from '../../components/MainTitle/MainTitle';
import Menu from '../../components/Menu/Menu';
import Button from '../../components/Button/Button'
import styles from './Home.module.css';

const Home = () => {
    const [title, setTitle] = useState('Title');
    const [subtitle, setSubtitle] = useState("Subtitle");
    const [buttonLink, setButtonLink] = useState('/about');

    const updateContent = (newTitle, newSubtitle, newButtonLink) => {
        setTitle(newTitle);
        setSubtitle(newSubtitle);
        setButtonLink(newButtonLink);
    };

    return (
        <div className={styles.homeContainer}>
            <div className={styles.mainContent}>
                <MainTitle title={title} subtitle={subtitle} />
                <Button label="More" to={buttonLink} />
                <Menu
                    items={['section1', 'section2', 'section3']}
                    updateContent={updateContent}
                />
            </div>
        </div>
    );
};

export default Home;
