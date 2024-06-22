import styles from './Footer.module.css'
import { FaTwitter, FaFacebook, FaYoutube,FaLinkedin,FaInstagram,FaSnapchat } from "react-icons/fa";
import { useTheme } from './ThemeProvider';
import { FormattedMessage } from 'react-intl';
export default function footer() {
    const [theme, setTheme] = useTheme();
return <footer className={styles.footer+' '+
    (theme === 'light'? styles.light : styles.dark)}>
            <div className={styles.footerContent}>
            <h4>idurarVenture</h4>
            <p> <FormattedMessage id="app.footer.message" /></p>
            </div>
           
            
            <ul className={styles.socials}>
                <p className="follow-us"><FormattedMessage id='app.footer.suivi'/></p>
                <li><a href="#"><i> <FaFacebook/></i></a></li>
                <li><a href="#"><i><FaTwitter/></i></a></li>
                <li><a href="#"><i><FaYoutube/></i></a></li>
                <li><a href="#"><i><FaInstagram/></i></a></li>
            </ul>
        
            <div className={styles.footerCopyright}>
                <p>Copyright &copy; UcenTech 2024   </p>
                    
            </div>




    

    </footer>
}