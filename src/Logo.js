import React from "react";

const Logo = ({ handleClick }) => {
  let appName = "Squirtle Pokedox";
  return (
    <header className="App">
      <h1>{appName}</h1>
      <img
        onClick={handleClick}
        src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"
      />
      <p>My favorite Pokemon is Squirtle</p>
    </header>
  );
};

export default Logo;
