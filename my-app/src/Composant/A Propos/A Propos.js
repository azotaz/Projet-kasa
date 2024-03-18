import React, { useState } from 'react';
import Photonav from '../../Photos/Photonav.avif';
import styled from 'styled-components';
import flechebtn from '../../Photos/flechebtn.png';

const Styletextbtn = styled.p`
width:88.8%;
display: flex;
justify-content: space-between;
height:52px;
background-color:#FF6060;
color: white;
font-size: 24px;
border-radius:5px;
text-align: left;
font-weight: 700;
align-items:center;
padding-left:14.4px;

@media (max-width: 768px) {
  width:96%;
  margin-top: 10px;
  height:30px;
  font-size: 13px;
  padding-top:0px;
}

`;
const Stylebtn = styled.button`
display:flex;
height:25px;
width:50px;
background-color:#FF6060;
border:none;

img {
  transition: transform 1s;
  transform: ${props => props.rotate ? 'rotate(-180deg)' : 'none'};
}

@media (max-width: 768px) {
  height:15px;
  width:30px;
  padding-right:40px;
}
`;

const Textebtn =styled.p`
text-align: left;
padding-top:10px;
padding-bottom:10px;
margin-top:-23px;
width:90%;
background-color:#F6F6F6 ;
font-size:18px;
max-height: ${props => props.show ? '100px' : '0px'};
overflow: hidden;
transition: max-height 1s ease,  opacity 1s ease;
opacity: ${props => (props.show ? '1' : '0')};

@media (max-width: 768px) {
  width:100%;
  font-size:10px;
  margin-top:-13px;
}

`;


export default function Developement() {

  const [showTextFiabilite, setShowTextFiabilite] = useState(false);
  const [showTextRespect, setShowTextRespect] = useState(false);
  const [showTextService, setShowTextService] = useState(false);
  const [showTextSecurite, setShowTextSecurite] = useState(false);
  const [activeButton, setActiveButton] = useState(false);
  const [isRotatedFiabilite, setIsRotatedFiabilite] = useState(false);
  const [isRotatedRespect, setIsRotatedRespect] = useState(false);
  const [isRotatedService, setIsRotatedService] = useState(false);
  const [isRotatedSecurite, setIsRotatedSecurite] = useState(false);
  
  const handleButtonClick = (text) => {
    switch (text) {
      case 'Fiabilité':
        setShowTextFiabilite(!showTextFiabilite);
        setIsRotatedFiabilite(!isRotatedFiabilite);
        setActiveButton(activeButton === 'Fiabilité' ? null : 'Fiabilité');
        break;
      case 'Respect':
        setShowTextRespect(!showTextRespect);
        setIsRotatedRespect(!isRotatedRespect);
        setActiveButton(activeButton === 'Respect' ? null : 'Respect');
        break;
      case 'Service':
        setShowTextService(!showTextService);
        setIsRotatedService(!isRotatedService);
        setActiveButton(activeButton === 'Service' ? null : 'Service');
        break;
      case 'Sécurité':
        setShowTextSecurite(!showTextSecurite);
        setIsRotatedSecurite(!isRotatedSecurite);
        setActiveButton(activeButton === 'Sécurité' ? null : 'Sécurité');
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
        <Styletextbtn>Fiabilité
          <Stylebtn rotate={isRotatedFiabilite} onClick={() => handleButtonClick('Fiabilité')}> <img src={flechebtn} alt='flechebtn'></img></Stylebtn></Styletextbtn>
          <Textebtn show={showTextFiabilite}>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes au logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</Textebtn>
        </div>
        <div>
        <Styletextbtn>Respect
          <Stylebtn rotate={isRotatedRespect} onClick={() => handleButtonClick('Respect')}><img src={flechebtn} alt='flechebtn'></img></Stylebtn></Styletextbtn>
          <Textebtn show={showTextRespect}>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre platforme.</Textebtn>
        </div>
        <div>
          <Styletextbtn>Service
          <Stylebtn rotate={isRotatedService} onClick={() => handleButtonClick('Service')}><img src={flechebtn} alt='flechebtn'></img></Stylebtn></Styletextbtn>
          <Textebtn show={showTextService}>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre platforme.</Textebtn>
        </div>
        <div>
          <Styletextbtn>Sécurité
          <Stylebtn rotate={isRotatedSecurite} onClick={() => handleButtonClick('Sécurité')}><img src={flechebtn} alt='flechebtn'></img></Stylebtn></Styletextbtn>
          <Textebtn show={showTextSecurite}>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</Textebtn>
        </div>                          
        </nav>
    </div>

  )
}
