import React from 'react';
import { useParams } from 'react-router-dom';
import Logement from '../../logement.json';
import ImageCarousel from './Carrousel';
import Rating from './Rating';

export default function LogementIndividuel() {
 
  const { id } = useParams();

 const logement = Logement.find(logement => logement.id === id);

 // Si aucun logement trouvé, afficher un message d'erreur
 if (!logement) {
   return (
     <div>
       <h1>Logement introuvable</h1>
     </div>
   );
 }
 
  // Affiche les informations du logement
  return (
    <div className='pagelogement'>
      <ImageCarousel pictures={logement.pictures} />
    <div className="basdepage">
    <div className='titreetlieu'>
      <h1>{logement.title}</h1>
      <p>{logement.location}</p>
      <p>{logement.tags}</p>
      </div>
    <div className='nom'>
      <div>
      <p>{logement.host.name}</p>
      <img src={logement.host.picture} alt="profil"/>
      </div>
      <div className='rating'>
      <Rating rating={logement.rating}/>
      </div>
    </div>
    </div>
    </div>
  );
}
