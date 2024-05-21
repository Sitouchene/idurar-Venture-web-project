import styles from './Accueil.module.css';
import { FaSkiing, FaHiking } from "react-icons/fa";
import MessageDefilant from './MessageDefilant';
import Image from 'next/image';
import img07 from '@/public/mountain07.png';
import img00 from '@/public/montain00.jpg';


const message1= "-- Ansuf yiswen ar idurar-Venure  --  Bienvenue dans les montagnes d'aventures-- " ;

export default function Accueil() {
    return <>
        <div className={styles.barredefil}> 
            <div className={styles.icon}><FaHiking/> </div>
            <div className={styles.message}><MessageDefilant message={message1}/> </div>
            <div className={styles.icon}><FaSkiing/> </div>
            
        </div>


        <div className={styles.welcome}>
        <div className={styles.welcomeimage}>
        Bienvenue sur idurar-Venture
            <Image src={img07} alt="Logo" width={1000}  />
            
        </div>
            
        
           
            
        </div>
       
    </>
}