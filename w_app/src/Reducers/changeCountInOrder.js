import { CONST_ACTIONS_BASKET } from "../Actions/ActionsConst/CONST_ACTIONS_BASKET";

export const orderState = (state = [], action) => {
  switch (action.type) {
    case CONST_ACTIONS_BASKET.PUT_IN_BASKET:
      if (state.some(service => service.id === action.order.id)) {
        return state.map(service =>
          service.id === action.order.id
            ? { ...service, count: service.count + 1 }
            : service
        );
      } else {
        return state.concat(action.order);
      }

    case CONST_ACTIONS_BASKET.ADD_SERVICE:
      return state.map(service =>
        service.id === action.order.id
          ? { ...service, count: service.count + 1 }
          : service
      );

    case CONST_ACTIONS_BASKET.DISSMISS_SERVICE:
      if (
        state.some(
          service => service.id === action.order.id && service.count === 1
        )
      ) {
        return state.filter(service => service.id !== action.order.id);
      } else {
        return state.map(service =>
          service.id === action.order.id
            ? { ...service, count: service.count - 1 }
            : service
        );
      }

    case CONST_ACTIONS_BASKET.DELETE_SERVICE:
      return state.filter(service => service.id !== action.order.id);

    default:
      return state;
  }
};
