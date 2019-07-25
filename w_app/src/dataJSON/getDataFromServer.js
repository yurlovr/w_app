import { data } from "./data";
import randomInteger from "../helperFunction/randomInteger";
import { Const } from "../Const/Const";
import { dataIsLoading } from "../Actions/actionData";

let countServicesForRender = randomInteger(Const.min, Const.max);

export const GET_DATA = {
  getDataFromServer: () => {
    return new Promise((resolve, reject) =>
      setTimeout(() => {
        try {
          resolve(parseJson(data));
        } catch (e) {
          reject(e);
        }
      }, 2000)
    );
    //     .then(data =>
    //   array.map(item => data[item] )
    // );
  },

  getDataLength: () => {
    return new Promise((resolve, reject) =>
      setTimeout(() => {
        try {
          resolve(parseJson(data).length);
        } catch (e) {
          reject(e);
        }
      }, 1000)
    );
  }
};

const parseJson = data => {
  return JSON.parse(data);
};

const getRandomIndex = dataLength => {
  let indexArray = [];
  for (let i = 0; i < countServicesForRender; i++) {
    let index = randomInteger(Const.min, dataLength - 1);
    if (indexArray.length && indexArray.some(i => i === index)) {
      i--;
    } else {
      indexArray = indexArray.concat(index);
    }
  }
  return indexArray;
};

export const fetchData = async () => {
  await dataIsLoading(false);
  let arrayFromServer = await GET_DATA.getDataFromServer();
  let indexArray = await getRandomIndex(arrayFromServer.length);
  await dataIsLoading(true);
  return indexArray.map(item => arrayFromServer[item]);
};
