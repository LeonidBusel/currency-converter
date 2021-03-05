import { handleActions } from 'redux-actions';
import * as actions from '@actions/convertCurrencyAction';

const initialState = {
  isFetching: false,
  convert: {},
  amount: 0
};

export default handleActions({
  [actions.convertCurrencyFetch]: (state) => ({
    ...state,
    isFetching: true
  }),
  [actions.convertCurrencyFetchSuccess]: (state, { payload }) => ({
    ...state,
    isFetching: false,
    convert: Object.assign({}, payload.convert),
    amount: payload.amount
  }),
  [actions.convertCurrencyFetchFail]: (state) => ({
    ...state,
    isFetching: false,
    convert: {},
    amount: 0
  }),
  [actions.convertCurrencyClear]: (state) => ({
    ...state,
    isFetching: false,
    convert: {},
    amount: 0
  })
}, initialState);