import styles from './AccommodationCard.module.css'
import { Link } from "react-router-dom";

const Card = ({logement}) => {
    return (
    <div className={styles.card}>
        <Link to={`/acommodation/${logement.id}`}>
        <article>
            <img className={styles.cover} src={logement.cover} alt={logement.title} />
            <div className={styles.filter} />
            <h2 className={styles.title}>{logement.title}</h2>
        </article>
        </Link>
    </div> 
    );
}

export default Card