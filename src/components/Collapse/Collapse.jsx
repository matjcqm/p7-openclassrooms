import React, {useState} from 'react'
import styles from './Collapse.module.css'
import arrow from '../../assets/arrow_collapse.png'

export default function Collapse({title, text, propClass}) {

    const [toggle, setToggle] = useState(false);

    const modifyToggle = () => {
        setToggle(!toggle)
    }

  return (
    <div className={styles.collapse}>
        <div onClick ={modifyToggle} className={styles.collapseVisible}>
            <h2 className={styles.title}>{title}</h2>
            <img className={toggle ? `${styles.arrowAnimated} ${styles.arrow}` : `${styles.arrow}`} src={arrow} alt='Arrow Down' />
        </div>
        <div className={toggle ? `${styles.collapseToggle} ${styles.animated}` : `${styles.collapseToggle}`}>
            <div>
                {Array.isArray(text) ? (text.map((list) => <li key={list}>{list}</li>)) : <p className={styles.text}>{text}</p>}
            </div>
        </div>
    </div>
  )
}