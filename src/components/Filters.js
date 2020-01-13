import React from "react";
import "../stylesheet/Filters.scss";

function Filters(props) {
  const handleSearch = event => {
    const searchText = event.target.value.toLowerCase();
    props.handleSearch(searchText);
  };

  return (
    <form className="form">
      <input className="form__searchBar" type="text" name="searchText" id="searchText" onChange={handleSearch} />
    </form>
  );
}

export default Filters;
