import React, { useMemo } from "react";
import PropTypes from "prop-types";
import { Select, Spin } from "antd";

const { Option } = Select;

const CurrencySelect = React.memo(({ isFetchingList, currenciesList = [], value, onChange }) => {
    let currenciesOptions;

    currenciesOptions = useMemo(() => {
        if (isFetchingList) {
            return <Option value="loading"><Spin /></Option>;
        } else {
            return currenciesList.map(currency => {
                const { id } = currency;

                return <Option key={id} value={id}>{id}</Option>;
            })
        };
    }, [currenciesList, isFetchingList])

    return (
        <Select
            showSearch
            value={value}
            style={{
                width: 80,
                margin: '0 8px',
            }}
            onChange={onChange}
        >
            {currenciesOptions}
        </Select>
    )
});

CurrencySelect.propTypes = {
    isFetchingList: PropTypes.bool.isRequired,
    currenciesList: PropTypes.array,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func

}

export default CurrencySelect;