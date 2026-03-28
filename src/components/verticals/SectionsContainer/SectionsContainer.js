import SingleCard from "../SingleCard/SingleCard";
import ThreeColumnGrid from "../ThreeColumnGrid/ThreeColumnGrid";
import TwoColumnGrid from "../TwoColumnGrid/TwoColumnGrid";
import MasonryCards from "../MasonryCards/MasonryCards";
import ListCardRow from "../ListCardRow/ListCardRow";
import HorizontalAdBlock from "../HorizontalAdBlock/HorizontalAdBlock";
import styles from "./SectionsContainer.module.scss"; 

const COMPONENT_MAP = {
  single_card: SingleCard,
  three_column_grid: ThreeColumnGrid,
  two_column_grid: TwoColumnGrid,
  masonry_cards: MasonryCards,
  list_card_row: ListCardRow,
  horizontal_ad_block: HorizontalAdBlock,
};

export default function SectionsContainer({ content }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.col_left}>
        {content?.map((section) => {
          if (section.type !== "section") return null;

          const { title, icon, color } = section.data || {};
          // Note: In Next.js, icons from Drupal might be target_id or a path. 
          // Assuming we need a path or some logic to map icon.target_id to a file.
          // For now, I'll use a placeholder or check if icon has a path.
          const iconSrc = icon?.src || "/assets/icons/fire_icon.svg"; 

          return (
            <section key={section.uuid}>
              <h4 className={styles.title} style={{ color: color }}>
                <img src={iconSrc} className={styles.icon} alt={title || "Icono"} />
                {title}
              </h4>
              {section.content?.map((comp) => {
                const Component = COMPONENT_MAP[comp.type];
                if (!Component) {
                  console.warn(`Unknown component type in section: ${comp.type}`);
                  return null;
                }
                return <Component key={comp.uuid} {...comp} />;
              })}
            </section>
          );
        })}
      </div>

      <div className={styles.col_right}>
        <div className={styles.ad_wrapper} />
      </div>
    </div>
  );
}