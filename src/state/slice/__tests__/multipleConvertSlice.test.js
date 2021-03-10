import multipleConvertSlice, {
    initialState,
    multipleConvertFetch,
    multipleConvertFetchSuccess,
    multipleConvertFetchFail,
    multipleConvertClear
} from "../multipleConvertSlice";

const modifyState = {
    "isFetching": false,
    "columns": [1, 2],
    "dataSource": [3, 4],
    "currency": 55
}

describe('multipleConvertSlice', () => {
    it('handle multipleConvertFetch correctly', () => {
        const actual = multipleConvertSlice(initialState, multipleConvertFetch());

        expect(actual).toMatchSnapshot();
    });

    it('handle multipleConvertFetchSuccess correctly', () => {
        const actual = multipleConvertSlice(initialState, multipleConvertFetchSuccess({ columns: [1, 2], dataSource: [3, 4], currency: 55 }));

        expect(actual).toMatchSnapshot();
    });

    it('handle multipleConvertFetchFail correctly', () => {
        const actual = multipleConvertSlice(modifyState, multipleConvertFetchFail());

        expect(actual).toMatchSnapshot();
    });

    it('handle multipleConvertClear correctly', () => {
        const actual = multipleConvertSlice(modifyState, multipleConvertClear());

        expect(actual).toMatchSnapshot();
    });
});