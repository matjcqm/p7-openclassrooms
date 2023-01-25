import styles from './Rating.module.css'
import starEmpty from '../../assets/star_empty.png'
import starFill from '../../assets/star_fill.png'
import { v4 as uuidv4 } from 'uuid'


export default function Rating(score) {
    const stars = []

    for (let i = 0; i < score.score; i++) {
        stars.push(<img className={styles.star} src={starFill} alt='Star Fill' />)
    }
    for (let i = 0; i < 5 - score.score; i++) {
        stars.push(<img className={styles.star} src={starEmpty} alt='Star Empty'/>)
    }
    
    return (
        <div className={styles.rating}>
            {stars.map((star) => <div key={uuidv4()}>{star}</div>)}
        </div>
    )
}