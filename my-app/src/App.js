import logo from './logo.svg';
import './App.scss';
import {Routes, Route} from "react-router-dom"
import Menu from "./Composant/Accueil/Accueil"
import Respect from './Composant/A Propos/Respect';
import Fiabilité from './Composant/A Propos/Fiabilité';
import Sécurité from './Composant/A Propos/Sécurité';
import Service from './Composant/A Propos/Service';
import Erreur from './Composant/Erreur/Erreur';
import Navigation from './Composant/Navigation/navigation'
import APropos from './Composant/A Propos/A Propos';
import Image from './Photos/LOGOKasa.avif'
import ImageFin from './Photos/LOGO.avif'
import styled from 'styled-components'

const Styletext = styled.p`
color:white;
font-size:24px;
`;

const Logoend = styled.img`
margin-top:50px;
`;

function App() {
  return (
      <div className="App">
        <header>
          <div className='head'>
            <img className='Logo' src={Image} alt='Logo kasa'></img>
            <Navigation/>
          </div>
        </header>
        <body>
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="/A Propos" element={<APropos />}>
          <Route path="/A Propos/Fiabilité" element={<Fiabilité />} />
          <Route path="/A Propos/Respect" element={<Respect />} />
          <Route path="/A Propos/Service" element={<Service />} />
          <Route path="/A Propos/Sécurité" element={<Sécurité />} />
          </Route>
          <Route path="/*" element={<Erreur />} />
        </Routes>
        </body>
        <footer>
        <Logoend className='Logofin' src={ImageFin} alt='Logo kasa fin'></Logoend> 
       <Styletext>© 2020 Kasa.All rights reserved</Styletext>
        </footer>
      </div>
  );
}

export default App;
