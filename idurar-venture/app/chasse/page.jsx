
import Chasse from '@/components/Chasse';

export const metadata = {
    title: 'IdurarVenture | Chasse',
    description: 'Les amateurs de la chasse trouveront leur bonheur',
    openGraph: {
        title: 'IdurarVenture | Chasse',
        description: 'Les amateurs de la chasse trouveront leur bonheur',
      images: ['./logo.webp']
    }
  }

export default function Page() {
    return <>
        <Chasse/>
    </>;
}