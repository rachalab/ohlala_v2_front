import DefaultHeader from "@/components/articles/DefaultHeader/DefaultHeader";
import HeroImage from "@/components/articles/HeroImage/HeroImage";
import Body from "@/components/articles/Body/Body";
import ViewMore from "@/components/articles/ViewMore/ViewMore";



export default function Article(props) {
  const { title, excerpt, authors, body, category, collabs, image, tags } = props;

  return (
    <>
      <DefaultHeader
        title={title}
        excerpt={excerpt}
        authors={authors}
        category={category}
        collabs={collabs}
        time={body?.time}
      />
      <HeroImage image={image} title={title} />
      <Body blocks={body?.blocks} authors={authors} tags={tags} />
      <ViewMore />
    </>
  );
}