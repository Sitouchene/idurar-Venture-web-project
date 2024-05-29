import React from 'react';
import { FaHome, FaHiking, FaCalendarAlt } from "react-icons/fa";
import Randonnee from './Randonnee';


import styles from './MenuNav.module.css';


export default function MenuNav({setPage}) {
    return <nav className={styles.nav}>
    <ul className={styles.menu}>
      <li><a href="/"><FaHome /> Accueil</a></li>
      <li>
        <a href=""><FaHiking /> Activités</a>
        <ul className={styles.submenu}>
         
        
          <li> <a href="#" onClick={() => setPage('Randonnee')}>Randonnee</a></li>
          <li> <a href="#" onClick={() => setPage('Chasse')}>Chasse</a></li>
          <li> <a href="#" onClick={() => setPage('Parapente')}>Parapente</a></li>
          <li> <a href="#" onClick={() => setPage('Inscription')}>Inscription</a></li>

          
          

        </ul>
      </li>
      
      <li><a href="#" onClick={() => setPage('Evenements')}><FaCalendarAlt /> Événements</a></li>
        
     
      <li><a href="#" onClick={() => setPage('Feedback')}>Feedback</a></li>
    </ul>
  </nav>
}

