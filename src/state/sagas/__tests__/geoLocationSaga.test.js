import * as matchers from 'redux-saga-test-plan/matchers';
import { throwError } from 'redux-saga-test-plan/providers';
import geoLocationSaga from '../geoLocationSaga';
import { geoLocationFetch, geoLocationFetchSuccess, geoLocationFetchFail } from '@slice/geoLocationSlice';
import { getGeoInfo } from '@utils/requests';
import { expectSaga } from 'redux-saga-test-plan';

describe('geoLocationSaga', () => {
    it("success requests", () => {
        return expectSaga(geoLocationSaga)
            .provide([
                [matchers.call.fn(getGeoInfo), { currency: "USD" }]
            ])
            .put({ type: geoLocationFetchSuccess.type, payload: "USD" })
            .dispatch({ type: geoLocationFetch.type })
            .silentRun();
    });

    it("fail requests", () => {
        const error = new Error('error');

        return expectSaga(geoLocationSaga)
            .provide([
                [matchers.call.fn(getGeoInfo), throwError(error)]
            ])
            .put({ type: geoLocationFetchFail.type, payload: undefined })
            .dispatch({ type: geoLocationFetch.type })
            .silentRun();
    });

    it("uncorrect response", () => {
        return expectSaga(geoLocationSaga)
            .provide([
                [matchers.call.fn(getGeoInfo), null]
            ])
            .put({ type: geoLocationFetchFail.type, payload: undefined })
            .dispatch({ type: geoLocationFetch.type })
            .silentRun();
    });
});