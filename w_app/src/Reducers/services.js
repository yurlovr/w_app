import { CONST_ACTIONS_DATA } from "../Actions/ActionsConst/CONST_ACTIONS_DATA";
import { CONST_ACTIONS_BASKET } from "../Actions/ActionsConst/CONST_ACTIONS_BASKET";

export const allServices = (state = [], action) => {
  if (action.type === CONST_ACTIONS_DATA.FETCH_DATA_ARRAY) {
    return state.concat(action.services);
  }
  return state;
};

export const isLoading = (state = true, action) => {
  if (action.type === CONST_ACTIONS_DATA.SERVICES_IS_LOADING) {
    return action.isLoading;
  }
  return state;
};

export const isError = (state = false, action) => {
  if (action.type === CONST_ACTIONS_DATA.ERROR) {
    return action.isError;
  }
  return state;
};

export const showBasket = (state = false, action) => {
  if (action.type === CONST_ACTIONS_BASKET.SHOW_BASKET) {
    return action.showBasket;
  }
  return state;
};
