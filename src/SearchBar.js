import React from "react";



const SearchBar= (props) =>{
    return(
        <input onChange={props.filteredNames} type="text" placeholder="Search names..."/>
    )
}

export default SearchBar;