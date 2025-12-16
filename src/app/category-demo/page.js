import VerticalHeader from "@/components/verticals/VerticalHeader/VerticalHeader";
import SectionsContainer from "@/components/verticals/SectionsContainer/SectionsContainer";

export const metadata = {
  title: 'Ohlalá | Portada',
  description: 'Sitio V2',
}

export default function Page() {
  return (
    <>
        <VerticalHeader title="Espectáculos" />
        <SectionsContainer />
    </>
  );
}