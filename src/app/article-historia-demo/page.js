import DefaultHeader from "@/components/articles/DefaultHeader/DefaultHeader";
import HeroImage from "@/components/articles/HeroImage/HeroImage";
import Body from "@/components/articles/Body/Body";
import ViewMore from "@/components/articles/ViewMore/ViewMore";

export const metadata = {
  title: 'Ohlalá | Portada',
  description: 'Sitio V2',
}

export default function Page() {
  return (
    <>
      <DefaultHeader />
      <HeroImage /> 
      <Body />
      <ViewMore />
    </>
  );
}