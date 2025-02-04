import React from 'react';
import styles from './Button.module.css';

const Button = ({ text, onClick, styleType, size }) => {
    const buttonClass = `${styles.button} ${styles[styleType]} ${styles[size]}`;

    return (
        <button className={buttonClass} onClick={onClick}>
            {text}
        </button>
    );
};

export default Button;
