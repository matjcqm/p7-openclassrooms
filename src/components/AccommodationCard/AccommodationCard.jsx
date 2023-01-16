import styles from './AccommodationCard.module.css'

const Card = ({logement}) => {
    return (
    <div className={styles.card}>
        <article>
            <img className={styles.cover} src={logement.cover} alt={logement.title} />
            <div className={styles.filter} />
            <h2 className={styles.title}>{logement.title}</h2>
        </article>
    </div> 
    );
}

export default Card