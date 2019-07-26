import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {Route} from "react-router";
import { ConnectedRouter } from "connected-react-router";
import App from "./App";
import {fetchData} from "./dataJSON/getDataFromServer";
import {getData, isError} from "./Actions/actionData";
import {store, history} from "./storeConfig";


if(!store.getState().isLoading) {
    fetchData()
        .then((data) => store.dispatch(getData(data)))
        .catch(() => store.dispatch(isError(true))
        );
}

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Route path="/" component={App}/>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);