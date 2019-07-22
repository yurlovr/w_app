import { data } from "./data";
export const GET_DATA = {

  getDataFromServer: array => {
    return new Promise(resolve =>
      setTimeout(() => resolve(JSON.parse(data)), 5000)
    ).then(data =>
      data.filter((d, index) => array.find(item => item === index))
    );
  },

  getDataLength: () => {
    return new Promise(resolve =>
      setTimeout(() => resolve(JSON.parse(data).length), 5000)
    );
  }
};
