import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
    isFetching: false,
    isLoaded: false,
    currency: null
};

export const geoLocationSlice = createSlice({
    name: 'geoLocation',
    initialState,
    reducers: {
        geoLocationFetch: state => {
            state.isFetching = true;
        },
        geoLocationFetchSuccess: (state, { payload }) => {
            state.isFetching = false;
            state.isLoaded = true;
            state.currency = payload;
        },
        geoLocationFetchFail: (state) => {
            state.isFetching = false;
            state.isLoaded = false;
            state.currency = null;
        }
    }
})

export const { geoLocationFetch, geoLocationFetchSuccess, geoLocationFetchFail } = geoLocationSlice.actions

export default geoLocationSlice.reducer