import React from 'react';
import styles from './ProfilePicture.module.css';

const ProfilePicture = () => {
    return (
        <div className={styles.photoContainer}>
            <img className={styles.profilePicture} src="./assets/images/picture.png" alt="Picture" />
            <div className={styles.circle}></div>
        </div>
    )
}

export default ProfilePicture