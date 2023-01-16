import styles from './NotFound.module.css'
import { Link } from "react-router-dom";

export default function NotFound() {
    return (
      <div className={styles.notFound}>
          <h1 className={styles.error}>404</h1>
          <div className={styles.texts}>
            <h2 className={styles.text}>Oups! La page que&nbsp;</h2>
            <h2 className={styles.text}>vous demandez n'éxiste pas.</h2>
          </div>
          <p className={styles.link}>
            <Link to="/">Retourner sur la page d'accueil</Link>
          </p>
      </div>
    );
  }