import styles from './Navbar.module.css'
import React from "react";
import { Link } from "react-router-dom";
import logoHeader from '../../assets/logo-header.png'

export default function NavBar() {
    return (

        <header className={styles.header}>
            <img className={styles.logo} src={logoHeader} alt='Logo Kasa' />
            <nav className={styles.navbar}>
                <ul className={styles.navlist}>
                    <li className={styles.navlink}>
                        <Link to="/">Accueil</Link>
                    </li>
                    <li className={styles.navlink}>
                        <Link to="/about">A Propos</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}