import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Button.module.css';

const Button = ({ label, type, onClick }) => {
    return (
        <button type={type || 'button'} className={styles.button} onClick={onClick}>
            {label}
        </button>
    );
}

export default Button;
