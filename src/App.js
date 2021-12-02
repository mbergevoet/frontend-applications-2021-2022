import './App.scss';
import { Route } from 'react-router-dom';
import Home from './pages/Home';
import Filter from './pages/Filter';
import CharacterDetails from './pages/CharacterDetails';
import Visualisation from './pages/Visualisation';
import { StarWarsProvider } from "./providers/StarWarsContext";
import NavBar from './components/NavBar';

function App() {

  return (
    <div className="App">
      {/* StarWarsProvider 'provides' the data to all the components that are nested in it, giving you access to the data in every component */}
      <StarWarsProvider>
        {/* Regardless of the route, the navbar stays at the exact same spot */}
        <NavBar />
        {/* When you user goes to this route the Home component/page is rendered */}
        <Route exact path="/"><Home /></Route>
        {/* When you user goes to this route the Filter component/page is rendered */}
        <Route exact path="/filter"><Filter /></Route>
        {/* When you user goes to this route the Charcter detail component/page is rendered */}
        <Route exact path="/character/:characterId"><CharacterDetails /></Route>
        {/* When you user goes to this route the Visualisation component/page is rendered */}
        <Route exact path="/visualisation"><Visualisation /></Route>
      </StarWarsProvider>
    </div>
  );
}

export default App;
