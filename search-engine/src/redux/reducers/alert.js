const initState = {
    isOpen: false,
    header: "",
    content: "",
    buttonContent: "",
}

const alertReducer = (state = initState, action) => {
    switch (action.type) {
      case "OPEN_ALERT":
        return {
            isOpen: action.payload.isOpen,
            header: action.payload.header,
            content: action.payload.content,
            buttonContent: action.payload.buttonContent
        };
      case "CLOSE_ALERT":
          return {
            isOpen: false,
            header: "",
            content: "",
            buttonContent: ""
        };
      default:
        return state;
    }
  };
  
  export default alertReducer;
  