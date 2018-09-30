import { combineReducers } from "redux";
import CustomerReducer from "./CustomerReducer";


const AppReducer = combineReducers({
    customoers:CustomerReducer
})

export default AppReducer