import { handleActions } from 'redux-actions';
import * as actions from '@actions/multipleConvertAction';

const initialState = {
  isFetching: false,
  columns: [],
  dataSource: [],
  currency: null
};

export default handleActions({
  [actions.multipleConvertFetch]: (state) => ({
    ...state,
    isFetching: true
  }),
  [actions.multipleConvertFetchSuccess]: (state, { payload }) => ({
    ...state,
    isFetching: false,
    columns: payload.columns.slice(),
    dataSource: payload.dataSource.slice(),
    currency: payload.currency
  }),
  [actions.multipleConvertFetchFail]: (state) => ({
    ...state,
    isFetching: false,
    columns: [],
    dataSource: [],
    currency: null
  }),
  [actions.multipleConvertClear]: (state) => ({
    ...state,
    isFetching: false,
    columns: [],
    dataSource: [],
    currency: null
  })
}, initialState);