

// convert object to string and store in localStorage
function saveToLocalStorage(state, storagename) {
    try {
      const serialisedState = JSON.stringify(state);
      localStorage.setItem(storagename, serialisedState);
    } catch (e) {
      console.warn(e);
    }
  }
  
// load object from localStorage and convert to obj
function loadFromLocalStorage(storagename) {
  try {
    const serialisedState = localStorage.getItem(storagename);
    if (serialisedState === null) return undefined;
    return JSON.parse(serialisedState);
  } catch (e) {
    console.warn(e);
    return undefined;
  }
}