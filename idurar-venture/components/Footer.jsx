'use client';
import styles from './Footer.module.css';
import { FaTwitter, FaFacebook, FaYoutube, FaInstagram } from 'react-icons/fa';
import { useTheme } from './ThemeProvider';
import { FormattedMessage } from 'react-intl';

export default function Footer() {
  const [theme, setTheme] = useTheme();

  return (
    <footer className={`${styles.footer} ${theme === 'light' ? styles.light : styles.dark}`}>
      <div className={styles.footerContent}>
        <p><strong>idurarVenture</strong></p>
        <p><FormattedMessage id="app.footer.message" /></p>
      </div>

      <div>
      <p className={styles.followUs}><FormattedMessage id="app.footer.suivi" /></p>
      <ul className={styles.socials}>
        
        <li><a href="#" aria-label="Facebook"><FaFacebook /></a></li>
        <li><a href="#" aria-label="Twitter"><FaTwitter /></a></li>
        <li><a href="#" aria-label="YouTube"><FaYoutube /></a></li>
        <li><a href="#" aria-label="Instagram"><FaInstagram /></a></li>
      </ul>

      </div>
      

      <div className={styles.footerCopyright}>
        <p>Copyright &copy; UcenTech 2024</p>
      </div>
    </footer>
  );
}
