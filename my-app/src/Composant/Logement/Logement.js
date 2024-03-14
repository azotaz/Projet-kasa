import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Logement from '../../logement.json';
import ImageCarousel from './Carrousel';
import Rating from './Rating';

const Stylebtn = styled.button`
width:582px;
display:flex;
height:52px;
background-color:#FF6060;
margin-top: 30px;
color: white;
font-size: 24px;
padding:12px;
border-radius:5px;
border:none;
font-weight: 700;

@media (max-width: 768px) {
  margin-top: 10px;
  width:100%;
  height:30px;
  font-size: 13px;
  padding-top:6px;
}
`;

const Textebtn =styled.p`
text-align: left;
padding-top:10px;
padding-bottom:10px;
margin-top:0px;
width:582px;
background-color:#F6F6F6 ;
font-size:18px;
max-height: ${props => props.show ? '300px' : '0px'};
overflow: hidden;
transition: max-height 1s ease,  opacity 1s ease;
opacity: ${props => (props.show ? '1' : '0')};

@media (max-width: 768px) {
  width:100%;
  font-size:10px;
}
`;

export default function LogementIndividuel() {
 
  const [showTextDescription, setShowTextDescription] = useState(false);
  const [showTextEquipements, setShowTextEquipements] = useState(false);
  const handleButtonClick = (text) => {
    switch (text) {
      case 'Description':
        setShowTextDescription(!showTextDescription);
        break; ; 
      case 'Equipements':
        setShowTextEquipements(!showTextEquipements);
        break;
        default:
        break;
      }
    };

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
      <div className="btntags">
        {logement.tags.map((tags, index) => (
          <p className="tags" key={index}>{tags}</p>
        ))}
      </div>
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
    <div className="btnlogements">
        <div>
          <Stylebtn onClick={() => handleButtonClick('Description')}>Description</Stylebtn>
          <Textebtn show={showTextDescription}>{logement.description}</Textebtn>
        </div>
        <div>
          <Stylebtn onClick={() => handleButtonClick('Equipements')}>Equipements</Stylebtn>
          <Textebtn show={showTextEquipements}>      
          <ul>
        {logement.equipments.map((equipment, index) => (
          <li key={index}>{equipment}</li>
        ))}
          </ul>
          </Textebtn>
        </div>
    </div>
    </div>
  );
}
