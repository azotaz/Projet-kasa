import React from 'react'
import ImageCard from '../../Photos/imagecardmenu.avif'

export default function Menu() {
  return (
    <div>
      <div className='card-titre'>
        <h1>
            Chez vous, partout et ailleurs
        </h1>
    <img className='PhotoCard' src={ImageCard} alt='paysage de falaise'></img>
      </div>
    </div>
  )
}
