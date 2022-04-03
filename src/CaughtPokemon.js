import React, { useState } from "react";

const pokedexName = [
  "Bulbasaur",
  "Ivysaur",
  "Venusaur",
  "Charmander",
  "Charmeleon",
  "Charizard",
  "Squirtle",
  "Wartortle",
  "Blastoise",
  "Caterpie",
  "Metapod",
  "Butterfree",
  "Weedle",
  "Kakuna",
  "Beedrill",
  "Pidgey",
  "Pidgeotto",
  "Pidgeot",
  "Rattata",
  "Raticate",
  "Spearow",
  "Fearow",
  "Ekans",
  "Arbok",
  "Pikachu",
  "Raichu",
  "Sandshrew",
  "Sandslash",
  "Nidoran",
  "Nidorina",
  "Nidoqueen",
  "Nidoran",
  "Nidorino",
  "Nidoking",
  "Clefairy",
  "Clefable",
];
const CaughtPokemon = () => {
  const [caught, setCaught] = useState([]);

  const handleAddPokedox = () => {
    console.log(caught);
    do {
      setCaught(caught.concat(pokedexName[caught.length]));
    } while (caught.length === pokedexName.length);
  };

  let date = new Date().toLocaleDateString();

  return (
    <div>
      <button onClick={handleAddPokedox}>Add Pokedox</button>

      <ul>
        {caught.map((i) => (
          <li>{i}</li>
        ))}
      </ul>
      <p>
        Caught {caught.length} Pokemon on {date}
      </p>
    </div>
  );
};

export default CaughtPokemon;
