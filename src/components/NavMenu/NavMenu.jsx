import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NavMenu.module.css';

const NavMenu = ({ routes }) => {
    return (
        <div className={styles.navMenu}>
            <ul>
                {routes.map(({ label, path }, index) => (
                    <li key={index} className={styles.navItem}>
                        <Link to={path} className={styles.navLink}>
                            {label}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default NavMenu;
