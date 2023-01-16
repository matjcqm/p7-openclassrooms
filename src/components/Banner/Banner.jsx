import styles from './Banner.module.css'
import filter from './filter.png'

export default function Banner({img, text1, text2}) {
  return (
    <div className={styles.banner}>
      <img className={styles.image} src={img} alt='Fond bannière' />
      <img className={styles.filter} src={filter} alt='Filtre' />
      <div className={styles.titles}>
        <h1 className={styles.title}>{text1}</h1>
        <h1 className={styles.title}>{text2}</h1>
      </div>
    </div>
  );
}