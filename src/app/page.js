import TagSwiper from "@/components/verticals/TagSwiper/TagSwiper";
import SectionsContainer from "@/components/verticals/SectionsContainer/SectionsContainer";
import SectionHighlight from "@/components/verticals/SectionHighlight/SectionHighlight";
import NewsletterPopup from "@/components/utils/NewsletterPopup/NewsletterPopup";

export const metadata = {
  title: 'Ohlalá | Portada',
  description: 'Sitio V2',
}

export default function Home() {
  return (
    <>
      <TagSwiper />
      <SectionsContainer />
      <SectionHighlight />
      <SectionsContainer />
      <SectionsContainer />
      <NewsletterPopup />
    </>
  );
}