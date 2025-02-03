import React, { useState } from 'react';
import styles from './Contact.module.css';
import { FaEnvelope } from 'react-icons/fa';
import Button from '../../components/Button/Button';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [toast, setToast] = useState(null);

    const sendEmail = (e) => {
        e.preventDefault();

        if (!name || !email || !message) {
            showToast('Error sending message. Please fill in all fields.', 'error');
            return;
        }

        emailjs.sendForm(
            'service_wrvybvc',
            'template_0uxqqog',
            e.target,
            'uS50A--KdlVt5oGKs'
        )
            .then(() => {
                showToast('Message sent successfully!', 'success');
                setName('');
                setEmail('');
                setMessage('');
            })
            .catch(() => {
                showToast('Error sending message. Try again later.', 'error');
            });
    };

    const showToast = (message, type) => {
        setToast({ message, type });
        setTimeout(() => setToast(null), 3000);
    };

    return (
        <div className={styles.contactContainer}>
            <div className={styles.contactForm}>
                <h2 className={styles.contactTitle}>Get in touch!</h2>
                <FaEnvelope className={styles.icon} />
                <form onSubmit={sendEmail}>
                    <div className={styles.formRow}>
                        <div className={styles.formGroup}>
                            <input
                                type="text"
                                name="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Full Name"
                                required
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <input
                                type="email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Email"
                                required
                            />
                        </div>
                    </div>
                    <div className={styles.formGroup}>
                        <textarea
                            name="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Message"
                            required
                        ></textarea>
                    </div>
                    <Button label="Send" type="submit" />
                </form>

                {toast && (
                    <div className={`${styles.toast} ${toast.type === 'success' ? styles.success : styles.error}`}>
                        {toast.message}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Contact;
