import React, { useState } from "react";
import './App.css';
import babyNames from './babyNamesData.json'
import DisplayName from "./DisplayName";
import SearchBar from "./SearchBar";
import Favorites from "./Favorites";
import FavoritesEmpty from "./FavoritesEmpty";
import FilterGender from "./FilterGender";

let alphabeticalBabyNames = babyNames.sort((baby1, baby2) =>
  baby1.name.localeCompare(baby2.name)
);

let maleBabyNames = alphabeticalBabyNames.filter((baby) => {
  return baby.sex === "m";
});

let femaleBabyNames = alphabeticalBabyNames.filter((baby) => {
  return baby.sex === "f";
});

function App() {
  const [babies, setBabies] = useState(alphabeticalBabyNames);
  const [favoriteBabies, setFavoriteBabies] = useState([]);
  const [gender, setGender] = useState("bigender");
 
  function filterNamesGender(){
    setGender("bigender");
    setBabies(alphabeticalBabyNames);
  }

  function filterByGenderFemale(){
    setGender("female");
    setBabies(femaleBabyNames);
  }

  function filterByGenderMale(){
    setGender("male");
    setBabies(maleBabyNames);
  }
  
  function filteredNames(e) {
    let listOfBabies =
      gender === "female"
        ? femaleBabyNames
        : gender === "male"
        ? maleBabyNames
        : alphabeticalBabyNames;
    let filteredNames = listOfBabies.filter((baby) => {
      return baby.name.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setBabies(filteredNames);
  }

  function addFav (event) {
    const filteredBabies = babies.filter(
      (baby) => baby.name !== event.target.innerHTML
    );
    setBabies(filteredBabies);
    let favoriteBabies = alphabeticalBabyNames.filter((name) => !filteredBabies.includes(name));
    setFavoriteBabies(favoriteBabies);
  }


  return (
    <div className="MainDiv">
      <h1 className="Heading">Baby Name Picker</h1>
      {favoriteBabies.length === 0 ? (
        <FavoritesEmpty />
      ) : (
        <Favorites babies={favoriteBabies} />
      )}
      <div className="FilterNameGender">
        <SearchBar filteredNames={filteredNames} />
        <FilterGender
          src="https://cdn-icons-png.flaticon.com/512/191/191720.png"
          color="gray"
          func={filterNamesGender}
        />
        <FilterGender
          src="https://cdn-icons-png.flaticon.com/512/191/191720.png"
          color="pink"
          func={filterByGenderFemale}
        />
        <FilterGender
          src="https://cdn-icons-png.flaticon.com/512/191/191720.png"
          color="blue"
          func={filterByGenderMale}
        />
      </div>
      <div className="ListContainer">
        {babies.map((baby, index) => (
          <DisplayName key={index} baby={baby} func={addFav} />
        ))}
      </div>
    </div>
  );
}

export default App;
