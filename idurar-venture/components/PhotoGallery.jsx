"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './PhotoGallery.module.css';

export default function PhotoGallery() {
  const [photos, setPhotos] = useState([]);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  useEffect(() => {
    // Charger les données JSON
    fetch('/photos.json')
      .then(response => response.json())
      .then(data => setPhotos(data))
      .catch(error => console.error('Error loading photos:', error));
  }, []);

  useEffect(() => {
    if (photos.length === 0) return;

    const interval = setInterval(() => {
      setCurrentPhotoIndex((prevIndex) =>
        prevIndex === photos.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [photos]);

  if (photos.length === 0) return <div>Loading...</div>;

  return (
    <div className={styles.galleryContainer}>
      {photos.map((photo, index) => (
        <div
          key={index}
          className={`${styles.photoContainer} ${
            index === currentPhotoIndex ? styles.active : ''
          }`}
        >
          <Image
            src={photo.src}
            alt={photo.title}
            layout="fill"
            objectFit="cover"
            className={styles.photo}
          />
          <div className={styles.overlay}>
            <h2 className={styles.title}>{photo.title}</h2>
            <p className={styles.text}>{photo.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}