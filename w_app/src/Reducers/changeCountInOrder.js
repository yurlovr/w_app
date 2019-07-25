import { Const } from "../Const/Const";

export const orderState = (state = [], action) => {
  switch (action.type) {
    case Const.ACTIONS.PUT_IN_BASKET:
      return state.concat(action.order);

    case Const.ACTIONS.ADD_SERVICE:
      return state.map(service =>
        service.id === action.order.id
          ? { ...service, count: service.count + 1 }
          : service
      );

    case Const.ACTIONS.DISSMISS_SERVICE:
      return state.map(service =>
        service.id !== action.order.id
          ? service
          : { ...service, count: service.count - 1 }
      );

    case Const.ACTIONS.DELETE_SERVICE:
      return state.filter(service => service.id !== action.order.id);

    default:
      return state;
  }
};