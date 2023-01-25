import styles from './Carousel.module.css'
import arrow from '../../assets/arrow_carousel.png'
import { useState } from 'react'

export default function Carousel(images) {

  const [index, setIndex] = useState(0)

  const RightArrow = () => {
    setIndex(index + 1 > images.images.length - 1 ? 0 : index + 1)
  }

  const LeftArrow = () => {
    setIndex(index - 1 < 0 ? images.images.length - 1 : index - 1)
  }

  return (
    <section className={styles.container}>
      <img className={styles.image} src={images.images[index]} alt="Carousel" />
      {images.images.length <= 1 ? null : (
        <>
          <div className={styles.arrows}>
            <div className={styles.leftArrowZone} onClick={LeftArrow}>
              <img className={styles.leftArrow} src={arrow} alt="Arrow Left" />
            </div>
            <div className={styles.rightArrowZone} onClick={RightArrow}>
              <img className={styles.rightArrow} src={arrow} alt="Arrow Right" />
            </div>
          </div>
          <span className={styles.counter}>
            {index + 1}/{images.images.length}
          </span>
        </>
      )}
    </section>
  )
};