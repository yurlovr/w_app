import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {Route} from 'react-router';
import { ConnectedRouter } from 'connected-react-router'
import App from './App';
import {fetchData} from "./dataJSON/getDataFromServer"
import {getData, isError} from "./Actions/actionData"
import { createBrowserHistory } from 'history'
import { applyMiddleware, compose, createStore } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import createRootReducer from './Reducers'

const history = createBrowserHistory();
const store = createStore(createRootReducer(history),{}, compose(
    composeWithDevTools(applyMiddleware(routerMiddleware(history),thunk))));


if(!store.getState().isLoading) {
    console.log(store.getState());

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