import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import {Switch, BrowserRouter, Route } from 'react-router-dom'

import { syncHistoryWithStore } from 'react-router-redux'
import {rootReducer} from "./Reducers/index";
import App from './App';
import {NotFound} from './Components/NotFound/NotFound';
import "./app.scss";
import {getData} from "./Actions/data";
import {AboutUs} from "./Components/AboutUs/AboutUs";

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
// const history  = syncHistoryWithStore(browserHistory , store);


if(!store.getState().isLoading) {
  console.log(store.getState());
    store.dispatch(getData());

}

ReactDOM.render(
  <Provider store={store}>
    {/*<App/>*/}
    <BrowserRouter>
      <Switch>
      <Route exact path="/" component={App}/>
        <Route path="/about" component={AboutUs}/>
      <Route path="*" component={NotFound}/>
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
