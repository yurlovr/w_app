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
      array.map(item => data[item] )
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
