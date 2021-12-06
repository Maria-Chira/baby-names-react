import React from "react";
import DisplayName from "./DisplayName";

const Favorites = (props) => {
    return (
      <div className="FavoritesMainContainer">
        <div className="FavouritesContainer">
          <h2 className="FavouritesHeading">Favourites: </h2>
          {props.babies.map((favBabyName, index) => (
            <DisplayName key={index} baby={favBabyName} />
          ))}
        </div>
        <hr />
      </div>
    );
}

export default Favorites;