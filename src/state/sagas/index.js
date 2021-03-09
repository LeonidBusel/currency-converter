import { fork, all } from 'redux-saga/effects';
import listCurrenciesSaga from './listCurrenciesSaga';
import convertSaga from './convertSaga';
import multipleConvertSaga from './multipleConvertSaga';
import geoLocationSaga from './geoLocationSaga';

export default function* rootSaga() {
  yield all([
    fork(listCurrenciesSaga),
    fork(convertSaga),
    fork(multipleConvertSaga),
    fork(geoLocationSaga)
  ]);
}