import VideoHeader from "@/components/articles/VideoHeader/VideoHeader";
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
      <Body data={{recipe:false}}/>
      <ViewMore />
    </>
  );
}