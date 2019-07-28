import { data } from "./data";
import randomInteger from "../helperFunction/randomInteger";
import { Const } from "../Const/Const";

const countServicesForRender = randomInteger(Const.MIN, Const.MAX);

export const fetchData = async () => {
  let arrayFromServer = await getDataFromServer();
  let indexArray = await getRandomIndex(arrayFromServer.length);
  return indexArray.map(item => arrayFromServer[item]);
};

const getDataFromServer = () => {
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      try {
        resolve(parseJson(data))
      } catch (e) {
        reject(e);
      }
    }, Const.DATA_DELAY)
  );
};

const parseJson = data => {
  return JSON.parse(data);
};

const getRandomIndex = dataLength => {
  let indexArray = new Set();
  while (indexArray.size !== countServicesForRender){
    let index = randomInteger(Const.MIN-1, dataLength - 1);
    indexArray.add(index);
  }
  return Array.from(indexArray);
};
