const userDetail = {
    username: "",
    email: "",
    displayname: "",
    publicid: ""
  };
  
  const userDetailReducer = (state = userDetail, action) => {
  
    switch (action.type) {
      case "SET_DETAIL":
        return {
          username: action.payload.username,
          email: action.payload.email,
          displayname: action.payload.displayname,
          publicid: action.payload.publicid
      };
      case "RESET_DETAIL":
          return {
            username: "",
            email: "",
            displayname: "",
            publicid: ""
        };
      default:
        return state;
    }
  };
  
  export default userDetailReducer;
  
