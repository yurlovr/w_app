import { data } from "./data";
export const GET_DATA = {
  getDataFromServer: array => {
    return new Promise((resolve, reject) =>
      setTimeout(() => {
        try {
          resolve(parseJson(data));
        } catch (e) {
          reject(e);
        }
      }, 2000)
    ).then(data =>
      data.filter((d, index) => array.find(item => item === index )) // осмотреть
    );
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

const parseJson =(data)=> {
  return JSON.parse(data)
};
