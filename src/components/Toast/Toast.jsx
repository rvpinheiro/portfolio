import React, { useState, useEffect } from 'react';
import { FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';
import styles from './Toast.module.css';

const Toast = ({ message, type = 'info', onClose }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
        const timer = setTimeout(() => {
            setIsVisible(false);
            setTimeout(onClose, 500);
        }, 3000);
        return () => clearTimeout(timer);
    }, [onClose]);

    const handleClick = () => {
        setIsVisible(false);
        setTimeout(onClose, 500);
    };

    return (
        <div
            className={`${styles.toast} ${styles[type]} ${isVisible ? styles.visible : ''}`}
            onClick={handleClick}
        >
            <div className={styles.icon}>
                {type === 'success' ? <FaCheckCircle /> : <FaExclamationCircle />}
            </div>
            <div className={styles.message}>
                {message}
            </div>
        </div>
    );
};

export default Toast;
