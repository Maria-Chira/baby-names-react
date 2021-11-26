import React from "react";

const DisplayName = (props) => {
    
    return (
      <div >
        {props.baby.sex === "f" ? (
          <p className="GirlName">{props.baby.name}</p>
        ) : (
          <p className="BoyName">{props.baby.name}</p>
        )}
      </div>
    );
}

export default DisplayName;