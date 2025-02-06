import React from 'react';
import { GitHub, Linkedin, Mail, Download } from 'react-feather';
import styles from './SocialIcon.module.css';

const SocialIcon = ({ platform, link, hoverColor, size }) => {
    let IconComponent;

    switch (platform) {
        case 'github':
            IconComponent = GitHub;
            break;
        case 'linkedin':
            IconComponent = Linkedin;
            break;
        case 'mail':
            IconComponent = Mail;
            break;
        case 'download':
            IconComponent = Download;
            break;
        default:
            return null;
    }

    return (
        <a href={link} target="_blank" rel="noopener noreferrer" className={styles.iconContainer}>
            <div className={styles.iconBox} style={{ color: hoverColor }}>
                <IconComponent size={size || 30} className={styles.icon} />
            </div>
        </a>
    );
};

export default SocialIcon;
