import React, {useState} from 'react'
import styles from './Collapse.module.css'
import arrow from '../../assets/arrow_back.png'

export default function Collapse({info}) {

    const [toggle, setToggle] = useState(false);

    const modifyToggle = () => {
        setToggle(!toggle)
    }

  return (
    <div className={styles.container}>
        <div onClick ={modifyToggle} className={styles.collapseVisible}>
            <h2 className={styles.title}>{info.title}</h2>
            <img className={toggle ? `${styles.arrowAnimated} ${styles.arrow}` : `${styles.arrow}`} src={arrow} alt='Arrow Down' />
        </div>
        <div className={toggle ? `${styles.collapseToggle} ${styles.animated}` : `${styles.collapseToggle}`}>
            <p className={styles.text}>{info.text}</p>
        </div>
    </div>
  )
}