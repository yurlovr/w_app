import { combineReducers } from 'redux';
import {changeCount} from "./changeCountInOrder";
import {allServices, isLoading,isError,showBasket} from "./services";
import { routerReducer } from 'react-router-redux';


export const rootReducer =  combineReducers({
   // changeCount,
    allServices,
    isLoading,
    isError,
    showBasket,
    routing: routerReducer,
});