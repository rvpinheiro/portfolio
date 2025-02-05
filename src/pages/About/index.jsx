import React, { useState } from 'react';
import styles from './About.module.css';
import Button from '../../components/Button/Button';
import WorksTimeline from '../../components/WorksTimeline/WorksTimeline';
import Skills from '../../components/Skills/Skills';

const About = () => {
    const [showWork, setShowWork] = useState(true);
    const showWorkContent = () => setShowWork(true);
    const showSkillsContent = () => setShowWork(false);

    return (
        <div className={styles.mainContent}>
            <div className={styles.aboutContainer}>
                <div className={styles.timelineContainer}>
                    {showWork ? <WorksTimeline /> : <Skills />}
                </div>
                <div className={styles.buttonsContainer}>
                    <Button
                        text="Work"
                        styleType="secondary"
                        size="medium"
                        onClick={showWorkContent}
                    />
                    <Button
                        text="Skills"
                        styleType="secondary"
                        size="medium"
                        onClick={showSkillsContent}
                    />
                </div>
            </div>
        </div>
    );
};

export default About;
