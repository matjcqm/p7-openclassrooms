import styles from './Navbar.module.css'
import React from "react";
import { NavLink } from "react-router-dom";
import logoHeader from '../../assets/logo-header.png'

export default function NavBar() {
    let activeStyle = {
        textDecoration: "underline",
      };
    
    return (

        <header className={styles.header}>
            <img className={styles.logo} src={logoHeader} alt='Logo Kasa' />
            <nav className={styles.navbar}>
                <ul className={styles.navlist}>
                    <li className={styles.navlink}>
                        <NavLink 
                            to="/"
                            style={({ isActive }) => isActive ? activeStyle : undefined }
                            >Accueil</NavLink>
                    </li>
                    <li className={styles.navlink}>
                        <NavLink 
                            to="/about"
                            style={({ isActive }) => isActive ? activeStyle : undefined }
                            >A Propos</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}