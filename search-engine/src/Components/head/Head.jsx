import React from "react";
import Form from "../form/Form";
import X5GON from "../x5Icon/X5GON";
import LoginStatus from "../loginStatus/LoginStatus";
import { Link } from "react-router-dom";

import "./Head.css";

// not available  yet
function Head(props) {
  return (
    <div id="header">
      <div id="X5Header">
        <Link to="/">
          <X5GON />
        </Link>
      </div>

      <div id="header-content">
        {props.isSearch ? null : (
          <div id="form-content">
            <div id="form">
              <Form
                fetchedResult={props.fetchedResult}
                setAppQuery={props.setAppQuery}
                filter={props.filter}
                query={props.query}
                modifyQuery={props.modifyQuery}
                isSearch={props.isSearch}
              />
            </div>
            {/* Display query underneath the search bar */}
            <div className="search-query">
              {props.searchQuery !== "" ? (
                <p>Search result for query : "{props.searchQuery}"</p>
              ) : null}
            </div>
          </div>
        )}
      </div>
      <div id="LoginStatus">
        <LoginStatus />
      </div>
    </div>
  );
}

export default Head;
