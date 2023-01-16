import styles from './About.module.css'
import Banner from '../../components/Banner/Banner';
import background from '../../assets/backgroundAbout.png'

export default function About() {
    return (
      <div>
          <Banner img={background} />
      </div>
    );
  }