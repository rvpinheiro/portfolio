import React from "react";
import { motion } from "framer-motion";
import styles from "./GalleryGrid.module.css";
import projectsData from "../../data/projectsData";

const GalleryGrid = () => {
    return (
        <div className={styles.grid}>
            {projectsData.map((project) => (
                <motion.a
                    key={project.id}
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.card}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 2 }}
                >
                    <img
                        src={project.image}
                        alt={project.title}
                        className={styles.image}
                    />
                    <div className={styles.overlay}>
                        <span className={styles.title}>{project.title}</span>
                    </div>
                </motion.a>
            ))}
        </div>
    );
};

export default GalleryGrid;
