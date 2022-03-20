import { combineReducers } from "redux";
import LoginReducer from "./isLogin";
import UserDetailReducer from "./userDetail";
import AlertReducer from "./alert";

const rootReducer = combineReducers({ LoginReducer, UserDetailReducer, AlertReducer })

export default rootReducer;