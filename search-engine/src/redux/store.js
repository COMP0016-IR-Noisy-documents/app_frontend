import { createStore } from "redux";
import rootReducer from "./reducers";

// convert object to string and store in localStorage
// input of excludeKeys is in array format 
function saveToLocalStorage(state, excludeKeys = []) {
  const keys = Object.keys(state);
  for (let i = 0; i < keys.length; i ++ ) {
    let key = keys[i];
    if (excludeKeys.includes(key)) {
      continue;
    }

    try {
      let serialisedState = JSON.stringify(state[key]);
      localStorage.setItem(keys[i], serialisedState);
    } catch (e) {
      console.warn(e);
    }
  }
  
}

// load string from localStarage and convert into an Object
function loadFromLocalStorage() {
  try {
    const keys = Object.keys(localStorage);
    // console.log(keys);
    let resJson = {}
    for (let i = 0; i < keys.length; i ++ ) {
      let key = keys[i];
      console.log(key);
      let serialisedState = localStorage.getItem(key);
      // console.log(serialisedState);

      if (serialisedState === null) {
        resJson[key] = undefined;
      } 
      resJson[key] = JSON.parse(serialisedState);
    }
    console.log("ressjons", resJson);
    return resJson;
  } catch (e) {
    console.warn(e);
    return undefined;
  }
}

const store = createStore(
    rootReducer,
    loadFromLocalStorage(),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  );

store.subscribe(() => saveToLocalStorage(store.getState(), ["AlertReducer", "LoadingReducer"]));


export default store;
