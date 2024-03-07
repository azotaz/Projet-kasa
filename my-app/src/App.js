import './App.scss';
import {Routes, Route} from "react-router-dom"
import Menu from "./Composant/Accueil/Accueil"
import Erreur from './Composant/Erreur/Erreur';
import Navigation from './Composant/Navigation/navigation'
import APropos from './Composant/A Propos/A Propos';
import Image from './Photos/LOGOKasa.avif'
import ImageFin from './Photos/LOGO.avif'
import styled from 'styled-components'
import Logement from './Composant/Logement/Logement'


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
          <Route path="/APropos" element={<APropos />} />
          <Route path="/Logements/:title" element={<Logement />} />
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
