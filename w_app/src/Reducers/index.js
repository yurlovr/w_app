import { combineReducers } from 'redux';
import {changeCount} from "./changeCountInOrder";
import {getData} from "./services";


export default combineReducers({
    changeCount,
    getData,
});