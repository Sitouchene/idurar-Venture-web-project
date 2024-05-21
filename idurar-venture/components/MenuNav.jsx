import React from 'react';
import { FaHome, FaHiking, FaCalendarAlt } from "react-icons/fa";


import styles from './MenuNav.module.css';


export default function MenuNav() {
    return <nav className={styles.nav}>
    <ul className={styles.menu}>
      <li><a href="/"><FaHome /> Accueil</a></li>
      <li>
        <a href=""><FaHiking /> Activités</a>
        <ul className={styles.submenu}>
          <li><a href="/">Randonnée</a></li>
          <li><a href="/">Chasse</a></li>
          <li><a href="/">Parapente</a></li>
          <li><a href="/">Autres</a></li>
        </ul>
      </li>
      <li>
        <a href="/"><FaCalendarAlt /> Evenements</a>
        <ul className={styles.submenu}>
          <li><a href="/">Festivals</a></li>
          <li><a href="/">Processions religieuses</a></li>
          <li><a href="/">Twiza</a></li>
        </ul>
      </li>
      <li><a href="/">Feedback</a></li>
    </ul>
  </nav>
}

