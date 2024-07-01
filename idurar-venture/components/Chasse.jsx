import React from 'react';
import Image from 'next/image';
import styles from './Chasse.module.css';
import chasses01 from '@/public/chasses01.webp';
import chasses02 from '@/public/chasses02.webp';
import chasses03 from '@/public/chasses03.webp';

const Chasse = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Chasse en Kabylie</h1>
        <p className={styles.subtitle}>Découvrez les meilleures zones de chasse en Kabylie</p>
      </header>
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>À propos de la chasse</h2>
        <p className={styles.text}>
          La chasse en Kabylie offre une expérience unique pour les amateurs de nature et d&apos;aventure. Les forêts denses et les montagnes offrent un habitat idéal pour une variété de gibier.
        </p>
      </section>
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Nos offres</h2>
        <div className={styles.offers}>
          <div className={styles.offer}>
            <h3 className={styles.offerTitle}>Chasse guidée</h3>
            <p className={styles.text}>Profitez d&apos;une chasse guidée avec des experts locaux pour une expérience sécurisée et enrichissante.</p>
          </div>
          <div className={styles.offer}>
            <h3 className={styles.offerTitle}>Chasse en groupe</h3>
            <p className={styles.text}>Participez à des chasses en groupe pour une aventure sociale et passionnante.</p>
          </div>
          <div className={styles.offer}>
            <h3 className={styles.offerTitle}>Formations</h3>
            <p className={styles.text}>Rejoignez nos sessions de formation pour apprendre les meilleures techniques de chasse et les règles de sécurité.</p>
          </div>
        </div>
      </section>
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Galerie</h2>
        <div className={styles.gallery}>
          <div className={styles.galleryItem}>
            <Image src={chasses01} alt="Chasse village Berbère imkiren" className={styles.image} />
            <h3>Chasse village Berbère imkiren</h3>
          </div>
          <div className={styles.galleryItem}>
            <Image src={chasses02} alt="Chasse en groupe" className={styles.image} />
            <h3>Chasse en groupe</h3>
          </div>
          <div className={styles.galleryItem}>
            <Image src={chasses03} alt="Chasse libre" className={styles.image} />
            <h3>Chasse libre</h3>
          </div>
        </div>
      </section>
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Contactez-nous</h2>
        <p className={styles.text}>Pour plus d&apos;informations ou pour réserver une activité, contactez-nous à <a href="mailto:info@idurar-venture.com" className={styles.link}>info@idurar-venture.com</a>.</p>
      </section>
    </div>
  );
};

export default Chasse;
