import geoLocationSlice, { initialState, geoLocationFetch, geoLocationFetchSuccess, geoLocationFetchFail } from "../geoLocationSlice";

const modifyState = {
    "currency": 55,
    "isLoaded": false,
    "isFetching": false
}

describe('geoLocationSlice', () => {
    it('handle geoLocationFetch correctly', () => {
        const actual = geoLocationSlice(initialState, geoLocationFetch());

        expect(actual).toMatchSnapshot();
    });

    it('handle geoLocationFetchSuccess correctly', () => {
        const actual = geoLocationSlice(initialState, geoLocationFetchSuccess(55));

        expect(actual).toMatchSnapshot();
    });

    it('handle geoLocationFetchFail correctly', () => {
        const actual = geoLocationSlice(modifyState, geoLocationFetchFail());

        expect(actual).toMatchSnapshot();
    });
});