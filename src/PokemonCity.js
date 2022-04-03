import React, { useState } from "react";

function PokemonCity() {
  const [city, setCity] = useState("");
  const handleInputChange = (e) => {
    setCity(e.target.value.toLowerCase());
  };
  return (
    <div>
      <input type="text" onChange={handleInputChange} />
      <p>Welcome to the city of {city}</p>
    </div>
  );
}

export default PokemonCity;
