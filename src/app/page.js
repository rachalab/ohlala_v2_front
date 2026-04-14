import Vertical from "@/components/pages/Vertical/Vertical";
import { api } from "@/lib/api";
import { notFound } from "next/navigation";

export async function generateMetadata({ params, searchParams }) {

  const { revisionid } = await searchParams;
  const url = "portada";

  try {
    const apiPath = `/content/${url}`;
    const data = await api.get(apiPath, {
      ...(revisionid && { revisionid })
    });

    if (!data) return {};

    return {
      title: data.title,
      description: data.excerpt,
      openGraph: {
        title: data.title,
        description: data.excerpt,
        images: [
          {
            url: data.image?.url,
            width: data.image?.width,
            height: data.image?.height,
            alt: data.image?.alt || data.title,
          },
        ],
      },
    };
  } catch (error) {
    console.warn("Metadata fetch failed:", error.message);
    return {};
  }
}

export default async function Page({ params, searchParams }) {
  // En Next.js 15+, params y searchParams deben ser awaited.
  const { revisionid } = await searchParams;

  const url = "portada";

  console.log("URL path:", url);
  if (revisionid) {
    console.log("Revision ID found:", revisionid);
  }

  let data = null;
  // Llamado a la API usando el path solicitado por el usuario
  try {
    const apiPath = `/content/${url}`;
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
  return <Vertical {...data} showHeader={false} />;
}