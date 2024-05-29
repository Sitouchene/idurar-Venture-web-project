'use client'

import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

import { useState } from 'react';
import Randonnee from '@/components/Randonnee';
import Accueil from '@/components/Accueil';

import Parapente from'@/components/Parapente';
import Chasse from '@/components/Chasse';
import Inscription from '@/components/Inscription';
import Evenements from '@/components/Evenements';
import Feedback from '@/components/Feedback';


const inter = Inter({ subsets: ['latin'] });

export default function RootLayout() {
    const [page, setPage] = useState('Accueil')

    let contenu;

    if (page === 'Randonnee'){
        contenu = <Randonnee/>
    }else if (page === 'Accueil'){
        contenu = <Accueil />
    }
    else if(page === 'Parapente'){
       contenu = <Parapente/>
    }
    else if(page === 'Chasse'){
        contenu = <Chasse/>
    }
    else if(page === 'Inscription'){
        contenu = <Inscription/>
    }
    else if(page === 'Evenements'){
        contenu = <Evenements/>
    }
    else if(page === 'Feedback'){
        contenu = <Feedback/>
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
