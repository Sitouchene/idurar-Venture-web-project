
import React from 'react';
import styles from './Randonnee.module.css';

export default function Randonnee() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Randonnée en Kabylie</h1>
            <p className={styles.description}>
                Découvrez les meilleurs sentiers de randonnée en Kabylie. Que vous soyez un randonneur débutant ou expérimenté, 
                vous trouverez des parcours adaptés à tous les niveaux. Profitez des paysages à couper le souffle, des forêts 
                verdoyantes, et des montagnes majestueuses.
            </p>
            <div className={styles.trails}>
                <div className={styles.trail}>
                    <h2 className={styles.trailTitle}>Sentier de Tala Guilef</h2>
                    <p className={styles.trailDescription}>Un sentier de 10 km offrant des vues panoramiques incroyables sur la région.</p>
                </div>
                <div className={styles.trail}>
                    <h2 className={styles.trailTitle}>Ascension du Djurdjura</h2>
                    <p className={styles.trailDescription}>Un parcours de 15 km pour les aventuriers désirant atteindre le sommet du Djurdjura.</p>
                </div>
                <div className={styles.trail}>
                    <h2 className={styles.trailTitle}>Sentier de Tikjda</h2>
                    <p className={styles.trailDescription}>Une randonnée de 8 km à travers des paysages montagneux époustouflants.</p>
                </div>
                <div className={styles.trail}>
                    <h2 className={styles.trailTitle}>Boucle de l&apos;Akfadou</h2>
                    <p className={styles.trailDescription}>Un sentier de 12 km entouré de forêts denses et de points de vue magnifiques.</p>
                </div>
                <div className={styles.trail}>
                    <h2 className={styles.trailTitle}>Randonnée d&apos;Aït Ouabane</h2>
                    <p className={styles.trailDescription}>Un parcours de 9 km avec des passages par des villages Harchaou.</p>
                </div>
                <div className={styles.trail}>
                    <h2 className={styles.trailTitle}>Mont Tahat</h2>
                    <p className={styles.trailDescription}>Une aventure de 20 km pour les randonneurs expérimentés, offrant des vues spectaculaires du sommet.</p>
                </div>
            </div>
        </div>
    );
}
