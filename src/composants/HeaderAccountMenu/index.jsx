import React from 'react'
import { Link } from 'react-router-dom';
import styles from "./HeaderAccountMenu.module.css"

function HeaderAccountMenu() {
  const auth = true;

  return (
    <div className={styles.userProfile}>
      {
        auth ?
        (
          <div>
            <Link>Connexion</Link>
            <Link>Deconnexion</Link>
          </div>
        ) : 
        (
          <div>
              <p>Alice</p>
              <img />
          </div>
        )
      }
    </div>
  )
}

export default HeaderAccountMenu