import {Const} from "../Const/Const";



export const  allServices =  (state = {}, action) =>  {
   if (action.type === Const.ACTIONS.FETCH_DATA_ARRAY) {
       return    action.services
   }
    return state;
};

export const isLoading = (state = false, action) => {
  switch (action.type) {
    case Const.ACTIONS.SERVICES_IS_LOADING:
      return action.isLoading;

    default:
      return state;
  }
};

export const isError = (state = false, action) => {
  switch (action.type) {
    case Const.ACTIONS.ERROR:
      return action.isError;
    default:
      return state;
  }
};


export const showBasket = (state = false, action) => {
  switch (action.type) {
    case Const.ACTIONS.SHOW_BASKET:
      return action.showBasket;
    default:
      return state;
  }
};

