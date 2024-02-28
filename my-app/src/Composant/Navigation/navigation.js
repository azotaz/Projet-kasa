import React from 'react'
import {Link} from 'react-router-dom'

export default function Navigation() {
  return (
    <nav>
        <Link to="/">  Accueil</Link>
        <Link to="/services">Services</Link>
        <Link to="/profil/:id">Profil</Link>
    </nav>
  )
}
