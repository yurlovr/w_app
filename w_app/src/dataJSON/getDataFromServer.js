import { data } from "./data";
export const GET_DATA = {
  getDataFromServer: array => {
    return new Promise((resolve, reject) =>
      setTimeout(() => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          reject(e);
        }
      }, 5000)
    ).then(data =>
      data.filter((d, index) => array.find(item => item === index))
    );
  },

  getDataLength: () => {
    return new Promise((resolve, reject) =>
      setTimeout(() => {
        try {
          resolve(JSON.parse(data).length);
        } catch (e) {
          reject(e);
        }
      }, 1000)
    );
  }
};
