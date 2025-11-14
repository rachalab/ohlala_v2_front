import Article from "@/components/pages/Article/Article";
import Vertical from "@/components/pages/Vertical/Vertical";
import { notFound } from "next/navigation"; // Importa la función


export default async function Page({ params }) {
  // El parámetro 'slug' es un array de segmentos de la URL.
  const { slug } = await params; 

  const url = slug.join("/");
  
  console.log(url);

  let ComponentToRender = null; 

  if (url === 'actualidad/nota-test') {
    ComponentToRender = Article;
    console.log("ntra");
  } else if (url === 'moda') {
    ComponentToRender = Vertical;
  }
  
  // 💡 Llama a notFound() si no se asignó ningún componente
  if (!ComponentToRender) {
    notFound(); // <-- ¡Llama a la función aquí!
    // Esta línea detiene la ejecución y muestra la página 404
  }

  // Ahora, retorna el componente que sí debe renderizarse.
  return <ComponentToRender />;
}