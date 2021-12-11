import React from "react";
 
const FilterGender = (props) => {
    return (
      <div className={props.color}>
        <img src={props.src} className="GenderIcon" onClick={props.func}></img>
      </div>
    );}

export default FilterGender;