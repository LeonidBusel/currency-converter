import currenciesListSlice, { initialState, currenciesListFetch, currenciesListFetchSuccess, currenciesListFetchFail } from "../currenciesListSlice";

const modifyState = {
    "isFetching": false,
    "isLoad": true,
    "list": [1, 2]
}

describe('currenciesListSlice', () => {
    it('handle currenciesListFetch correctly', () => {
        const actual = currenciesListSlice(initialState, currenciesListFetch());

        expect(actual).toMatchSnapshot();
    });

    it('handle currenciesListFetchSuccess correctly', () => {
        const actual = currenciesListSlice(initialState, currenciesListFetchSuccess([1, 2]));

        expect(actual).toMatchSnapshot();
    });

    it('handle currenciesListFetchFail correctly', () => {
        const actual = currenciesListSlice(modifyState, currenciesListFetchFail());

        expect(actual).toMatchSnapshot();
    });
});