import React, { useState } from 'react';
import styles from './About.module.css';
import WorksTimeline from '../../components/WorksTimeline/WorksTimeline';

const About = () => {
    return (
        <div className={styles.mainContent}>
            <div className={styles.aboutContainer}>
                <div className={styles.timelineContainer}>
                    <WorksTimeline />
                </div>
            </div>
        </div>
    );
};

export default About;
