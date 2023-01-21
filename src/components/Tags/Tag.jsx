import styles from './Tag.module.css'

export default function Collapse({text}) {
    return(
        <p className={styles.tag}>{text}</p>
    )
}