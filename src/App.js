import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Title from './components/Title';
import Home from './pages/Home';
import Filter from './pages/Filter';
import Visualisation from './pages/Visualisation';
import { StarWarsProvider } from "./providers/StarWarsContext";
import NavBar from './components/NavBar';

function App() {

  return (
    <Router>
      <div className="App">
        <StarWarsProvider>
          <NavBar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/filter">
              <Filter />
            </Route>
            <Route exact path="/visualisation">
              <Visualisation />
            </Route>
          </Switch>
        </StarWarsProvider>
      </div>
    </Router>
  );
}

export default App;
