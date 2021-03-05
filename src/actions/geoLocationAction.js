import { createAction } from 'redux-actions';

export const geoLocationFetch = createAction('GEO_LOCATION_FETCH');
export const geoLocationFetchSuccess = createAction('GEO_LOCATION_FETCH_SUCCESS');
export const geoLocationFetchFail = createAction('GEO_LOCATION_FETCH_FAIL');