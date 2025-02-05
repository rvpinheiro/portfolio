import React, { useState, useEffect } from 'react';
import Typewriter from 'typewriter-effect';
import styles from './Codebox.module.css';
import homeData from '../../data/homeData';

const Codebox = () => {
    const [currentCodeIndex, setCurrentCodeIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentCodeIndex((prevIndex) => (prevIndex + 1) % homeData.codeBlocks.length);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className={styles.codeboxContainer}>
            <div className={styles.codeBox}>
                <Typewriter
                    key={currentCodeIndex}
                    onInit={(typewriter) => {
                        typewriter
                            .typeString(homeData.codeBlocks[currentCodeIndex])
                            .pauseFor(1500)
                            .deleteChars(7)
                            .typeString('true);')
                            .start();
                    }}
                    options={{
                        delay: 25,
                    }}
                />
            </div>
        </div>
    );
};

export default Codebox;
