import { call, put, takeLatest } from 'redux-saga/effects';
import { multipleConvertFetch, multipleConvertFetchSuccess, multipleConvertFetchFail } from '@slice/multipleConvertSlice';
import { multipleConvert } from '@utils/requests';
import { parseConvertToTableData } from "@utils/helper";

function* multipleConvertSaga({ payload }) {
    try {
        const response = yield call(multipleConvert, payload.pairs);

        const parseData = parseConvertToTableData(response);

        yield put(multipleConvertFetchSuccess({ ...parseData, currency: payload.currency }));
    } catch (exception) {
        yield put(multipleConvertFetchFail());
    }
}

export default function* () {
    yield takeLatest(multipleConvertFetch, multipleConvertSaga);
}