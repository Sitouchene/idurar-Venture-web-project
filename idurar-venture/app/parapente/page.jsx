
import Parapente from '@/components/Parapente';


export const metadata = {
    title: 'IdurarVenture | Parapente',
    description: 'Des idées de parapente à couper le souffle dans les monts de la Kabylie',
    openGraph: {
        title: 'IdurarVenture | Parapente',
        description: 'Des idées de parapente à couper le souffle dans les monts de la Kabylie',
      images: ['./logo.webp']
    }
  }


export default function Page() {
    return <>
        <Parapente/>
    </>;
}