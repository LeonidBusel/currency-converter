import { handleActions } from 'redux-actions';
import * as actions from '@actions/geoLocationAction';

const initialState = {
  isFetching: false,
  isLoaded: false,
  currency: null
};

export default handleActions({
  [actions.geoLocationFetch]: (state) => ({
    ...state,
    isFetching: true
  }),
  [actions.geoLocationFetchSuccess]: (state, { payload }) => ({
    ...state,
    isFetching: false,
    isLoaded: true,
    currency: payload
  }),
  [actions.geoLocationFetchFail]: (state) => ({
    ...state,
    isFetching: false,
    isLoaded: false,
    currency: null
  })
}, initialState);