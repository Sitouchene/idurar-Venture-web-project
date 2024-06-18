import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaHome, FaHiking, FaCalendarAlt, FaBars, FaTimes } from "react-icons/fa";
import { VscFeedback } from "react-icons/vsc";
import styles from './MenuNav.module.css';

export default function MenuNav() {
  const pathname = usePathname();
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
        
        <li > {/* Combine active & activeBox */}
          <Link href="/" onClick={closeMenu}>
            <div className={pathname === '/' ? styles.active : ''}> <FaHome /> Accueil </div>
          </Link>
        </li>
        
        <li > {/* Use match for regex */}
          <div onClick={closeMenu} className={pathname.match(/\/(randonnee|parapente|chasse|inscription)/) ? styles.active : ''}>
            <FaHiking /> Activités
          </div>

          <ul className={styles.submenu}>
            <li>
              <Link href="/randonnee" onClick={closeMenu}>Randonnée</Link>
            </li>
            <li>
              <Link href="/chasse" onClick={closeMenu}>Chasse</Link>
            </li>
            <li>
              <Link href="/parapente" onClick={closeMenu}>Parapente</Link>
            </li>
            <li>
              <Link href="/inscription" onClick={closeMenu}>Inscription</Link>
            </li>
          </ul>
        </li>
        

        <li >
          <Link href="/evenements" onClick={closeMenu}>
           <div className={pathname === '/evenements' ? styles.active : ''}><FaCalendarAlt /> Événements</div>
            
          </Link>
        </li>

        <li >
          <Link href="/feedback" onClick={closeMenu}>
            <div className={pathname === '/feedback' ? styles.active : ''}><VscFeedback /> Feedback</div>
          </Link>
        </li>
      
      </ul>
    
    </nav>
  );
}
