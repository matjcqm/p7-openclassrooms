import styles from './Navbar.module.css'
import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <nav className={styles.navbar}>
            <Link to="/">Accueil</Link>
            <Link to="/about">A Propos</Link>
        </nav>
    )
}