import React, { useState } from 'react';
import styles from './Menu.module.css';

const Menu = ({ items, updateContent }) => {
    const [activeSection, setActiveSection] = useState(items[0]);

    const handleMenuSelect = (section) => {
        setActiveSection(section);

        // Atualizar o conteúdo conforme a seção selecionada
        switch (section) {
            case 'section1':
                updateContent('Title1', 'Subtitle1', '/about');
                break;
            case 'section2':
                updateContent('Title2', 'Subtitle2', '/gallery');
                break;
            case 'section3':
                updateContent('Title3', 'Subtitle3', '/skills');
                break;
            default:
                updateContent('Title4', 'Subtitle4', '/contact');
                break;
        }
    };

    return (
        <div className={styles.menu}>
            {items.map((item, index) => (
                <button
                    key={index}
                    className={`${styles.menuItem} ${activeSection === item ? styles.active : ''}`}  // Aplica a classe 'active' se for a bolinha ativa
                    onClick={() => handleMenuSelect(item)}
                    disabled={activeSection === item}
                />
            ))}
        </div>
    );
};

export default Menu;
