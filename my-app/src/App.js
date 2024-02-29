import logo from './logo.svg';
import './App.scss';
import {Routes, Route} from "react-router-dom"
import Menu from "./Composant/Accueil/Accueil"
import Respect from './Composant/A Propos/Respect';
import Fiabilité from './Composant/A Propos/Fiabilité';
import Sécurité from './Composant/A Propos/Sécurité';
import Service from './Composant/A Propos/Service';
import Profil from './Composant/Profil/Profil';
import Navigation from './Composant/Navigation/navigation'
import APropos from './Composant/A Propos/A Propos';
import Image from './Photos/LOGOKasa.avif'



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
          <Route path="/profil/:id" element={<Profil />} />
          <Route path="/profil/*" element={<Profil />} />
        </Routes>
        </body>
        <footer>

        </footer>
      </div>
  );
}

export default App;
