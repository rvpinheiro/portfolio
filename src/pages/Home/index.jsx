import React from 'react';
import styles from './Home.module.css';
import HomeTitle from '../../components/HomeTitle/HomeTitle';
import Button from '../../components/Button/Button';
import SocialIcon from '../../components/SocialIcon/SocialIcon';
import socialData from '../../data/socialData';
import CodeBox from '../../components/CodeBox/CodeBox';

const Home = () => {
    return (
        <div className={styles.mainContent}>
            <div className={styles.homeContainer}>
                <HomeTitle />
                <CodeBox />
                <div className={styles.buttonsContainer}>
                    <Button
                        text="Check my work"
                        styleType="secondary"
                        size="medium"
                        onClick={() => window.location.href = "/gallery"}
                    />
                    <Button
                        text="Let's get in Touch!"
                        styleType="secondary"
                        size="medium"
                        onClick={() => window.location.href = "/contact"}
                    />
                </div>
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
        </div>
    );
};

export default Home;
