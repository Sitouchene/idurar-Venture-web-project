import React, { useState } from 'react';
import { FaHome, FaHiking, FaCalendarAlt, FaBars, FaTimes } from "react-icons/fa";
import styles from './MenuNav.module.css';

export default function MenuNav({ setPage }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.nav}>
      <button className={styles.menuToggle} onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </button>
      <ul className={`${styles.menu} ${isMenuOpen ? styles.menuOpen : ''}`}>
        <li><a href="/"><FaHome /> Accueil</a></li>
        <li>
          <a href="#"><FaHiking /> Activités</a>
          <ul className={styles.submenu}>
            <li><a href="#" onClick={() => setPage('Randonnee')}>Randonnee</a></li>
            <li><a href="#" onClick={() => setPage('Chasse')}>Chasse</a></li>
            <li><a href="#" onClick={() => setPage('Parapente')}>Parapente</a></li>
            <li><a href="#" onClick={() => setPage('Inscription')}>Inscription</a></li>
          </ul>
        </li>
        <li><a href="#" onClick={() => setPage('Evenements')}><FaCalendarAlt /> Événements</a></li>
        <li><a href="#" onClick={() => setPage('Feedback')}>Feedback</a></li>
      </ul>
    </nav>
  );
}
