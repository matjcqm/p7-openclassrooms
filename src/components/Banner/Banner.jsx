import styles from './Banner.module.css'
import logo from '../assets/logo-header'

function Banner() {
  return (
    <div className="kasa-banner">
      <img src={logo} alt="Kasa Logo" className={styles.kasa_logo} />
      <h1>kasa</h1>
    </div>
  );
}

export default Banner;
