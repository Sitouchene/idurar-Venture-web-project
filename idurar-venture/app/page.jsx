import Image from 'next/image';
import styles from './page.module.css';
import Accueil from '@/components/Accueil';

export const metadata = {
    title: 'IdurarVenture | Accueil',
    description: 'IdurarVenture est le guide ultime pour le tourisme et les activités de montagnes en Kabylie',
    openGraph: {
      title: 'IdurarVenture | Accueil',
      description: 'IdurarVenture est le guide ultime pour le tourisme et les activités de montagnes en Kabylie',
      images: ['./logo.webp']
    }
  }



export default function Home() {
    return (
        <main className={styles.main}>
            <Accueil/>
        </main>
    );
}
