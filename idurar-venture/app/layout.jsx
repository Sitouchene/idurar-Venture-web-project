import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

 
const inter = Inter({ subsets: ['latin'] });
export const metadata = {
    title: 'Idurar-Venture',
    description: 'Site et app web pour la promotion du tourisme de montagnes en Kabylie',
};
export default function RootLayout({ children }) {
    return (
        <html lang='en'>
        <body className={inter.className}>
            <Header />
            {children}
            <Footer/>
           
            </body>
        </html>
    );
}
