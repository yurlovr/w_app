import { Const } from "../Const/Const";

export const getData = data => dispatch => {
  dispatch(itemsIsLoading(false));
  dispatch(itemsFetchDataSuccess(data));
  setTimeout(() => {
    dispatch(itemsIsLoading(true));
  }, 3000);
};

export const dataIsLoading = bool => dispatch => {
  dispatch(itemsIsLoading(bool));
};

export const isError = bool => {
  return {
    type: Const.ACTIONS.ERROR,
    isError: bool
  };
};

const itemsFetchDataSuccess = data => {
  return {
    type: Const.ACTIONS.FETCH_DATA_ARRAY,
    services: data
  };
};

export const itemsIsLoading = bool => {
  return {
    type: Const.ACTIONS.SERVICES_IS_LOADING,
    isLoading: bool
  };
};
