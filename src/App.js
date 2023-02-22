import { StarWarsProvider } from './context/StarWarsContext';
import CharacterList from './components/CharacterList';

//
function App () {
  return (
    <StarWarsProvider>
      <CharacterList />
    </StarWarsProvider>
  );
};

export default App;