import React from 'react'
import styles from './MainTitle.module.css'

const MainTitle = ({ title, subtitle }) => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.subtitle}>{subtitle}</p>
        </div>
    )
}

export default MainTitle;