import { call, put, takeLatest } from 'redux-saga/effects';
import { geoLocationFetch, geoLocationFetchSuccess, geoLocationFetchFail } from '@actions/geoLocationAction';
import { getGeoInfo } from '@utils/requests';

function* geoLocationSaga() {
    try {
        const response = yield call(getGeoInfo);

        if(response) {
            yield put(geoLocationFetchSuccess(response.currency));
        } else {
            yield put(geoLocationFetchFail());
        }
    } catch (exception) {
        yield put(geoLocationFetchFail());
    }
}

export default function* () {
    yield takeLatest(geoLocationFetch, geoLocationSaga);
}