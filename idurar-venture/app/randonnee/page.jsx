
import Randonee from '@/components/Randonnee';

export const metadata = {
    title: 'IdurarVenture | Randonnée',
    description: 'Les meilleurs sentiers de randonnée en Kabylie',
    openGraph: {
      title: 'IdurarVenture | Randonnée',
      description: 'Les meilleurs sentiers de randonnée en Kabylie',
      images: ['./logo.webp']
    }
  }

export default function Page() {
    return <>
        <Randonee/>
    </>;
}