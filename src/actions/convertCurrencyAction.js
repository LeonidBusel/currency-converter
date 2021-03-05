import { createAction } from 'redux-actions';

export const convertCurrencyFetch = createAction('CONVERT_CURRENCY_FETCH');
export const convertCurrencyFetchSuccess = createAction('CONVERT_CURRENCY_FETCH_SUCCESS');
export const convertCurrencyFetchFail = createAction('CONVERT_CURRENCY_FETCH_FAIL');

export const convertCurrencyClear = createAction('CONVERT_CURRENCY_CLEAR');
