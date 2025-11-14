import styles from "./page.module.scss";


export const metadata = {
  title: 'Ohlalá | Portada',
  description: 'Sitio V2',
}

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Portada</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rhoncus ullamcorper ipsum et mollis. Quisque id viverra ante, eu aliquam quam. Sed tortor sem, pharetra in elit dignissim, lobortis pellentesque est. Vestibulum ac egestas enim, id maximus arcu. Curabitur ac lorem auctor, consectetur tortor quis, bibendum odio. Pellentesque interdum lacinia sem et iaculis. Fusce ac mauris et mauris vulputate rhoncus. Pellentesque vitae sodales ipsum. Morbi ipsum sapien, efficitur eu maximus sed, viverra ut mi. Vestibulum euismod tellus sed nisi gravida vestibulum. Maecenas blandit sollicitudin elementum. Sed a felis in metus aliquam bibendum quis ac sapien. Proin sed nisl et arcu condimentum scelerisque. Maecenas consequat faucibus maximus. Nam tristique enim id lacus sollicitudin, id consequat enim porta. Ut pretium posuere ex a pulvinar.</p>
      </main>
    </div>
  );
}
