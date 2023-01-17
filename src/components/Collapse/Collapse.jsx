import React, {useState, useRef, useEffect} from 'react'
import styles from './Collapse.module.css'
import arrow from '../../assets/arrow_back.png'

export default function Collapse({info}) {

    const [toggle, setToggle] = useState(false);
    const [HeightEl, setHeightEl] = useState()

    const modifyToggle = () => {
        setToggle(!toggle)
    }

    const refHeight = useRef();

    useEffect(() => {
        setHeightEl(`${refHeight.current.scrollHeight}px`)
    }, [])

  return (
    <div className={styles.container}>
        <div onClick ={modifyToggle} className={styles.collapseVisible}>
            <h2 className={styles.title}>{info.title}</h2>
            <img className={styles.arrow} src={arrow} alt='Arrow Down' />
        </div>
        <div ref={refHeight} className={toggle ? `${styles.collapseToggle} ${styles.animated}` : `${styles.collapseToggle}`} style={{height: toggle ? `${HeightEl}` : '0px'}}>
            <p className={styles.text}>{info.text}</p>
        </div>
    </div>
  )
}