import SearchAPI from "../../api/search";
import SearchHistoryAPI from "../../api/History";

import { useSelector } from "react-redux";

import "./Form.css";
import { BiSearch } from "react-icons/bi";
import { IconContext } from "react-icons/lib";

import * as getType from "../GetType";


const Form = (props) => {

  const login = useSelector(state => state.LoginReducer );
  const public_id = useSelector(state => state.UserDetailReducer.publicid );

  // fetch a result from the SearchAPI
  const fetchResult = () => {
    SearchAPI.fetchResult(newFilter(props.query, props.filter))
      .then(response => fetchAction(response))
      .catch((error) => console.log("error", error));
  };

  //update result on frontend and collect search history
  function fetchAction(response) {

    let urlArray = [];
    for (let i = 0; i < response.result.length && i < 20; i++) {
        urlArray.push(response.result[i].id);
    }
    const idJSON = {
      "top_document_id": urlArray
    }


    console.log("login: ", login);
    if (login) {
      console.log(login, "loginT");
      console.log(public_id, "public id")
      const result = {...newFilter(props.query, props.filter), ...{"public_id":public_id}, ...idJSON};
      console.log(result);
      SearchHistoryAPI.collectUserSearchHistory(result)
      .then(searchID => props.fetchedResult(response, searchID))
      .catch((error) => console.log("error", error));
    } else {
      const result = {...newFilter(props.query, props.filter), ...idJSON};
      SearchHistoryAPI.collectUserSearchHistory(result)
      .then(searchID => props.fetchedResult(response, searchID))
      .catch((error) => console.log("error", error));
    }


  }

  //Elastic search format Filter
  function newFilter(query, currentFilter) {
    console.log(JSON.stringify(currentFilter), "FILTER");
    var Type = getType.typeToCode(currentFilter.Type);
    var Language = getType.langToCode(currentFilter.Language);
    var filter, result;

    filter = {
      "Type": Type,
      "Language": Language
    }

    result = {...{query}, ...{filter}};
    console.log(result)
    
    return result;
  };

  // perform fetchResult() on submit of form and reset the query
  const handleSubmit = (event) => {
    event.preventDefault();
    fetchResult();
    props.setAppQuery(props.query);
    props.modifyQuery("");
    console.log("current query:", props.query);
  };

  return (
    <div className={`form ${props.isSearch ? "form-main-page" : "grey"}`}>
      <form onSubmit={handleSubmit}>
        <div className="search-field">
          <IconContext.Provider value={{ className: "search-icon" }}>
            <BiSearch />
          </IconContext.Provider>
          <input
            type="text"
            className="form-control"
            placeholder="Search for Learning Materials"
            value={props.query}
            onChange={(e) => props.modifyQuery(e.target.value)}
            required
          />
          <button className="btn btn-primary mt-2">Search</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
