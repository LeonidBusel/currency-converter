import { createAction } from 'redux-actions';

export const currenciesListFetch = createAction('CURRENCIES_LIST_FETCH');
export const currenciesListFetchSuccess = createAction('CURRENCIES_LIST_FETCH_SUCCESS');
export const currenciesListFetchFail = createAction('CURRENCIES_LIST_FETCH_FAIL');