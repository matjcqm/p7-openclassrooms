import styles from './Banner.module.css'
import background from './background.png'
import filter from './filter.png'

export default function Banner() {
  return (
    <div className={styles.banner}>
      <img className={styles.image} src={background} alt='Fond bannière' />
      <img className={styles.filter} src={filter} alt='Filtre' />
      <div className={styles.titles}>
        <h1 className={styles.title}>Chez vous,</h1>
        <h1 className={styles.title}>partout et ailleurs</h1>
      </div>
    </div>
  );
}
