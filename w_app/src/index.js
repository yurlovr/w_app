import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import { fetchData } from "./dataJSON/getDataFromServer";
import { getData, isError } from "./Actions/actionData";
import { store, history } from "./storeConfig";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import { Routing } from "./Router/router";

if (store.getState().isLoading) {
  fetchData()
    .then(data => store.dispatch(getData(data)))
    .catch(() => store.dispatch(isError(true)));
}

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Header />
      {Routing()}
      <Footer />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);
