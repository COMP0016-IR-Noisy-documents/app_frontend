import { combineReducers } from "redux";
import LoginReducer from "./isLogin";
import UserDetailReducer from "./userDetail";
import AlertReducer from "./alert";
import LoadingReducer from "./isLoaded";

const rootReducer = combineReducers({ LoginReducer, UserDetailReducer, AlertReducer, LoadingReducer })

export default rootReducer;