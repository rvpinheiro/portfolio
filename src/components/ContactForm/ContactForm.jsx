import React, { useState } from 'react';
import Button from '../Button/Button';
import styles from './ContactForm.module.css';
import emailjs from '@emailjs/browser';

const ContactForm = ({ showToast }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();

        if (!name || !email || !message || !phone) {
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
                setPhone('');
                setMessage('');
            })
            .catch(() => {
                showToast('Error sending message. Try again later.', 'error');
            });
    };

    return (
        <form onSubmit={sendEmail} className={styles.contactForm}>
            <h2 className={styles.contactTitle}>Get in touch!</h2>
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
            <div className={styles.formRow}>
                <div className={styles.formGroup}>
                    <input
                        type="tel"
                        name="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Phone"
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
            <Button
                text="Send"
                styleType="secondary"
                size="medium"
                type="submit"
            />
        </form>
    );
};

export default ContactForm;
