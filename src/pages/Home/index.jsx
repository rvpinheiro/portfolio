import React, { useEffect, useState } from "react";
import HomeTitle from "../../components/HomeTitle/HomeTitle";
import Button from "../../components/Button/Button";
import SocialIcon from '../../components/SocialIcon/SocialIcon';
import styles from './Home.module.css';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import particlesOptions from "../../particles.json";
import ProfilePicture from "../../components/ProfilePicture/ProfilePicture";

const Home = ({ setActivePage }) => {

    const [init, setInit] = useState(false);

    useEffect(() => {
        if (init) {
            return;
        }

        initParticlesEngine(async (engine) => {
            await loadFull(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    return (
        <div className={styles.homeContainer}>
            {init && <Particles options={particlesOptions} />}
            <div className={styles.contentContainer}>
                <ProfilePicture />
                <div className={styles.textContainer}>
                    <HomeTitle />
                    <Button text="Contact" styleType="primary" size="medium" onClick={() => setActivePage('contact')} />
                </div>
                <div className={styles.socialContainer}>
                    <SocialIcon size={30} />
                </div>
            </div>
        </div>
    );
}

export default Home;
