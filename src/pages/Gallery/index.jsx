import React from 'react'
import GalleryGrid from '../../components/GalleryGrid/GalleryGrid';
import styles from './Gallery.module.css'

const Gallery = () => {
    return (
        <div className={styles.galleryContainer}>
            <GalleryGrid />
        </div>
    )
}

export default Gallery