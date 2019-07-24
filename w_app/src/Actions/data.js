import {data} from "../dataJSON/data";
import {Const} from "../Const/Const";
import randomInteger from "../helperFunction/randomInteger";

let countServicesForRender = randomInteger(Const.min, Const.max);

const getDataLength = async () =>
        setTimeout(() => {
                console.log('I got tracks');
                return parseJson(data).length;
        }, 1000);



const getRandomIndex = async dataLength => {
    let indexArray = [];
    for (let i = 0; i < countServicesForRender; i++) {
        let index = randomInteger(Const.min, dataLength - 1);
        if(indexArray.length && indexArray.some(i => i === index)) {
            i--;
        } else {
            indexArray = indexArray.concat(index);
        }
    }
    console.log(indexArray);
    console.log(countServicesForRender);
    return indexArray;
};


const getDataFromServer = async array =>
        setTimeout(() => {
            console.log('I got data');
            return dataForFecth(array);
        }, 2000);




export const getData = () => dispatch => {
    getDataLength()
        .then(dataLength => getRandomIndex(dataLength))
        .then(indexArray => getDataFromServer (indexArray))
        .then(response => dispatch(itemsFetchDataSuccess(response)));
};




const itemsFetchDataSuccess = (data) => {
    return {
        type: Const.ACTIONS.FETCH_DATA_ARRAY,
        data,
    };
};


const parseJson =(data)=> {
    return JSON.parse(data)
};

const dataForFecth = (array)=> {
    let dataArray = parseJson(data);
    return array.map(item => dataArray[item])
};
