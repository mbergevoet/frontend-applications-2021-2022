import './App.scss';
import { Route } from 'react-router-dom';
import Home from './pages/Home';
import Filter from './pages/Filter';
import Visualisation from './pages/Visualisation';
import { StarWarsProvider } from "./providers/StarWarsContext";
import NavBar from './components/NavBar';

function App() {

  return (
    <div className="App">
      <p></p>
      <h1></h1>
      <StarWarsProvider>
        <NavBar />
        <Route exact path="/"><Home /></Route>
        <Route exact path="/filter"><Filter /></Route>
        <Route exact path="/visualisation"><Visualisation /></Route>
      </StarWarsProvider>
    </div>
  );
}

export default App;
