import {applyMiddleware, compose, createStore} from "redux";
import createRootReducer from "./Reducers";
import {composeWithDevTools} from "redux-devtools-extension";
import {routerMiddleware} from "connected-react-router";
import thunk from "redux-thunk";
import { createBrowserHistory } from "history";

export const history = createBrowserHistory();

export const store = createStore(createRootReducer(history),{}, compose(
  composeWithDevTools(applyMiddleware(routerMiddleware(history),thunk))));