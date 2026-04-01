import { api } from "@/lib/api";
import { notFound } from "next/navigation";
import SearchResultsHeader from "@/components/verticals/SearchResultsHeader/SearchResultsHeader";
import SearchResults from "@/components/verticals/SearchResults/SearchResults";

export default async function Page({ params, searchParams }) {
  // En Next.js 15+, params y searchParams deben ser awaited.
  const { slug } = await params;
  const { revisionid } = await searchParams;

  const url = slug.join("/");

  console.log("URL path:", url);
  if (revisionid) {
    console.log("Revision ID found:", revisionid);
  }

  let data = null;
  // Llamado a la API usando el path solicitado por el usuario
  try {
    const apiPath = `/tag/${url}`;
    data = await api.get(apiPath, {
      ...(revisionid && { revisionid })
    }, {
      cache: 'no-store' // Revalidamos en cada request
    });
    
    console.log("API Data received:", !!data);
  } catch (err) {
    console.warn("API call failed:", err.message);
    // Si la API falla, es probable que la página no exista
    notFound();
  }

  // Si no hay data o la respuesta es inválida, 404
  if (!data) {
    notFound();
  }


  // Retornamos el componente pasándole toda la data como props
  return(
    <>
       <SearchResultsHeader
         title='Noticias sobre “Beatles”'
         category={data?.category}
       />
      <SearchResults cards={data?.articles} category={data?.category} />
    </>
  );
}