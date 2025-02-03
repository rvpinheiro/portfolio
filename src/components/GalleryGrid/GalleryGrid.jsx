import React from "react";
import styles from "./GalleryGrid.module.css";
import projects from "../../data/projects";

const GalleryGrid = () => {
    return (
        <div className={styles.grid}>
            {projects.map((project) => (
                <a
                    key={project.id}
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.card}
                >
                    <img
                        src={project.image}
                        alt={project.title}
                        className={styles.image}
                    />
                    <div className={styles.overlay}>
                        <span className={styles.title}>{project.title}</span>
                    </div>
                </a>
            ))}
        </div>
    );
};

export default GalleryGrid;
