import React from 'react';
import styles from './ContactAddress.module.css';
import SocialIcon from '../../components/SocialIcon/SocialIcon';
import contactData from '../../data/contactData';

const ContactAddress = () => {
    return (
        <div className={styles.adressContainer}>
            <div className={styles.contactInfo}>
                {contactData.contactInfo.map((item, index) => (
                    <div key={index} className={styles.contactColumn}>
                        <p>{item.contact}</p>
                    </div>
                ))}
            </div>
            <div className={styles.socialContainer}>
                <SocialIcon size={25} />
            </div>
        </div>
    );
};

export default ContactAddress;
