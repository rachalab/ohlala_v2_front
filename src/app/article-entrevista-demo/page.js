import ImageHeader from "@/components/articles/ImageHeader/ImageHeader";
import Body from "@/components/articles/Body/Body";
import ViewMore from "@/components/articles/ViewMore/ViewMore";

export const metadata = {
  title: 'Ohlalá | Portada',
  description: 'Sitio V2',
}

export default function Page() {
  return (
    <>
      <ImageHeader />
      <Body data={{recipe:false}}/>
      <ViewMore />
    </>
  );
}