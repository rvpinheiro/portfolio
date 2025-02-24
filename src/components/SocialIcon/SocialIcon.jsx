import React from 'react';
import { GitHub, Linkedin, Download } from 'react-feather';
import { FaWhatsapp } from 'react-icons/fa';
import socialData from '../../data/socialData';
import styles from './SocialIcon.module.css';

const SocialIcon = ({ platforms = [], size = 30 }) => {
    const icons = {
        github: GitHub,
        linkedin: Linkedin,
        whatsapp: FaWhatsapp,
        download: Download
    };

    const platformsToShow = platforms.length > 0 ? platforms : Object.keys(icons);

    return (
        <div className={styles.socialContainer}>
            {platformsToShow.map((platform, index) => {

                const social = socialData.socialLinks.find(social => social.platform === platform);
                if (!social) return null;

                const IconComponent = icons[platform];
                if (!IconComponent) return null;

                return (
                    <a
                        key={index}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.iconContainer}
                        aria-label={platform}
                    >
                        <div className={styles.iconBox} style={{ color: social.hoverColor }}>
                            <IconComponent size={size} className={styles.icon} />
                        </div>
                    </a>
                );
            })}
        </div>
    );
};

export default SocialIcon;
