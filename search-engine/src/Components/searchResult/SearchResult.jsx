// Display a single, Google-like search result
import React from "react";

import { useSelector } from "react-redux";

import SearchHistoryAPI from "../../api/History";

import {
  BsFileEarmarkText,
  BsFileEarmarkSlides,
  BsFileEarmarkCode,
  BsFileEarmarkMusic,
  BsFileEarmarkPlay,
  BsFileEarmarkSpreadsheet,
} from "react-icons/bs";
import { IconContext } from "react-icons";

import { getFileType, getLanguage } from "../GetType";

import "./SearchResult.css";

function getDescription(description) {
  // if the material has no description return an informative message
  if (description === null) {
    return "No description available";
  } else {
    return description;
  }
}

function SearchResult(props) {

  const login = useSelector(state => state.LoginReducer );
  const public_id = useSelector(state => state.UserDetailReducer.publicid );    

    async function collectClickHistory(id) {
      let result = {};
      if (login) {
        result = {...{"document_id": id}, ...{"document_pos": props.index}, ...{"search_id": props.searchID}, ...{"public_id": public_id}};
      } else {
        result = {...{"document_id": id}, ...{"document_pos": props.index}, ...{"search_id": props.searchID}};
      }
      try {
        const response = await SearchHistoryAPI.collectUserClickHistory(result);
        console.log(response);
      } catch (error) {
        console.log("error", error);
      }     
    }

  return (
    <div className="grid-wrapper searchBorder">
        <div className="icon-box">
          <div className="icon-background">
            <IconContext.Provider
              value={{
                color: "#868686",
                className: "centred-grid-item",
              }}>
              {(() => {
                // use the language property since type and language are mixed up in X5GON database
                switch (getFileType(props.material.type)) {
                  case "document":
                    return <BsFileEarmarkText />;
                  case "video":
                    return <BsFileEarmarkPlay />;
                  case "spreadsheet":
                    return <BsFileEarmarkSpreadsheet />;
                  case "code":
                    return <BsFileEarmarkCode />;
                  case "audio":
                    return <BsFileEarmarkMusic />;
                  case "presentation":
                    return <BsFileEarmarkSlides />;
                  default:
                    return null;
                }
              })()}
            </IconContext.Provider>
          </div>
        </div>
        {/* Display title */}
        <h2 className="title-box">
          <a href={props.material.url} onClick={() => collectClickHistory(props.material.id)}>{props.material.title}</a>
        </h2>
        {/* Display keywords */}
        <div className="description-box" >
          {/*Keywords:{" "}
              {props.material.keywords.map((value) => {
                return value + ", ";
              })} */}
          <div className="text">{getDescription(props.material.description)}</div>
        </div>
        <h6 className="language-box">{getLanguage(props.material.language)}</h6>
    </div>
  );
}

export default SearchResult;