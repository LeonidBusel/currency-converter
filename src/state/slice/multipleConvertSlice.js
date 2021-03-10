import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
    isFetching: false,
    columns: [],
    dataSource: [],
    currency: null
}

export const multipleConvertSlice = createSlice({
    name: 'multipleConvert',
    initialState,
    reducers: {
        multipleConvertFetch: state => {
            state.isFetching = true;
        },
        multipleConvertFetchSuccess: (state, { payload }) => {
            state.isFetching = false;
            state.columns = payload.columns.slice();
            state.dataSource = payload.dataSource.slice();
            state.currency = payload.currency;
        },
        multipleConvertFetchFail: (state) => {
            state.isFetching = false;
            state.columns = [];
            state.dataSource = [];
            state.currency = null;
        },
        multipleConvertClear: (state) => {
            state.isFetching = false;
            state.columns = [];
            state.dataSource = [];
            state.currency = null;
        }
    }
})

export const { multipleConvertFetch, multipleConvertFetchSuccess, multipleConvertFetchFail, multipleConvertClear } = multipleConvertSlice.actions

export default multipleConvertSlice.reducer