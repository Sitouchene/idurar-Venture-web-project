import React from 'react';
import Image from 'next/image';
import styles from './Evenements.module.css';
import festival from '@/public/festival.webp'; 
import procession from '@/public/procession.webp';
import twiza from '@/public/twiza.webp';

const Evenements = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Événements en Kabylie</h1>
        <p className={styles.subtitle}>Découvrez les événements culturels et traditionnels en Kabylie</p>
      </header>
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Festivals</h2>
        <div className={styles.event}>

          <Image src={festival} alt="Festival de la Culture Berbère" className={styles.image} />
          <div className={styles.eventContent}>
            <h3 className={styles.eventTitle}>Festival de la Culture Berbère</h3>
            <p className={styles.text}>Venez découvrir la richesse de la culture berbère à travers des spectacles, des expositions et des ateliers interactifs.</p>
          </div>
        </div>
      </section>
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Processions religieuses</h2>
        <div className={styles.event}>
          <Image src={procession} alt="Procession religieuse" className={styles.image} />
          <div className={styles.eventContent}>
            <h3 className={styles.eventTitle}>Procession religieuse</h3>
            <p className={styles.text}>Participez aux processions religieuses et découvrez les traditions spirituelles de la Kabylie.</p>
          </div>
        </div>
      </section>
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Twiza</h2>
        <div className={styles.event}>
          <Image src={twiza} alt="Twiza" className={styles.image} />
          <div className={styles.eventContent}>
            <h3 className={styles.eventTitle}>Twiza</h3>
            <p className={styles.text}>Participez aux travaux communautaires de la Twiza et contribuez au développement local.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Evenements;
