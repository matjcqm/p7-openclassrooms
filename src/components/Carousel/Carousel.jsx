import styles from './Carousel.module.css'

function Carousel(images) {
  return (
    <div>
        <img className={styles.image} src={images} alt='zefzf'/>

    </div>
  )
}

export default Carousel