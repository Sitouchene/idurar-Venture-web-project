import styles from './Header.module.css';
import MenuNav from './MenuNav';
import Image from 'next/image';
import logo from '@/public/logo.webp';
import { BiSolidLogIn } from "react-icons/bi";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from './ThemeProvider';
import { FormattedMessage } from 'react-intl';




export default function Header() {
  const pathname0 = usePathname();
  const [theme, setTheme] = useTheme();
  return <header className={styles.header+' '+
    (theme === 'light'? styles.light : styles.dark)}>
 
  <div className={styles.logo}>
        <Image src={logo} alt="Logo" width={100} height={50} />
    <div className={styles.title}>
      <h1><FormattedMessage id='app.header.title'/></h1>
    </div>
  </div>
         
  <MenuNav />

  <div className={pathname0 === '/login' ? styles.login_active : styles.login}>
        <Link href="/login">< BiSolidLogIn/><FormattedMessage id='app.header.login'/></Link>
  </div>

</header>

  
}

