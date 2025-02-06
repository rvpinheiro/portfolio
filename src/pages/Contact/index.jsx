import React, { useState } from 'react';
import styles from './Contact.module.css';
import ContactForm from '../../components/ContactForm/ContactForm';
import Map from '../../components/Map/Map';

const Contact = () => {
    const [toast, setToast] = useState(null);

    const showToast = (message, type) => {
        setToast({ message, type });
        setTimeout(() => setToast(null), 3000);
    };

    return (
        <div className={styles.contactContainer}>
            <div className={styles.contactFormContainer}>
                <ContactForm showToast={showToast} />
            </div>
            <div className={styles.mapContainer}>
                <Map />
            </div>
        </div >
    );
};

export default Contact;
