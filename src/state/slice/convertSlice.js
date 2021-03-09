import { createSlice } from '@reduxjs/toolkit'

export const convertSlice = createSlice({
    name: 'convert',
    initialState: {
        isFetching: false,
        convert: {},
        amount: 0
    },
    reducers: {
        convertFetch: state => {
            state.isFetching = true;
        },
        convertFetchSuccess: (state, { payload }) => {
            state.isFetching = false;
            state.convert = Object.assign({}, payload.convert);
            state.amount = payload.amount
        },
        convertFetchFail: (state) => {
            state.isFetching = false;
            state.convert = {};
            state.amount = 0;
        },
        convertClear: (state) => {
            state.isFetching = false;
            state.convert = {};
            state.amount = 0;
        }
    }
})

export const { convertFetch, convertFetchSuccess, convertFetchFail, convertClear } = convertSlice.actions

export default convertSlice.reducer