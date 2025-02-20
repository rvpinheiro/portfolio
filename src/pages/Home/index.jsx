import React from 'react';
import styles from './Home.module.css';
import HomeTitle from '../../components/HomeTitle/HomeTitle';
import SocialIcon from '../../components/SocialIcon/SocialIcon';
import socialData from '../../data/socialData';

const Home = () => {
    return (
        <div className={styles.mainContent}>
            <div className={styles.homeContainer}>
                <HomeTitle />
                <div className={styles.socialContainer}>
                    {socialData.socialLinks.map((social, index) => (
                        <SocialIcon
                            key={index}
                            platform={social.platform}
                            link={social.link}
                            hoverColor={social.hoverColor}
                        />
                    ))}
                </div>
            </div>
        </div >
    );
};

export default Home;
