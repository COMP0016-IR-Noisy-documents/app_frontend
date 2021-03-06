import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import SearchHistoryAPI from "../../api/History";
import { unload } from "../../redux/action";

// import SimpleResult from './Components/SimpleResult'
import ResultList from "../../Components/ResultList";
import Form from "../../Components/form/Form";
import X5GON from "../../Components/x5Icon/X5GON";
import Filter from "../../Components/filter/Filter";
import Head from "../../Components/head/Head";
import Alert from "../../Components/alert/alert";

import "./Search.css";

function Search() {
  // declare new state variable and initialise it with empty array to store search results
  const [searchResults, setSearchResults] = useState({});
  const [isSearch, setIsSearch] = useState(true);
  const [searchID, setSearchID] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentQuery, setCurrentQuery] = useState("");
  const [currentFilters, setcurrentFilters] = useState({
    Language: [],
    Type: []
  });
  const dispatch = useDispatch();

  useEffect(() => {

    let res = JSON.parse(sessionStorage.getItem('search_result'));
    console.log("res is", res);

    if (res !== null) {
      SearchHistoryAPI.collectUserSearchHistory(res)
        .then(newSearchID => setSearchID(newSearchID.search_id))
        .catch((error) => { console.log("error", error) });
      sessionStorage.clear();
      dispatch(unload());
    }
  })

  // this function allows Form to propagate the search result back to App
  const fetchedResult = async (result) => {
    const new_result = result;
    console.log("RES is", new_result);
    setSearchResults(new_result);
    setIsSearch(false);
  };

  // this function allows Form to propagate the search query back to the App
  const setAppQuery = (query) => {
    const new_query = query;
    setSearchQuery(new_query);
  };

  //set the current filter of the current status
  function setFilter(currentStatus, filter) {
    setcurrentFilters((prev) => {
      if (filter === "Language") {
        return {
          Language: modifyStatus(prev.Language, currentStatus),
          Type: prev.Type
        };
      } else if (filter === "Type") {
        return {
          Language: prev.Language,
          Type: modifyStatus(prev.Type, currentStatus)
        };
      }
    });
  }

  //setFilter subfunction
  function modifyStatus(prevStatus, currentStatus) {
    if (prevStatus.includes(currentStatus)) {
      return prevStatus.filter(value => (value !== currentStatus));
    } else {
      return [...prevStatus, currentStatus];
    }
  }

  function modifyQuery(newQuery) {
    setCurrentQuery(newQuery);
  }

  return (
    <div>
      <Alert />

      <div className="search">
        <Head fetchedResult={fetchedResult}
          setAppQuery={setAppQuery}
          filter={currentFilters}
          query={currentQuery}
          modifyQuery={modifyQuery}
          searchQuery={searchQuery}
          isSearch={isSearch} />

        {/* only display the X5GON logo on the start page */}
        {isSearch ? <div id="X5"><X5GON /></div> : null}


        <div className="container">
          <div className="row ">
            <div className="text-center"></div>
          </div>
          {isSearch ? (<Form fetchedResult={fetchedResult} setAppQuery={setAppQuery} filter={currentFilters} query={currentQuery}
            modifyQuery={modifyQuery} isSearch={isSearch} />) : null}
          {/* Display search results only after search was performed (will otherwise show "no results found" message) */}
          {isSearch ? null : (
            <div className="result">
              <div><Filter setFilter={setFilter} currentFilters={currentFilters} /></div>
              <div><ResultList results={searchResults.result} searchID={searchID} /></div>
            </div>
          )}
        </div>
      </div>
    </div>
    

  );
}

export default Search;
