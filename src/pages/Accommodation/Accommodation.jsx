import styles from './Accommodation.module.css'
import data from '../../data/accommodations.json'
import Tag from '../../components/Tags/Tag'
import Collapse from '../../components/Collapse/Collapse'
import {useParams} from 'react-router-dom';

export default function Accommodation() {

  const { id } = useParams()

  const accommodation = data.find(item => item.id === id)

  return (
    <>
      <div className={styles.carroussel}>

      </div>
      <div className={styles.description}>
        <div className={styles.left}>
          <h1 className={styles.title}>{accommodation.title}</h1>
          <p className={styles.location}>{accommodation.location}</p>
          <Tag tag={accommodation.tag}/>
        </div>
        <div className={styles.right}>
          <div className={styles.host}>
            <p className={styles.hostName}>{accommodation.host.name}</p>
            <img className={styles.hostPicture} src={accommodation.host.picture} alt={accommodation.host.name} />
          </div>
          <div className={styles.rating}>{accommodation.rating}</div>
        </div>
      </div>
      <div className={styles.collapse}>
        <Collapse title="Description" text={accommodation.description}/>
        <Collapse title='Équipements' text={accommodation.equipments}/>
      </div>
    </>
  )
}