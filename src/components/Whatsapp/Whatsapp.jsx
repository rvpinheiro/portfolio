import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import styles from './Whatsapp.module.css';

const Whatsapp = () => {
    return (
        <div className={styles.whatsappContainer}>
            <a
                href="https://wa.me/351911530924"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.whatsappLink}
            >
                <FaWhatsapp size={40} color="#25D366" />
            </a>
        </div>
    );
}

export default Whatsapp;
