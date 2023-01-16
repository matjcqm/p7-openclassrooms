import styles from './Footer.module.css';
import logoFooter from '../../assets/logo-footer.png';

export default function footer() {
    return(
        <div className={styles.footer}>
            <img className={styles.logo} src={logoFooter} alt='Logo Kasa' />
            <p className={styles.text}>© 2020 Kasa. All rights reserved</p>
        </div>
    )
}