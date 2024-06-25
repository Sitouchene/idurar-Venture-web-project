'use client'
import Header from '@/components/Header'
import { Inter } from "next/font/google";
import { ThemeProvider } from '@/components/ThemeProvider';
import Footer from '@/components/Footer';
import "./globals.css";
import styles from './layout.module.css';
import { LocaleProvider } from '@/components/LocaleProvider';

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${styles.body}`}>
        <LocaleProvider>
          <ThemeProvider>
            <Header />
            <main className={styles.main}>
              {children}
            </main>
            <Footer />
          </ThemeProvider>
        </LocaleProvider>
      </body>
    </html>
  );
}