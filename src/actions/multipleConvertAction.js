import { createAction } from 'redux-actions';

export const multipleConvertFetch = createAction('MULTIPLE_CONVERT_FETCH');
export const multipleConvertFetchSuccess = createAction('MULTIPLE_CONVERT_FETCH_SUCCESS');
export const multipleConvertFetchFail = createAction('MULTIPLE_CONVERT_FETCH_FAIL');

export const multipleConvertClear = createAction('MYLTIPLE_CONVERT_CLEAR');