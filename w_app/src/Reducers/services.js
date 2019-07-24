import {Const} from "../Const/Const";

const initialState = [];

export const  getData =  (state = initialState, action) =>  {
    console.log(action);
   // if (action.type === Const.ACTIONS.FETCH_DATA_LENGTH) {
   //      return action.data;
   //  }
   if (action.type === Const.ACTIONS.FETCH_DATA_ARRAY) {
       return action.data;
   }
    return state;
};