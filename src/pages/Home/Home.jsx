import Banner from '../../components/Banner/Banner';
import AccommodationCard from '../../components/AccommodationCard/AccommodationCard'
import styles from './Home.module.css';
import data from '../../data'


export default function Home() {
    return (
      <div>
          <Banner />
          <div className={styles.accommodationsList}>
            {data.map((data) =>
              <AccommodationCard data={data} key={data.id} />
            )}
          </div>
      </div>
    );
  }