import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from '../Nav'
import HeaderAccountMenu from '../HeaderAccountMenu'
import styles from "./Header.module.css"

function Header() {
  return (
    <header className={styles.mainHeader}>
      <div className={styles.containerLogo}>
        <Link to='/' className={styles.logo}>
          <span className={styles.logoSolidar}>Solidar</span>
          <span className={styles.logoAlim}>Alim</span>
        </Link>
        <p>Plateforme anti-gaspillage alimentaire</p>
      </div>
      <NavBar />
      <HeaderAccountMenu />
    </header>
  )
}

export default Header