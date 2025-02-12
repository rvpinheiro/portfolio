import React from 'react';
import { GitHub, Linkedin, Mail, Download } from 'react-feather';
import styles from './SocialIcon.module.css';

const SocialIcon = ({ platform, link, hoverColor, size = 30 }) => {
    const icons = {
        github: GitHub,
        linkedin: Linkedin,
        mail: Mail,
        download: Download
    };

    const IconComponent = icons[platform];

    if (!IconComponent) return null;

    return (
        <a href={link} target="_blank" rel="noopener noreferrer"
            className={styles.iconContainer} aria-label={platform}>
            <div className={styles.iconBox} style={{ color: hoverColor }}>
                <IconComponent size={size} className={styles.icon} />
            </div>
        </a>
    );
};

export default SocialIcon;
