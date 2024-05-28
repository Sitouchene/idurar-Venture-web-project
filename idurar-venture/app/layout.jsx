'use client'

import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

import { useState } from 'react';
import Randonnee from '@/components/Randonnee';
import Accueil from '@/components/Accueil';



const inter = Inter({ subsets: ['latin'] });

export default function RootLayout() {
    const [page, setPage] = useState('Accueil')

    let contenu;

    if (page === 'Randonnee'){
        contenu = <Randonnee/>
    }else if (page === 'Accueil'){
        contenu = <Accueil />
    }
    else if(page === 'chasse'){
       
    }

    return (
        <html lang='en'>
        <body className={inter.className}>
            <Header setPage={setPage}/>
           <main>
           
                    {/* {page === 'Randonmee' && <Randonnee />}
                    {page === 'Accueil' && <Accueil />} */}
                    {contenu}
                

           </main>
            <Footer/>
           
            </body>
        </html>
    );
}
