import { combineReducers } from 'redux';
import listCurrencies from './listCurrenciesReducer';
import convertCurrency from './convertCurrencyReducer';
import multipleConvert from './multipleConvertReducer';
import geoLocation from './getLocationReducer';

export default combineReducers({
  listCurrencies,
  convertCurrency,
  multipleConvert,
  geoLocation
});