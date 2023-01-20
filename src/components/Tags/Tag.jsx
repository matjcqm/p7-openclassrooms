import styles from './Tag.module.css'

export default function Collapse({tag}) {
    return(
        <p className={styles.tags}>{tag}</p>
    )
}