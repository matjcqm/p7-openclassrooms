import styles from './Footer.module.css';
import logoFooter from '../../assets/logo-footer.png';

export default function footer() {
    return(
        <img className={styles.logo} src={logoFooter} alt='Logo Kasa' />
    )
}