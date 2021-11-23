import './App.scss';
import Title from './components/Title';
import CharacterData from './components/CharacterData';
import { StarWarsProvider } from "./providers/StarWarsContext";

function App() {

  return (
    <div className="App">
      <StarWarsProvider>
        <Title>Characters</Title>
        <CharacterData />
      </StarWarsProvider>
    </div>
  );
}

export default App;
