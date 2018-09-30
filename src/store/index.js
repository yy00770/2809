import { createStore, applyMiddleware } from "redux";
import AppReducer from "./reducer/index";
import thunk from "redux-thunk";


export const createAppStore = () => {
    return createStore(AppReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunk))
}
