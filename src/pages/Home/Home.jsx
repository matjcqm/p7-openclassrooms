import Banner from '../../components/Banner/Banner';
import AccommodationCard from '../../components/AccommodationCard/AccommodationCard'
import styles from './Home.module.css';
import background from '../../assets/backgroundHome.png'
import data from '../../data/accommodations.json'


export default function Home() {
    return (
      <>
          <Banner img={background} text1={'Chez vous,'} text2={'partout et ailleurs'} propClass={'bannerHome'}/>
          <div className={styles.accommodationsList}>
            {data.map((accommodation) =>
              <AccommodationCard logement={accommodation} key={accommodation.id} />
            )}
          </div>
      </>
    );
  }

  // &nbsp;