import { call, put, takeLatest } from 'redux-saga/effects';
import { convertCurrencyFetch, convertCurrencyFetchSuccess, convertCurrencyFetchFail } from '@actions/convertCurrencyAction';
import { convert } from '@utils/requests';

function* convertCurrencySaga({payload}) {
    try {
        const response = yield call(convert, payload.convert);

        if(response) {
            yield put(convertCurrencyFetchSuccess({convert: response, amount: payload.amount}));
        } else {
            yield put(convertCurrencyFetchFail());
        }
    } catch (exception) {
        yield put(convertCurrencyFetchFail());
    }
}

export default function* () {
    yield takeLatest(convertCurrencyFetch, convertCurrencySaga);
}