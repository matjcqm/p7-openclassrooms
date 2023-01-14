import Banner from '../../components/Banner/Banner';
import styles from './Home.module.css';


function Home() {
    return (
      <div>
          <Banner />
          <div className={styles.accommodationList}>
            {/* .map du tableau data pour afficher chaque AccommodationCard */}
          </div>
      </div>
    );
  }
  
export default Home;
  