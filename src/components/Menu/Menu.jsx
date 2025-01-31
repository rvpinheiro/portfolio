import React, { useState } from 'react';
import styles from './Menu.module.css';

const Menu = ({ items, updateContent }) => {
    const [activeSection, setActiveSection] = useState(items[0]);

    const handleMenuSelect = (section) => {
        setActiveSection(section);

        switch (section) {
            case 'section1':
                updateContent('Title1', 'Subtitle1');
                break;
            case 'section2':
                updateContent('Title2', 'Subtitle2');
                break;
            case 'section3':
                updateContent('Title3', 'Subtitle3');
                break;
            default:
                updateContent('Title4', 'Subtitle4');
                break;
        }
    };

    return (
        <div className={styles.menu}>
            {items.map((item, index) => (
                <button
                    key={index}
                    className={`${styles.menuItem} ${activeSection === item ? styles.active : ''}`}
                    onClick={() => handleMenuSelect(item)}
                    disabled={activeSection === item}
                >
                </button>
            ))}
        </div>
    );
};

export default Menu;
