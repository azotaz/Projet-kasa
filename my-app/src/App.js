import './App.scss';
import {Routes, Route} from "react-router-dom"
import Menu from "./Composant/Accueil/Accueil"
import Erreur from './Composant/Erreur/Erreur';
import Navigation from './Composant/Navigation/navigation'
import APropos from './Composant/A Propos/A Propos';
import Image from './Photos/LOGOKasa.avif'
import ImageFin from './Photos/LOGO.avif'
import styled from 'styled-components'
import LogementIndividuel from './Composant/Logement/Logement'


function App() {
  return (<body>
      <div className="App">
        <header>
          <div className='head'>
            <img className='Logo' src={Image} alt='Logo kasa'></img>
            <Navigation/>
          </div>
        </header>
        <main>
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="/APropos" element={<APropos />} />
          <Route path="/Logements/:id" element={<LogementIndividuel />} />
          <Route path="/*" element={<Erreur />} />
        </Routes>
        </main>
        <footer>
        <img className='logofin' src={ImageFin} alt='Logo kasa fin'></img> 
       <p>© 2020 Kasa.All rights reserved</p>
        </footer>
      </div>
  </body> 
 );
}

export default App;
