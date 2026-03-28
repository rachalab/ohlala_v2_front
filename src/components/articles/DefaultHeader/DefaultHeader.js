import Breadcrumb from "@/components/layout/Breadcrumb/Breadcrumb";
import styles from "./DefaultHeader.module.scss";
import { Fragment } from "react";

export default function DefaultHeader({ title, excerpt, authors, category, collabs, time }) {

  // Simple date formatter (e.g., "1 de agosto de 2025, 12:51")
  const formatDate = (timestamp) => {
    if (!timestamp) return "";
    const date = new Date(timestamp);
    return date.toLocaleString('es-AR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className={styles.wrapper}>
      <Breadcrumb colorMode={0} category={category} />

      <h1 className={styles.title}>{title}</h1>

      <p className={styles.summary}>{excerpt}</p>

      <div className={styles.credits}>
        <p className={styles.author}>
          Por <strong>{authors?.map(a => a.title).join(', ')}</strong>
          {collabs?.map((collab, index) => (
            <Fragment key={index}>
              <span className={styles.bullet}>•</span>
              {collab.role} <strong>{collab.autores_as?.map(a => a.title).join(', ')}</strong>
            </Fragment>
          ))}
        </p>

        <p className={styles.date}>{formatDate(time)}</p>
      </div>
    </div>
  );
}