import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaHome, FaHiking, FaCalendarAlt, FaBars, FaTimes } from "react-icons/fa";
import { VscFeedback } from "react-icons/vsc";
import styles from './MenuNav.module.css';
import { useTheme } from './ThemeProvider';
import { useLocale } from './LocaleProvider';
import { FormattedMessage } from 'react-intl';

export default function MenuNav() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const [locale, setLocale] = useLocale();
    const handleLocale = () => {
        if (locale === 'fr') {
            setLocale('en');
        }
        else {
            setLocale('fr');
        }
    }

  const [theme, setTheme] = useTheme();
    const handleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
        }
        else {
            setTheme('light');
        }
    }
  
  return (
    <nav className={styles.nav}>

      <button className={styles.menuToggle} onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </button>
      <ul className={`${styles.menu} ${isMenuOpen ? styles.menuOpen : ''}`}>
        
        <li > {/* Combine active & activeBox */}
          <Link href="/" onClick={closeMenu}>
            <div className={pathname === '/' ? styles.active : ''}> <FaHome /> <FormattedMessage id='app.header.menu.lien1'/> </div>
          </Link>
        </li>
        
        <li > {/* Use match for regex */}
          <div onClick={closeMenu} className={pathname.match(/\/(randonnee|parapente|chasse|inscription)/) ? styles.active : ''}>
            <FaHiking /> <FormattedMessage id='app.header.menu.lien2'/>
          </div>

          <ul className={styles.submenu}>
            <li>
              <Link href="/randonnee" onClick={closeMenu}><FormattedMessage id='app.header.menu.souslien21'/></Link>
            </li>
            <li>
              <Link href="/chasse" onClick={closeMenu}><FormattedMessage id='app.header.menu.souslien22'/></Link>
            </li>
            <li>
              <Link href="/parapente" onClick={closeMenu}><FormattedMessage id='app.header.menu.souslien23'/></Link>
            </li>
            <li>
              <Link href="/inscription" onClick={closeMenu}><FormattedMessage id='app.header.menu.souslien24'/></Link>
            </li>
          </ul>
        </li>
        

        <li >
          <Link href="/evenements" onClick={closeMenu}>
           <div className={pathname === '/evenements' ? styles.active : ''}><FaCalendarAlt /> <FormattedMessage id='app.header.menu.lien3'/></div>
            
          </Link>
        </li>

        <li >
          <Link href="/feedback" onClick={closeMenu}>
            <div className={pathname === '/feedback' ? styles.active : ''}><VscFeedback /> <FormattedMessage id='app.header.menu.lien4'/></div>
          </Link>
        </li>
        <li>
        <label>
        <FormattedMessage id='app.header.menu.theme'/>&nbsp;
          <input
                type="checkbox"
                checked={theme === 'dark'}
                onChange={handleTheme}
          />
      </label>

        </li>
        <li>
        <label>
                EN:&nbsp; 
                <input
                    type="checkbox"
                    checked={locale === 'en'}
                    onChange={handleLocale} />
            </label>

        </li>
      
      </ul>
      
      

        
            
        
    
    </nav>
  );
}
