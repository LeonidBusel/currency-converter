import axios from 'axios';

const apiKey = "55d629991c9851622856";

const axiosInstance = axios.create({
  baseURL: 'https://free.currconv.com/api/v7'
});

export const getListCurrencies = () => {
  return new Promise((resolve, reject) => {
    axiosInstance.get(`/currencies?apiKey=${apiKey}`)
      .then(response => resolve(response))
      .catch(error => reject(error));
  });
};

export const convert = (currency) => {
  return new Promise((resolve, reject) => {
    axiosInstance.get(`/convert?apiKey=${apiKey}&q=${currency}&compact=y`)
      .then(response => resolve(response.data))
      .catch(error => reject(error));
  });
};

export const multipleConvert = (pairs = []) => {
  return new Promise((resolve, reject) => {
    Promise.all(pairs.map(pair => convert(pair)))
      .then(response => resolve(response))
      .catch(error => reject(error))
  })
};

export const getGeoInfo = () => {
  return new Promise((resolve, reject) => {
    axios.get('https://ipapi.co/json/')
      .then(response => resolve(response.data))
      .catch(error => reject(error))
  });
};
