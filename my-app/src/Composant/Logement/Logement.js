import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Logement from '../../logement.json';
import ImageCarousel from './Carrousel';
import Rating from './Rating';
import flechebtn from '../../Photos/flechebtn.png';

const Styletextbtn = styled.div`
align-items:center;
width:96%;
display: flex;
justify-content: space-between;
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
  padding-bottom:10px;
  width:96.5%;
  height:20px;
  font-size: 13px;
  padding-top:6px;
  padding-right:0px;
}
`;

const Stylebtn = styled.button`
  display:flex;
  background-color:#FF6060;
  border:none;
  transition: all 1s;
  transform: scale(1);

  img {
    transition: transform 1s;
    transform: ${props => props.rotate === "true" ? 'rotate(-180deg)' : 'none'};
  }


  @media (max-width: 768px) {
    padding-right:10px;
    height:20px;
    align-items:center;
  }
`;

const Textebtn =styled.div`
text-align: left;
padding-top:10px;
padding-bottom:10px;
width:582px;
background-color:#F6F6F6 ;
font-size:18px;
max-height: ${props => props.show === "true" ? '100px' : '0px'};
overflow: hidden;
transition: max-height 600ms ease,  opacity 1s ease;
opacity: ${props => (props.show === "true" ? '1' : '0')};

@media (max-width: 768px) {
  width:100%;
  font-size:10px;
}
`;

export default function LogementIndividuel() {
 
  const [showTextDescription, setShowTextDescription] = useState(false);
  const [showTextEquipements, setShowTextEquipements] = useState(false);
  const [activeButton, setActiveButton] = useState(false);
  const [isRotatedDescription, setIsRotatedDescription] = useState(false);
  const [isRotatedEquipements, setIsRotatedEquipements] = useState(false);
 
  const handleButtonClick = (text) => {
    switch (text) {
      case 'Description':
        setShowTextDescription(!showTextDescription);
        setIsRotatedDescription(!isRotatedDescription);
        setActiveButton(activeButton === 'Description' ? null : 'Description');
        break; ; 
      case 'Equipements':
        setShowTextEquipements(!showTextEquipements);
        setIsRotatedEquipements(!isRotatedEquipements);
        setActiveButton(activeButton === 'Equipements' ? null : 'Equipements');
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
        <Styletextbtn>Description
          <Stylebtn rotate={isRotatedDescription ? "true" : "false"} onClick={() => handleButtonClick('Description') }><img src={flechebtn} alt='flechebtn'></img></Stylebtn>
          </Styletextbtn>
          <Textebtn show={showTextDescription ? "true" : "false"}>{logement.description}</Textebtn>
        </div>
        <div>
          <Styletextbtn>Equipements
          <Stylebtn rotate={isRotatedEquipements ? "true" : "false"} onClick={() => handleButtonClick('Equipements')} ><img src={flechebtn} alt='flechebtn'></img></Stylebtn>
          </Styletextbtn>
          <Textebtn show={showTextEquipements ? "true" : "false"}>      
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