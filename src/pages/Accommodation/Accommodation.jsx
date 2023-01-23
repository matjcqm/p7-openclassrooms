import styles from './Accommodation.module.css'
import data from '../../data/accommodations.json'
import Tag from '../../components/Tags/Tag'
import Collapse from '../../components/Collapse/Collapse'
import Carousel from '../../components/Carousel/Carousel'
import NotFound from '../NotFound/NotFound'
import Rating from '../../components/Rating/Rating'
import {useParams} from 'react-router-dom';

export default function Accommodation() {

  const { id } = useParams()

  const accommodation = data.find(item => item.id === id)

  console.log(accommodation);
  if (accommodation === undefined) {
    return (<NotFound />)
  } else {
    return (
      <>
        <div className={styles.carroussel}>
          <Carousel images={accommodation.pictures} />
        </div>
        <div className={styles.description}>
          <div className={styles.left}>
            <h1 className={styles.title}>{accommodation.title}</h1>
            <p className={styles.location}>{accommodation.location}</p>
            <div className={styles.tags}>
              {accommodation.tags.map((tag) => <Tag text={tag} />)}
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.host}>
              <p className={styles.hostName}>{accommodation.host.name}</p>
              <img className={styles.hostPicture} src={accommodation.host.picture} alt={accommodation.host.name} />
            </div>
              <Rating score={accommodation.rating}/>
          </div>
        </div>
        <div className={styles.collapses}>
          <div className={styles.collapse}>
            <Collapse title="Description" text={accommodation.description} className={styles.collapse}/>
          </div>
          <div className={styles.collapse}>
            <Collapse title='Équipements' text={accommodation.equipments}/>
          </div>
        </div>
      </>
    )
  }
}

