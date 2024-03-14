import React from 'react'
import { Link } from 'react-router-dom'




export default function Navigation() {
  return (
      <div className="link">
        <nav>
         <Link className="link accueil" to="/">Accueil</Link>
         <Link className="link apropos" to="/APropos">A Propos</Link>   
        </nav>
      </div>
  )
}
