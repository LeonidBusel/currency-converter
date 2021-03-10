import * as matchers from 'redux-saga-test-plan/matchers';
import { throwError } from 'redux-saga-test-plan/providers';
import convertSaga from '../convertSaga';
import { convertFetch, convertFetchSuccess, convertFetchFail } from '@slice/convertSlice';
import { convert } from '@utils/requests';
import { expectSaga } from 'redux-saga-test-plan';

const convertRequestMock = { a: 1, b: 2 };
const fetchPayloadMock = { convert: "USD_USD", amount: 55 };

describe('convertSaga', () => {
    it("success requests", () => {
        return expectSaga(convertSaga, fetchPayloadMock)
            .provide([
                [matchers.call.fn(convert), convertRequestMock]
            ])
            .put({ type: convertFetchSuccess.type, payload: { convert: convertRequestMock, amount: 55 } })
            .dispatch({ type: convertFetch.type, payload: fetchPayloadMock })
            .silentRun();
    });

    it("fail requests", () => {
        const error = new Error('error');

        return expectSaga(convertSaga, fetchPayloadMock)
            .provide([
                [matchers.call.fn(convert), throwError(error)]
            ])
            .put({ type: convertFetchFail.type, payload: undefined })
            .dispatch({ type: convertFetch.type, payload: fetchPayloadMock })
            .silentRun();
    });

    it("uncorrect response", () => {
        return expectSaga(convertSaga, fetchPayloadMock)
            .provide([
                [matchers.call.fn(convert), null]
            ])
            .put({ type: convertFetchFail.type, payload: undefined })
            .dispatch({ type: convertFetch.type, payload: fetchPayloadMock })
            .silentRun();
    });
});