import SearchResultsHeader from "@/components/verticals/SearchResultsHeader/SearchResultsHeader";
import SearchResults from "@/components/verticals/SearchResults/SearchResults";

export const metadata = {
  title: 'Ohlalá | Portada',
  description: 'Sitio V2',
}

export default function Page() {
  return (
    <>
      <SearchResultsHeader
        title='Resultados de búsqueda para "Recetas"'
        number='90'
      />

      <SearchResults />

    </>
  );
}