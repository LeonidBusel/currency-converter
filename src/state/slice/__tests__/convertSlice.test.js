import convertSlice, { initialState, convertFetch, convertFetchSuccess, convertFetchFail, convertClear } from "../convertSlice";

const modifyState = {
    "amount": 55,
    "convert": {
        "a": 1,
        "b": 2,
    },
    "isFetching": false
}

describe('convertSlice', () => {
    it('handle convertFetch correctly', () => {
        const actual = convertSlice(initialState, convertFetch());

        expect(actual).toMatchSnapshot();
    });

    it('handle convertFetchSuccess correctly', () => {
        const actual = convertSlice(initialState, convertFetchSuccess({ convert: { a: 1, b: 2 }, amount: 55 }));

        expect(actual).toMatchSnapshot();
    });

    it('handle convertFetchFail correctly', () => {
        const actual = convertSlice(modifyState, convertFetchFail());

        expect(actual).toMatchSnapshot();
    });

    it('handle convertClear correctly', () => {
        const actual = convertSlice(modifyState, convertClear());

        expect(actual).toMatchSnapshot();
    });
});