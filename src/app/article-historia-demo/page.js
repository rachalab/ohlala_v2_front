import VideoHeader from "@/components/articles/VideoHeader/VideoHeader";
import ImageHeader from "@/components/articles/ImageHeader/ImageHeader";
import DefaultHeader from "@/components/articles/DefaultHeader/DefaultHeader";
import HeroImage from "@/components/articles/HeroImage/HeroImage";
import HeroRecipe from "@/components/articles/HeroRecipe/HeroRecipe";
import Body from "@/components/articles/Body/Body";
import ViewMore from "@/components/articles/ViewMore/ViewMore";

export const metadata = {
  title: 'Ohlalá | Portada',
  description: 'Sitio V2',
}

export default function Page() {
  return (
    <>
      <VideoHeader />
      <ImageHeader />
      <DefaultHeader />
      <HeroImage /> 
      <HeroRecipe />        
      <Body />
      <ViewMore />
    </>
  );
}