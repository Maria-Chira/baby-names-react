import React, { useState } from "react";
import './App.css';
import babyNames from './babyNamesData.json'
import DisplayName from "./DisplayName";
import SearchBar from "./SearchBar";
import Favorites from "./Favorites";
import FavoritesEmpty from "./FavoritesEmpty";

let alphabeticalBabyNames = babyNames.sort((baby1, baby2) =>
  baby1.name.localeCompare(baby2.name)
);

function App() {
  const [babies, setBabies] = useState(alphabeticalBabyNames);
  const [eventName, setEventName] =useState(null);
  const [favoriteBabies, setFavoriteBabies] = useState([])
  
  function filteredNames(e) {
    let filteredNames = babies.filter((baby) => {
      return baby.name.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setBabies(filteredNames);
    
  }

  function addFav (event) {
    setEventName(event.target.innerHTML);
    const favFilter = babies.filter(
      (baby) => baby.name !== event.target.innerHTML
    );
    setBabies(favFilter);
    let favoriteBabiesArr = babyNames.filter((name) => !favFilter.includes(name));
    setFavoriteBabies(favoriteBabiesArr);
  }
  function removeFav (event) {
    setEventName(event.target.innerHTML);
    const favFilter = babies.filter(
      (baby) => baby.name !== event.target.innerHTML
    );
    setBabies(favFilter);
    let favoriteBabiesArr = babyNames.filter((name) => !favFilter.includes(name));
    setFavoriteBabies(favoriteBabiesArr);
  }

  return (
    <div className="MainDiv">
      <h1 className="Heading">Baby Name Picker</h1>
      {
        favoriteBabies.length === 0 
        ?
        <FavoritesEmpty />
        :
        <Favorites babies={favoriteBabies} />
      }
      <SearchBar filteredNames={filteredNames} />
      <div className="ListContainer">
        {babies.map((baby, index) => (
          <DisplayName key={index} baby={baby} func={addFav} />
        ))}
      </div>
    </div>
  );
}

export default App;
