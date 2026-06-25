import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from "./Nav.module.css";


function NavBar() {

 
  return (
    <nav className={styles.navLinks}>
        <NavLink 
        to="/" 
        end 
        className={({ isActive }) => `${styles.navItem} ${isActive ? styles.active : ''}`}
        >Accueil</NavLink>
        <NavLink 
        to="/about" 
        className={({ isActive }) => `${styles.navItem} ${isActive ? styles.active : ''}`}
        >A propos</NavLink>
        <NavLink 
        to="/donation" 
        className={({ isActive }) => `${styles.navItem} ${isActive ? styles.active : ''}`}
        >Faire un don</NavLink>
    </nav>
  )
}

export default NavBar