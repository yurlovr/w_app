import { Const } from "../Const/Const";

export const allServices = (state = [], action) => {
  if (action.type === Const.ACTIONS.FETCH_DATA_ARRAY) {
    return state.concat(action.services);
  }
  return state;
};

export const isLoading = (state = false, action) => {
  if (action.type === Const.ACTIONS.SERVICES_IS_LOADING) {
    return action.isLoading;
  }
  return state;
};

export const isError = (state = false, action) => {
  if (action.type === Const.ACTIONS.ERROR) {
    return action.isError;
  }
  return state;
};

export const showBasket = (state = false, action) => {
  if (action.type === Const.ACTIONS.SHOW_BASKET) {
    return action.showBasket;
  }
  return state;
};
