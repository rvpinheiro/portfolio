import React, { useState, useCallback } from 'react';
import Button from '../Button/Button';
import styles from './ContactForm.module.css';
import emailjs from '@emailjs/browser';
import Toast from '../Toast/Toast';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [toastMessage, setToastMessage] = useState('');
    const [toastType, setToastType] = useState('');

    const showToast = useCallback((msg, type) => {
        setToastMessage(msg);
        setToastType(type);
    }, []);

    const validateForm = () => {
        const { name, email, phone, message } = formData;

        const validations = [
            { isValid: name.trim(), message: 'All fields are required.' },
            { isValid: email.trim(), message: 'All fields are required.' },
            { isValid: phone.trim(), message: 'All fields are required.' },
            { isValid: message.trim(), message: 'All fields are required.' },
        ];

        const isAnyFieldEmpty = validations.some(validation => !validation.isValid);
        if (isAnyFieldEmpty) {
            showToast('All fields are required.', 'error');
            return false;
        }

        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(email)) {
            showToast('Please enter a valid email address.', 'error');
            return false;
        }

        const phoneRegex = /^\+?\d{9,15}$/;
        if (!phoneRegex.test(phone)) {
            showToast('Please enter a valid phone number.', 'error');
            return false;
        }

        return true;
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const sendEmail = (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        const templateParams = {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            message: formData.message
        };

        emailjs.send(
            'service_wrvybvc',
            'template_0uxqqog',
            templateParams,
            'uS50A--KdlVt5oGKs'
        )
            .then(() => {
                showToast('Message sent successfully!', 'success');
                setFormData({ name: '', email: '', phone: '', message: '' });
            })
            .catch(() => {
                showToast('Error sending message. Please try again.', 'error');
            });
    };

    return (
        <>
            {toastMessage && <Toast message={toastMessage} type={toastType} onClose={() => { setToastMessage(''); setToastType(''); }} />}

            <form onSubmit={sendEmail} className={styles.contactForm}>
                <h2 className={styles.contactTitle}>Get in touch!</h2>
                <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Full Name"
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <input
                            type="text"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email"
                        />
                    </div>
                </div>
                <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Phone"
                        />
                    </div>
                </div>
                <div className={styles.formGroup}>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Message"
                    ></textarea>
                </div>
                <Button text="Send" styleType="secondary" size="medium" type="submit" />
            </form>
        </>
    );
};

export default ContactForm;
