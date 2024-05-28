import styles from './Header.module.css';
import MenuNav from './MenuNav';
import Image from 'next/image';
import logo from '@/public/logo.webp';

import { BiSolidLogIn } from "react-icons/bi";






export default function Header({setPage}) {
  return <header className={styles.header}>
  <div className={styles.title}>
  <div className={styles.logo}>
        <Image src={logo} alt="Logo" width={100} height={50} />
      </div>



      
      
      <h1>A l'aventure en Kabylie</h1>
  </div>
  <MenuNav setPage={setPage}/>
  <div className={styles.login}>
        <a href="/">< BiSolidLogIn/>Login</a>
  </div>

</header>

  
}

