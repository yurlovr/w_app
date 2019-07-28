import { CONST_ACTIONS_DATA } from "./ActionsConst/CONST_ACTIONS_DATA";

export const getData = data => dispatch =>  {
   dispatch(itemsFetchDataSuccess(data));
   dispatch(itemsIsLoading(false));
};

export const isError =  bool =>  dispatch =>  {
   dispatch(fetchError(bool));
};

const itemsFetchDataSuccess = data => {
  return {
    type: CONST_ACTIONS_DATA.FETCH_DATA_ARRAY,
    services: data
  };
};

const itemsIsLoading = bool => {
  return {
    type: CONST_ACTIONS_DATA.SERVICES_IS_LOADING,
    isLoading: bool
  };
};

const fetchError = bool => {
  return {
    type: CONST_ACTIONS_DATA.ERROR,
    isError: bool,
  }
};
