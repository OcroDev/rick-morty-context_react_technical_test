// Context
import { CharactersContextProvider } from "./context/charactersContext";

// Components
import { Characters } from "./components/Characters";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="container">
      <h2 className="alert alert-success text-center">Rick & Morty App</h2>
      <CharactersContextProvider>
        <Characters />
      </CharactersContextProvider>
      <Footer/>
    </div>
  );
}

export default App;
