import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { motion } from "framer-motion";
import styles from "./NavMenu.module.css";

const NavMenu = ({ routes, setActivePage }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activePage, setActivePageState] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (menuOpen) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }
    }, [menuOpen]);

    const menuVariants = {
        closed: { x: "-100%", opacity: 0 },
        open: { x: 0, opacity: 1 }
    };

    const closeBtnVariants = {
        hidden: { rotate: 0 },
        visible: { rotate: 90 }
    };

    return (
        <>
            <div className={styles.navMenu}>
                <ul>
                    {routes.map(({ key, label }) => (
                        <li key={key} className={styles.navItem}>
                            <button
                                onClick={() => {
                                    setActivePageState(key);
                                    setActivePage(key);
                                }}
                                className={`${styles.navButton} ${activePage === key ? styles.activeButton : ""}`}
                            >
                                {label}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
            <div className={`${styles.mobileHeader} ${isScrolled ? styles.scrolled : ""}`}>
                <button className={styles.hamburger} onClick={() => setMenuOpen(true)}>
                    <FiMenu />
                </button>
            </div>
            <motion.div
                className={styles.mobileMenu}
                initial="closed"
                animate={menuOpen ? "open" : "closed"}
                variants={menuVariants}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
                <motion.button
                    className={styles.closeBtn}
                    onClick={() => setMenuOpen(false)}
                    variants={closeBtnVariants}
                    initial="hidden"
                    animate={menuOpen ? "visible" : "hidden"}
                    transition={{ duration: 0.3 }}
                >
                    <FiX />
                </motion.button>
                <ul>
                    {routes.map(({ key, label }) => (
                        <li key={key}>
                            <button
                                onClick={() => {
                                    setActivePageState(key);
                                    setActivePage(key);
                                    setMenuOpen(false);
                                }}
                                className={`${styles.navButton} ${activePage === key ? styles.activeButton : ""}`}
                            >
                                {label}
                            </button>
                        </li>
                    ))}
                </ul>
            </motion.div>
        </>
    );
};

export default NavMenu;
