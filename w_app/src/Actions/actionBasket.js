import { Const } from "../Const/Const";

export const putInBasket = service => dispatch =>
  dispatch({ type: Const.ACTIONS.PUT_IN_BASKET, order: service });

export const addCountBasket = service => dispatch =>
  dispatch({ type: Const.ACTIONS.ADD_SERVICE, order: service });

export const dissmissCountBasket = service => dispatch =>
  dispatch({ type: Const.ACTIONS.DISSMISS_SERVICE, order: service });

export const deleteFromBasket = service => dispatch =>
  dispatch({ type: Const.ACTIONS.DELETE_SERVICE, order: service });

export const GetShowBasket = bool => {
  return {
    type: Const.ACTIONS.SHOW_BASKET,
    showBasket: bool
  };
};
