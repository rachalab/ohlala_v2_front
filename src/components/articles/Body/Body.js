import ShareButtons from "./ShareButtons/ShareButtons";
import LinkedArticle from "./LinkedArticle/LinkedArticle";
import AuthorBio from "./AuthorBio/AuthorBio";
import ArticleTags from "./ArticleTags/ArticleTags";
import RecipeDetail from "./RecipeDetail/RecipeDetail";
import styles from "./Body.module.scss";

export default function Body({ blocks, authors, tags, type }) {

    const renderBlock = (block) => {
        switch (block.type) {
            case 'paragraph':
                return (
                    <p
                        key={block.id}
                        className={styles.paragraph}
                        dangerouslySetInnerHTML={{ __html: block.data.text }}
                    />
                );
            case 'header':
                const Tag = `h${block.data.level || 3}`;
                return (
                    <Tag key={block.id} className={styles.subtitle}>
                        {block.data.text}
                    </Tag>
                );
            case 'relatedArticles':
                return (
                    <div key={block.id}>
                        {block.data.articles?.map((article, index) => (
                            <LinkedArticle key={index} article={article} />
                        ))}
                    </div>
                );
            case 'image':
                return (
                    <div key={block.id} className={styles.image_wrapper}>
                        <img src={block.data.file?.url} alt={block.data.caption} className={styles.image} />
                        {block.data.caption && <p className={styles.caption}>{block.data.caption}</p>}
                    </div>
                );
            default:
                console.warn(`Unknown block type: ${block.type}`, block);
                return null;
        }
    };

    return (
        <div className={styles.wrapper}>

            <div className={styles.share_wrapper}>
                <ShareButtons />
            </div>

            <div className={styles.blocks}>

                <div className={styles.col_left}>
                    {blocks?.map(block => renderBlock(block))}

                    <AuthorBio authors={authors} />
                    <ArticleTags tags={tags} />
                </div>

                <div className={styles.col_right}>
                    <div className={`${styles.ad_wrapper} ${type === 'receta' ? styles.square : ''}`} />
                </div>

            </div>

        </div>
    );
}
