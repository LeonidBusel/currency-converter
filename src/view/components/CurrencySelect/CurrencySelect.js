import React, { useMemo } from "react";
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
})

export default CurrencySelect;