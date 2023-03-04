import React from "react";
import { useState, useEffect } from "react";
import { IconContext } from "react-icons";
import { FaAlignJustify } from "react-icons/fa";
import { FaSortAlphaDownAlt } from "react-icons/fa";
import { FaSortAlphaDown } from "react-icons/fa";
import { FaSistrix } from "react-icons/fa";
import { BsGrid } from "react-icons/bs";
import "./Search.css";
import Cardlist from "./Cardslist";

function Search(props) {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortDescending, setSortDescending] = useState(false);
  const [listView, setListView] = useState(false);

  const onSearchInput = (e) => props.onSearchTerm(e.target.value);

  //props.searchTerm = onSearchInput;

  const toggleSortAscDesc = () => {
    // 👇️ passed function to setState
    props.onSortDescending((mycurrent) => !mycurrent);
    //alert(searchTerm);
  };
  const toggleListColumnView = () => {
    // 👇️ passed function to setState
    props.onListView((current) => !current);
  };

  return (
    <>
      <div className="searchContainer">
        <div className="filterContainer" onClick={toggleSortAscDesc}>
          <FaSortAlphaDown className="searchIconDesc" />
        </div>
        <div className="searchInputContainer">
          <div class="searchIcon">
            <FaSistrix />
          </div>
          <input className="input" value={props.searchTerm} onChange={onSearchInput} type="text" name="name" />
        </div>
        <div className="listColumnContainer" onClick={toggleListColumnView}>
          {listView ? <FaAlignJustify className="searchIconListColumn" /> : <BsGrid className="searchIconListColumn" />}
        </div>
      </div>
      <div className="searchContainerMobile">
        <div className="searchInputContainerMobile">
          <div class="searchIconMobile">
            <FaSistrix />
          </div>
          <input className="searchInputMobile" value={searchTerm} onChange={onSearchInput} type="text" name="name" />
        </div>
        <div className="searchFilterListContainer">
          <div className="filterContainer" onClick={toggleSortAscDesc}>
            <FaSortAlphaDown />
          </div>
          <div className="listColumnContainer" onClick={toggleListColumnView}>
            {listView ? <FaAlignJustify /> : <BsGrid />}
          </div>
        </div>
      </div>
    </>
  );
}

export default Search;
