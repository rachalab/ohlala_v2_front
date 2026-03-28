import VerticalHeader from "@/components/verticals/VerticalHeader/VerticalHeader";
import SectionsContainer from "@/components/verticals/SectionsContainer/SectionsContainer";
import TagSwiper from "@/components/verticals/TagSwiper/TagSwiper";
import SectionHighlight from "@/components/verticals/SectionHighlight/SectionHighlight";

const COMPONENT_MAP = {
  tag_swiper: TagSwiper,
  sections_container: SectionsContainer,
  section_highlight: SectionHighlight,
};

export default function Vertical({ title, components }) {
  return (
    <>
      <VerticalHeader title={title} />
      {components?.map((comp) => {
        const Component = COMPONENT_MAP[comp.type];
        if (!Component) {
          console.warn(`Unknown component type: ${comp.type}`);
          return null;
        }
        return <Component key={comp.uuid} {...comp} />;
      })}
    </>
  );
}