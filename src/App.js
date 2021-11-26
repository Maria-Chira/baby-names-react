import React, { useState } from "react";
import './App.css';
import babyNames from './babyNamesData.json'
import DisplayName from "./DisplayName";
import SearchBar from "./SearchBar";

let alphabeticalBabyNames = babyNames.sort((baby1, baby2) =>
  baby1.name.localeCompare(baby2.name)
);

function App() {
  const [babies, setBabies] = useState(alphabeticalBabyNames);
  
  function filteredNames(e) {
    let filteredNames = babies.filter((baby) => {
      return baby.name.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setBabies(filteredNames);
  }
  return (
    <div className="MainDiv">
      <h1 className="Heading">Baby Name Picker</h1>
      <SearchBar filteredNames={filteredNames} />
      <div className="ListContainer">
        {babies.map((baby, index) => (
          <DisplayName key={index} baby={baby} />
        ))}
      </div>
    </div>
  );
}

export default App;
