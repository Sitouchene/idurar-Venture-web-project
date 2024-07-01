import React from 'react';
import Image from 'next/image';
import styles from './Parapente.module.css';
import parapente from '@/public/Parapente.webp'
import parapante2 from '@/public/parapante2.webp'
import parapent3 from '@/public/parapent3.webp'

const Parapente = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Parapente en Kabylie</h1>
        <p className={styles.subtitle}>Découvrez les sensations fortes du parapente dans les montagnes de Kabylie</p>
      </header>
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>À propos de l&apos;activité</h2>
        <p className={styles.text}>
          Le parapente est une activité aérienne qui offre une expérience inoubliable, alliant adrénaline et vues à couper le souffle. En Kabylie, cette activité vous permet de survoler les paysages majestueux et de ressentir une liberté incomparable.
        </p>
      </section>
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Nos offres</h2>
        <div className={styles.offers}>
          <div className={styles.offer}>
            <h3 className={styles.offerTitle}>Baptême de l&apos;air</h3>
            <p className={styles.text}>Découvrez le parapente avec un vol d&apos;initiation accompagné d&apos;un moniteur expérimenté.</p>
          </div>
          <div className={styles.offer}>
            <h3 className={styles.offerTitle}>Vols guidés</h3>
            <p className={styles.text}>Profitez d&apos;un vol guidé pour explorer les montagnes de Kabylie sous un nouvel angle.</p>
          </div>
          <div className={styles.offer}>
            <h3 className={styles.offerTitle}>Formations</h3>
            <p className={styles.text}>Participez à nos sessions de formation pour devenir un pilote de parapente certifié.</p>
          </div>
        </div>
      </section>
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Galerie</h2>
        <div className={styles.gallery}>
       <div>
        <Image src={parapente} alt="Parapente" className={styles.image} />
        <h3>Survol village Berbère ( Ath zikki - Tizi ouzou )</h3>
        </div>
        
        <div>
        <Image src={parapante2} alt="Parapente 2" className={styles.image} />
        <h3>Village berbère harchaou</h3>
        </div>

        <div> 
        <Image src={parapent3} alt="Parapente 3" className={styles.image} />
        <h3>  Spot d&apos;envol et son decollage   ( 1050 m ) </h3>
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

export default Parapente;
