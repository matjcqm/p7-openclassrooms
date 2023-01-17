// import styles from './About.module.css'
import Banner from '../../components/Banner/Banner';
import Collapse from '../../components/Collapse/Collapse'
import background from '../../assets/backgroundAbout.png'
import data from '../../data/about.json'

export default function About() {
    return (
      <div>
          <Banner img={background} />
          <div>
            {data.map((collapse) =>
              <Collapse info={collapse}/>
            )}
          </div>
      </div>
    );
  }