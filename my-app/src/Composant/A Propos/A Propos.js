import React from 'react';
import { Link, Outlet} from 'react-router-dom';
import Photonav from '../../Photos/Photonav.avif';
import styled from 'styled-components';
import Fiabilite from './Fiabilité';
import Respect from './Respect';
import Service from './Service';
import Securite from './Sécurité';

const StyleLink = styled(Link)`
width:86%;
display:flex;
flex-direction: column;
height:52px;
background-color:#FF6060;
margin-top: 50px;
`;

const StyledOutletFiabilite = styled(Outlet)`
  margin-top: 20px;
`;

const StyledOutletRespect = styled(Outlet)`
  margin-top: 20px;
`;

const StyledOutletService = styled(Outlet)`
  margin-top: 20px;
`;

const StyledOutletSecurite = styled(Outlet)`
  margin-top: 20px;
`;

export default function Developement() {
  return (
    <div >
      <div className='card-titre'>
          <img className='PhotoCard' src={Photonav} alt='paysage de montagne'></img>
      </div>
        
        <nav className='NavApropos'> 
          <StyleLink id="fiabilite-link" to="/A Propos/Fiabilité">Fiabilité </StyleLink>   
        <StyledOutletFiabilite>
          <Fiabilite />
        </StyledOutletFiabilite>
          <StyleLink id="respect-link" to="/A Propos/Respect">Respect</StyleLink>
          <StyledOutletRespect>
          <Respect />
        </StyledOutletRespect>
          <StyleLink id="service-link" to="/A Propos/Service">Service </StyleLink>
          <StyledOutletService>
          <Service />
        </StyledOutletService>
          <StyleLink id="securite-link" to="/A Propos/Sécurité">Sécurité</StyleLink>
          <StyledOutletSecurite>
          <Securite />
        </StyledOutletSecurite>        
        </nav>
    </div>

  )
}
