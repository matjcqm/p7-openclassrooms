import styles from './AccommodationCard.module.css'

export default function AccommodationCard(data) {
    return (
    <div className={styles.card}>
        <article>
            <img className={styles.cover} src={data.cover} alt={data.title} />
            <h2 className={styles.title}>{data.title}</h2>
        </article>
    </div> 
    );
}