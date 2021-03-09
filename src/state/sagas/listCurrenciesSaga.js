import { call, put, takeLatest } from 'redux-saga/effects';
import { currenciesListFetch, currenciesListFetchSuccess, currenciesListFetchFail } from '@slice/currenciesListSlice';
import { getListCurrencies } from '@utils/requests';

function* listCurrenciesSaga() {
    try {
        const response = yield call(getListCurrencies);

        if(response.data.results) {
            const list = Object.values(response.data.results);

            yield put(currenciesListFetchSuccess(list));
        } else {
            yield put(currenciesListFetchFail());
        }
    } catch (exception) {
        yield put(currenciesListFetchFail());
    }
}

export default function* () {
    yield takeLatest(currenciesListFetch, listCurrenciesSaga);
}