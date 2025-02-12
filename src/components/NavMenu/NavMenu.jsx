import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import styles from "./NavMenu.module.css";

const NavMenu = ({ routes }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
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
            </div>
            <div className={`${styles.mobileHeader} ${isScrolled ? styles.scrolled : ""}`}>
                <button
                    className={styles.hamburger}
                    onClick={() => setMenuOpen(true)}
                >
                    <FiMenu />
                </button>
            </div>
            {menuOpen && (
                <div className={styles.mobileMenu}>
                    <button className={styles.closeBtn} onClick={() => setMenuOpen(false)}>
                        <FiX />
                    </button>
                    <ul>
                        {routes.map(({ label, path }, index) => (
                            <li key={index}>
                                <NavLink
                                    to={path}
                                    onClick={() => setMenuOpen(false)}
                                >
                                    {label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </>
    );
};

export default NavMenu;
