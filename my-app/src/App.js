import logo from './logo.svg';
import './App.css';
import {Routes, Route} from "react-router-dom"
import Menu from "./Composant/Menu/menu"
import Services from './Composant/Services/services';
import Profil from './Composant/Profil/Profil';
import Navigation from './Composant/Navigation/navigation'
import Marketing from './Composant/Services/marketing';
import Developement from './Composant/Services/Developement';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/services" element={<Services />}>
        <Route path="/services/developement" element={<Developement />} />
        <Route path="/services/marketing" element={<Marketing />} />
        </Route>
        <Route path="/profil/:id" element={<Profil />} />
        <Route path="/profil/*" element={<Profil />} />
      </Routes>
    </div>

  );
}

export default App;
