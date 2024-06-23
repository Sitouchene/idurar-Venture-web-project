import styles from './Accueil.module.css';
import { FaSkiing, FaHiking } from "react-icons/fa";
import MessageDefilant from './MessageDefilant';
import Image from 'next/image';
import PhotoGallery from './PhotoGallery';




const message1= "-- Ansuf yiswen ar idurar-Venure  --  Bienvenue dans les montagnes d'aventures-- " ;

export default function Accueil() {
    return <>
        <div className={styles.barredefil}> 
            <div className={styles.icon}><FaHiking/> </div>
            <div className={styles.message}><MessageDefilant message={message1}/> </div>
            <div className={styles.icon}><FaSkiing/> </div>
            
        </div>


        
            <PhotoGallery/>
        
       
    </>
}