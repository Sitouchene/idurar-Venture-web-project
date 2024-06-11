import styles from './Footer.module.css'
import { FaTwitter, FaFacebook, FaYoutube,FaLinkedin,FaInstagram,FaSnapchat } from "react-icons/fa";
export default function footer() {
return <footer className={styles.footer}>
            <div className={styles.footerContent}>
            <h3>idurarVenture</h3>

            <p>IdurarVenture est votre guide ultime pour explorer les sommets majestueux de la Kabylie!<br></br> Plongez dans un monde d'aventures infinies au cœur des montagnes, où chaque sentier offre une nouvelle histoire à découvrir.</p>
            </div>
           
            
            <ul className={styles.socials}>
                <p className="follow-us">Suivez-nous!</p>
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