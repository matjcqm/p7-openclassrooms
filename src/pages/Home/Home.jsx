import Banner from '../../components/Banner/Banner';
import AccommodationCard from '../../components/AccommodationCard/AccommodationCard'
import styles from './Home.module.css';
import data from '../../data'
import { Link } from "react-router-dom";


export default function Home() {
    return (
      <>
          <Banner />
          <div className={styles.accommodationsList}>
            {data.map((accommodation) =>
            <Link to={`/acommodation/${accommodation.id}`}>
              <AccommodationCard logement={accommodation} key={accommodation.id} />
            </Link>
            )}
          </div>
      </>
    );
  }