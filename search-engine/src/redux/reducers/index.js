import { combineReducers } from "redux";
import LoginReducer from "./isLogin";
import UserDetailReducer from "./userDetail";
import TokenReducer from "./token";
import AlertReducer from "./alert";

const rootReducer = combineReducers({ LoginReducer, TokenReducer, UserDetailReducer, AlertReducer })

export default rootReducer;