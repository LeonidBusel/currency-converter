import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
    isFetching: false,
    isLoad: false,
    list: []
};

export const currenciesListSlice = createSlice({
    name: 'currenciesList',
    initialState,
    reducers: {
        currenciesListFetch: state => {
            state.isFetching = true;
        },
        currenciesListFetchSuccess: (state, { payload }) => {
            state.isFetching = false;
            state.isLoad = true;
            state.list = payload.slice();
        },
        currenciesListFetchFail: (state) => {
            state.isFetching = false;
            state.list = [];
        }
    }
})

export const { currenciesListFetch, currenciesListFetchSuccess, currenciesListFetchFail } = currenciesListSlice.actions

export default currenciesListSlice.reducer