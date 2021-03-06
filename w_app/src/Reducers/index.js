import { combineReducers } from "redux";
import { orderState } from "./changeCountInOrder";
import { allServices, isLoading, isError, showBasket } from "./services";
import { connectRouter } from "connected-react-router";

export default history =>
  combineReducers({
    router: connectRouter(history),
    orderState,
    allServices,
    isLoading,
    isError,
    showBasket
  });
