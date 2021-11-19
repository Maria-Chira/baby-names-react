import React from "react";
import './App.css';
import babyNames from './babyNamesData.json'
import DisplayName from "./DisplayName";



function App() {
    let alphabeticalBabyNames = babyNames.sort((baby1, baby2) =>
      baby1.name.localeCompare(baby2.name)
    );
  return (
    <div>
      <h1 className="Heading">Baby Name Picker</h1>
      <div className="App">
        {alphabeticalBabyNames.map((baby, index) => (
          <DisplayName key={index} baby={baby} />
        ))}
      </div>
    </div>
  );
}

export default App;
