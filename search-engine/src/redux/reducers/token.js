const tokenReducer = (state = "", action) => {
    switch (action.type) {
      case "MOD_TOKEN":
        return action.payload;
      case "RESET_TOKEN":
        return "";
      default:
        return state;
    }
  };
  
  export default tokenReducer;
  