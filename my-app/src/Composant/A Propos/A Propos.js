import React from 'react'
import { Link, Outlet } from 'react-router-dom'



export default function Developement() {
  return (
    <div >
        
        <nav className='NavApropos'>
          <Link to="/A Propos/Fiabilité">Fiabilité </Link>
          <Link to="/A Propos/Respect">Respect</Link>
          <Link to="/A Propos/Service">Service </Link>
          <Link to="/A Propos/Sécurité">Sécurité</Link>
        </nav>
      <Outlet />
    </div>

  )
}
