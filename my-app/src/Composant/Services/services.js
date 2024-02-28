import React from 'react'
import { Link, Outlet } from 'react-router-dom'


export default function Services() {
  return (
    <div>
        <h1>
            Nos services
        </h1>
        <nav>
          <Link to="/services/developement">Service developement </Link>
          <Link to="/services/marketing">Service marketing</Link>
        </nav>
      <Outlet />
    </div>
  )
}
