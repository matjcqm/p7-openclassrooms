import React from 'react'
import styles from './Collapse.module.css'
import arrow from '../../assets/arrow_back.png'

export default function Collapse({info}) {
  return (
    <div className={styles.container}>
        <div className={styles.collapseVisible}>
            <h2 className={styles.title}>{info.title}</h2>
            <img className={styles.arrow} src={arrow} alt='Arrow Down' />
        </div>
        <div className={styles.collapseToggle}>
            <p className={styles.text}>{info.text}</p>
        </div>
    </div>
  )
}
