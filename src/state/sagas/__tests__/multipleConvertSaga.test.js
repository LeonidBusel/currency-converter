import * as matchers from 'redux-saga-test-plan/matchers';
import { throwError } from 'redux-saga-test-plan/providers';
import multipleConvertSaga from '../multipleConvertSaga';
import { multipleConvertFetch, multipleConvertFetchSuccess, multipleConvertFetchFail } from '@slice/multipleConvertSlice';
import { multipleConvert } from '@utils/requests';
import { expectSaga } from 'redux-saga-test-plan';

const convertRequestMock = [];
const fetchPayloadMock = { currency: "USD", pairs: "USD_EUR,USD_AUD" };

describe('multipleConvertSaga', () => {
    it("success requests", () => {
        return expectSaga(multipleConvertSaga, fetchPayloadMock)
            .provide([
                [matchers.call.fn(multipleConvert), convertRequestMock]
            ])
            .put({ type: multipleConvertFetchSuccess.type, payload: { currency: fetchPayloadMock.currency, columns: [], dataSource: [{ key: "1" }] } })
            .dispatch({ type: multipleConvertFetch.type, payload: fetchPayloadMock })
            .silentRun();
    });

    it("fail requests", () => {
        const error = new Error('error');

        return expectSaga(multipleConvertSaga, fetchPayloadMock)
            .provide([
                [matchers.call.fn(multipleConvert), throwError(error)]
            ])
            .put({ type: multipleConvertFetchFail.type, payload: undefined })
            .dispatch({ type: multipleConvertFetch.type, payload: fetchPayloadMock })
            .silentRun();
    });
});