import "./App.css";
import Logo from "./Logo";
import CaughtPokemon from "./CaughtPokemon";
import BestPokemon from "./BestPokemon";
import PokemonMovesSelector from "./PokemonMovesSelector";
import PokemonCity from "./PokemonCity";
const App = () => {
  const logWhenClicked = () => {
    console.log("clicked");
  };
  return (
    <div className="App">
      <Logo handleClick={logWhenClicked} />
      <BestPokemon />
      <CaughtPokemon />
      <PokemonMovesSelector />
      <PokemonCity />
    </div>
  );
};

export default App;
