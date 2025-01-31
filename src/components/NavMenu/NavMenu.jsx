import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NavMenu.module.css';

const NavMenu = ({ routes }) => {
    return (
        <div className={styles.navMenu}>
            <ul>
                {routes.map(({ label, path }, index) => (
                    <li key={index} className={styles.navItem}>
                        <NavLink
                            to={path}
                            className={({ isActive }) =>
                                isActive ? styles.activeLink : undefined
                            }
                        >
                            {label}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </div >
    );
};

export default NavMenu;
