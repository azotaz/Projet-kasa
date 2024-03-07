import React, { useState } from 'react';
import Photonav from '../../Photos/Photonav.avif';
import styled from 'styled-components';

const Stylebtn = styled.button`
width:90%;
display:flex;
flex-direction: column;
height:52px;
background-color:#FF6060;
margin-top: 30px;
color: white;
font-size: 24px;
padding:12px;
border-radius:5px;
border:none;
`;

const Textebtn =styled.p`
text-align: left;
padding-top:10px;
padding-bottom:10px;
margin-top:0px;
width:90%;
background-color:#F6F6F6 ;
font-size:18px;
display: ${props => props.show ? 'block' : 'none'};
max-height: ${props => props.show ? '100px' : '0px'};
overflow: hidden;
transition: max-height 1s ease;
`;


export default function Developement() {

  const [showTextFiabilite, setShowTextFiabilite] = useState(false);
  const [showTextRespect, setShowTextRespect] = useState(false);
  const [showTextService, setShowTextService] = useState(false);
  const [showTextSecurite, setShowTextSecurite] = useState(false);
  
  const handleButtonClick = (text) => {
    switch (text) {
      case 'Fiabilité':
        setShowTextFiabilite(!showTextFiabilite);
        break;
      case 'Respect':
        setShowTextRespect(!showTextRespect);
        break;
      case 'Service':
        setShowTextService(!showTextService);
        break;
      case 'Sécurité':
        setShowTextSecurite(!showTextSecurite);
        break;
      default:
        break;
    }
  };



  return (
    <div >
      <div className='card-titre'>
          <img className='PhotoCard' src={Photonav} alt='paysage de montagne'></img>
      </div>
        
        <nav className='NavApropos'> 
        <div>
          <Stylebtn onClick={() => handleButtonClick('Fiabilité')}>Fiabilité</Stylebtn>
          <Textebtn show={showTextFiabilite}>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes au logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</Textebtn>
        </div>
        <div>
          <Stylebtn onClick={() => handleButtonClick('Respect')}>Respect</Stylebtn>
          <Textebtn show={showTextRespect}>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre platforme.</Textebtn>
        </div>
        <div>
          <Stylebtn onClick={() => handleButtonClick('Service')}>Service</Stylebtn>
          <Textebtn show={showTextService}>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre platforme.</Textebtn>
        </div>
        <div>
          <Stylebtn onClick={() => handleButtonClick('Sécurité')}>Sécurité</Stylebtn>
          <Textebtn show={showTextSecurite}>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</Textebtn>
        </div>                          
        </nav>
    </div>

  )
}
