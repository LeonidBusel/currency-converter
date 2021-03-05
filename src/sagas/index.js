import { fork, all } from 'redux-saga/effects';
import listCurrenciesSaga from './listCurrenciesSaga';
import convertCurrencySaga from './convertCurrencySaga';
import multipleConvertSaga from './multipleConvertSaga';
import geoLocationSaga from './geoLocationSaga';

export default function* () {
  yield all([
    fork(listCurrenciesSaga),
    fork(convertCurrencySaga),
    fork(multipleConvertSaga),
    fork(geoLocationSaga)
  ]);
}