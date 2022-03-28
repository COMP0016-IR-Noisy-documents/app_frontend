import { useSelector, useDispatch } from "react-redux";

import * as getType from "../GetType";
import SearchAPI from "../../api/search";
import { load, unload } from "../../redux/action";

import Load from "../../Components/load/Load";

import { BiSearch } from "react-icons/bi";
import { IconContext } from "react-icons/lib";

import "./Form.css";

const Form = (props) => {

  const login = useSelector(state => state.LoginReducer);
  const public_id = useSelector(state => state.UserDetailReducer.publicid);
  const dispatch = useDispatch();

  // fetch a result from the SearchAPI
  const fetchResult = async () => {
    try {
      const response = await SearchAPI.fetchResult(newFilter(props.query, props.filter));
      fetchAction(response);
    } catch (error) {
      console.log("error", error);
      dispatch(unload());
    }
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
      var result = { ...newFilter(props.query, props.filter), ...{ "public_id": public_id }, ...idJSON };
      sessionStorage.setItem("search_result", JSON.stringify(result));

    } else {
      var result = { ...newFilter(props.query, props.filter), ...idJSON };
      sessionStorage.setItem("search_result", JSON.stringify(result));
    }

    props.fetchedResult(response);

  }

  //Elastic search format Filter
  function newFilter(query, currentFilter) {
    console.log(JSON.stringify(currentFilter), "FILTER");
    var Type = getType.typeToCode(currentFilter.Type);
    var Language = getType.langToCode(currentFilter.Language);
    var filter, result;
    console.log("type is", Type);
    console.log("lang is", Language);

    filter = {
      "type": Type,
      "language": Language
    }

    result = { ...{ query }, ...{ filter } };

    return result;
  };

  // perform fetchResult() on submit of form and reset the query
  const handleSubmit = (event) => {
    dispatch(load());
    event.preventDefault();
    fetchResult();
    props.setAppQuery(props.query);
    props.modifyQuery("");
  };

  return (
    <div>
      <Load />

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
    </div>

  );
};

export default Form;
