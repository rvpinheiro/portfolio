import React, { useState } from 'react';
import MainTitle from '../../components/MainTitle/MainTitle'; // Assumindo que MainTitle está na pasta de components
import Menu from '../../components/Menu/Menu'; // E o Menu também
import styles from './Home.module.css';

const Home = () => {
    // Estado para título e subtítulo
    const [title, setTitle] = useState('Title');
    const [subtitle, setSubtitle] = useState("Subtitle");

    const updateContent = (newTitle, newSubtitle) => {
        setTitle(newTitle);
        setSubtitle(newSubtitle);
    };

    return (
        <div className={styles.homeContainer}>
            <div className={styles.mainContent}>
                <MainTitle title={title} subtitle={subtitle} />
                <Menu
                    items={['section1', 'section2', 'section3']}
                    updateContent={updateContent}
                />
            </div>
        </div>
    );
};

export default Home;
