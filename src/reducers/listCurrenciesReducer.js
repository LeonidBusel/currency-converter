import { handleActions } from 'redux-actions';
import * as actions from '@actions/listCurrenciesAction';

const initialState = {
  isLoad: false,
  isFetching: false,
  list: []
};

export default handleActions({
  [actions.currenciesListFetch]: (state) => ({
    ...state,
    isFetching: true
  }),
  [actions.currenciesListFetchSuccess]: (state, { payload }) => ({
    ...state,
    isFetching: false,
    isLoad: true,
    list: payload.slice()
  }),
  [actions.currenciesListFetchFail]: (state) => ({
    ...state,
    isFetching: false,
    list: []
  })
}, initialState);