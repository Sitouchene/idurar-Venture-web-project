
import Evenements from '@/components/Evenements';

export const metadata = {
    title: 'IdurarVenture | Evenements',
    description: 'Evenements culturels et touristiques en Kabylie',
    openGraph: {
        title: 'IdurarVenture | Evenements',
        description: 'Evenements culturels et touristiques en Kabylie',
      images: ['./logo.webp']
    }
  }

export default function Page() {
    return <>
        <Evenements/>
    </>;
}