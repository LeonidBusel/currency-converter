import * as matchers from 'redux-saga-test-plan/matchers';
import { throwError } from 'redux-saga-test-plan/providers';
import listCurrenciesSaga from '../listCurrenciesSaga';
import { currenciesListFetch, currenciesListFetchSuccess, currenciesListFetchFail } from '@slice/currenciesListSlice';
import { getListCurrencies } from '@utils/requests';
import { expectSaga } from 'redux-saga-test-plan';

const mockResponse = { data: { results: { "USD": [], "EUR": [] } } };

describe('listCurrenciesSaga', () => {
    it("success requests", () => {
        return expectSaga(listCurrenciesSaga)
            .provide([
                [matchers.call.fn(getListCurrencies), mockResponse]
            ])
            .put({ type: currenciesListFetchSuccess.type, payload: Object.values(mockResponse.data.results) })
            .dispatch({ type: currenciesListFetch.type })
            .silentRun();
    });

    it("fail requests", () => {
        const error = new Error('error');

        return expectSaga(listCurrenciesSaga)
            .provide([
                [matchers.call.fn(getListCurrencies), throwError(error)]
            ])
            .put({ type: currenciesListFetchFail.type, payload: undefined })
            .dispatch({ type: currenciesListFetch.type })
            .silentRun();
    });

    it("uncorrect response", () => {
        return expectSaga(listCurrenciesSaga)
            .provide([
                [matchers.call.fn(getListCurrencies), { data: { results: null } }]
            ])
            .put({ type: currenciesListFetchFail.type, payload: undefined })
            .dispatch({ type: currenciesListFetch.type })
            .silentRun();
    });
});