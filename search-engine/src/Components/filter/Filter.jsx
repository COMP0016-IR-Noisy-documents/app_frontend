import React from "react";

import FilterElement from "../filterElement/FilterElement";

import "./Filter.css";

function Filter(props) {
  const language = [
    {
      key: 1,
      language: "English",
    },
    {
      key: 2,
      language: "Slovenian",
    },
    {
      key: 3,
      language: "German",
    },
    {
      key: 4,
      language: "Portuguese",
    },
    {
      key: 5,
      language: "Spanish",
    },
    {
      key: 6,
      language: "French",
    },
    {
      key: 7,
      language: "Italian",
    },
  ];

  const fileType = [
    {
      key: 1,
      language: "Video",
    },
    {
      key: 2,
      language: "Spreadsheet",
    },
    {
      key: 3,
      language: "Audio",
    },
    {
      key: 4,
      language: "Presentation",
    },
    {
      key: 5,
      language: "Code",
    },
    {
      key: 6,
      language: "Document",
    },
  ];

  return (

    <div className="filter searchBorder" >
      <FilterElement
        className="first"
        name="Language"
        elementList={language}
        isFirst={true}
        status = {props.currentFilters.Language}
        onClick={props.setFilter}
      />
      <FilterElement
        name="Type"
        elementList={fileType}
        isFirst={false}
        status = {props.currentFilters.Type}
        onClick={props.setFilter}
      />
    </div>
  );
}

export default Filter;
