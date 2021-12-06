import React from "react";

const DisplayName = (props) => {
    
    return (
      <div>
        {props.baby.sex === "f" ? (
          <p className="GirlName" onClick={props.func}>
            {props.baby.name}
          </p>
        ) : (
          <p className="BoyName" onClick={props.func}>
            {props.baby.name}
          </p>
        )}
      </div>
    );
}

export default DisplayName;