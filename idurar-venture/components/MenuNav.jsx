import React, { useState } from 'react';
import Link from 'next/link';
import { FaHome, FaHiking, FaCalendarAlt, FaBars, FaTimes } from "react-icons/fa";
import { VscFeedback } from "react-icons/vsc";
import styles from './MenuNav.module.css';

export default function MenuNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={styles.nav}>
      <button className={styles.menuToggle} onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </button>
      <ul className={`${styles.menu} ${isMenuOpen ? styles.menuOpen : ''}`}>
        <li><Link href="/" onClick={closeMenu}><FaHome /> Accueil</Link></li>
        <li>
          <a href="/" onClick={closeMenu}><FaHiking /> Activités</a>
          <ul className={styles.submenu}>
            <li><Link href="/randonnee" onClick={() =>  closeMenu()}>Randonnée</Link></li>
            <li><Link href="/chasse" onClick={() => closeMenu()}>Chasse</Link></li>
            <li><Link href="/parapente" onClick={() => closeMenu()}>Parapente</Link></li>
            <li><Link href="/inscription" onClick={() => closeMenu()}>Inscription</Link></li>
          </ul>
        </li>
        <li><Link href="/evenements" onClick={() => closeMenu()}><FaCalendarAlt /> Événements</Link></li>
        <li><Link href="/feedback" onClick={() => closeMenu()}><VscFeedback /> Feedback</Link></li>
      </ul>
    </nav>
  );
}
