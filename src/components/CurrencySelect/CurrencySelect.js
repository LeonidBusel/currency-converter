import React from "react";
import { Select, Spin } from "antd";

const { Option } = Select;

const CurrencySelect = React.memo(({ isFetchingList, listCurrencies, value, onChange }) => {
    let currenciesOptions;

    if (isFetchingList) {
        currenciesOptions = <Option value="loading"><Spin /></Option>
    } else {
        currenciesOptions = (listCurrencies || []).map(currency => {
            const { id } = currency;

            return <Option key={id} value={id}>{id}</Option>;
        });
    }

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
})

export default CurrencySelect;