import { call, put, takeLatest } from 'redux-saga/effects';
import { convertFetch, convertFetchSuccess, convertFetchFail } from '@slice/convertSlice';
import { convert } from '@utils/requests';

function* convertSaga({ payload }) {
    try {
        const response = yield call(convert, payload.convert);

        if (response) {
            yield put(convertFetchSuccess({ convert: response, amount: payload.amount }));
        } else {
            yield put(convertFetchFail());
        }
    } catch (exception) {
        yield put(convertFetchFail());
    }
}

export default function* () {
    yield takeLatest(convertFetch, convertSaga);
}