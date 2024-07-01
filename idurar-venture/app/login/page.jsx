import FormNonControlle from "@/components/FormNonControlle";

export const metadata = {
    title: 'IdurarVenture | Login',
    description: 'Connectez a votre session sur IdurarVenture!',
    openGraph: {
        title: 'IdurarVenture | Login',
    description: 'Connectez a votre session sur IdurarVenture!',
    
      images: ['./logo.webp']
    }
  }

export default function Page(){
    return <>
    <FormNonControlle/>
    </>
}