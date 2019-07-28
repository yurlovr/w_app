import { CONST_ACTIONS_BASKET } from "./ActionsConst/CONST_ACTIONS_BASKET";

export const putInBasket = service => dispatch =>
  dispatch({ type: CONST_ACTIONS_BASKET.PUT_IN_BASKET, order: service });

export const addCountBasket = service => dispatch =>
  dispatch({ type: CONST_ACTIONS_BASKET.ADD_SERVICE, order: service });

export const dissmissCountBasket = service => dispatch =>
  dispatch({ type: CONST_ACTIONS_BASKET.DISSMISS_SERVICE, order: service });

export const deleteFromBasket = service => dispatch =>
  dispatch({ type: CONST_ACTIONS_BASKET.DELETE_SERVICE, order: service });

export const GetShowBasket = bool => {
  return {
    type: CONST_ACTIONS_BASKET.SHOW_BASKET,
    showBasket: bool
  };
};
