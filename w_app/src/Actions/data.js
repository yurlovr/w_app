import {data} from "../dataJSON/data";
import {Const} from "../Const/Const";
import randomInteger from "../helperFunction/randomInteger";

let countServicesForRender = randomInteger(Const.min, Const.max);

export const getData = () => dispatch => {
  dispatch(itemsIsLoading(false));
  dispatch(itemsFetchDataSuccess(parseJson(data)));
  setTimeout(() => {
    dispatch(itemsIsLoading(true));
  }, 3000);
};

// export const getDataRender = (indexArray, allservices) => dispatch => {
//   dispatch(itemsFetchDataRender(allservices, indexArray));
//   setTimeout(() => {
//     dispatch(itemsIsLoading(true));
//   }, 5000);
// };

export const isError = (bool) => {
  return {
    type: Const.ACTIONS.ERROR,
    isError: bool
  };
};




const fetchUrl = async () =>  setTimeout(() => {
  console.log('I got tracks');
 return parseJson(data);
}, 1000);

// export function itemsFetchData(url) {
//   return (dispatch) => {
//     dispatch(itemsIsLoading(true));
//
//     fetch(url)
//       .then((response) => {
//         if (!response.ok) {
//           throw Error(response.statusText);
//         }
//
//         dispatch(itemsIsLoading(false));
//
//         return response;
//       })
//       .then((response) => response.json())
//       .then((items) => dispatch(itemsFetchDataSuccess(items)))
//
//   };
// }







export const getRandomIndex =  dataLength => {
    let indexArray = [];
    for (let i = 0; i < countServicesForRender; i++) {
        let index = randomInteger(Const.min, dataLength - 1);
        if(indexArray.length && indexArray.some(i => i === index)) {
            i--;
        } else {
            indexArray = indexArray.concat(index);
        }
    }
    return indexArray;
};


// const getDataFromServer = async array =>
//         setTimeout(() => {
//             console.log('I got data');
//             return dataForFecth(array);
//         }, 2000);




// export const getData = () =>{
//     getDataLength()
//         // .then(dataLength => getRandomIndex(dataLength))
//         // .then(indexArray => getDataFromServer (indexArray))
//         // .then(response =>{ console.log(response); return dispatch(itemsFetchDataSuccess(response))});
// };




const itemsFetchDataSuccess = (data) => {
    return {
        type: Const.ACTIONS.FETCH_DATA_ARRAY,
        services: data,
    };
};

// const itemsFetchDataRender = (allservices, arrayForRender) => {
//   return {
//     type: Const.ACTIONS.FETCH_DATA_ARRAY_RENDER,
//     services: dataForFecth(allservices, arrayForRender),
//   };
// };




// const dataForFecth = (array, dataArray)=> {
//     //let dataArray = parseJson(data);
//     return array.map(item => dataArray[item])
// };


export const itemsIsLoading = (bool) => {
  return {
    type: Const.ACTIONS.SERVICES_IS_LOADING,
    isLoading: bool
  };
};

const parseJson =(data)=> {
  return JSON.parse(data)
};

export const GetShowBasket = (bool) => {
  return {
    type: Const.ACTIONS.SHOW_BASKET,
    showBasket: bool,
  };
};