import React from 'react'
import ImageCard from '../../Photos/imagecardmenu.avif'
import Logement from '../../logement.json'

export default function Menu() {
  return (
    <div>
      <div className="card-titre">
        <h1>
            Chez vous, partout et ailleurs
        </h1>
    <img className="PhotoCard" src={ImageCard} alt='paysage de falaise'/>
      </div>

      <div className='cardlogements'>
        {
          Logement.map( logement => {
            return(
           <div className='cardindividuel'>
            <img className="Imglogements" src={logement.cover} alt="Proto du logement"/>
           <p>{logement.title}</p>
        </div> 
            )
          })
        }


      </div>
    </div>
  )
}
