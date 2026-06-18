import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <nav>
        <NavLink>Accueil</NavLink>
        <NavLink>A propos</NavLink>
        <NavLink>Faire un don</NavLink>
    </nav>
  )
}

export default NavBar