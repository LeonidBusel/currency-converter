import React, { useState } from 'react';
import PropTypes from "prop-types";
import { Input } from "antd";
import { CurrencySelect } from "@components";

const AmountInput = ({ value = {}, onChange, currenciesList, isFetchingList }) => {
  const [number, setNumber] = useState(0);
  const [currencyFrom, setCurrencyFrom] = useState('USD');
  const [currencyTo, setCurrencyTo] = useState('USD');

  const triggerChange = (changedValue) => {
    onChange?.({
      number,
      currencyFrom,
      currencyTo,
      ...value,
      ...changedValue,
    });
  };

  const onNumberChange = (e) => {
    const newNumber = parseInt(e.target.value || '0', 10);

    if (Number.isNaN(number)) {
      return;
    }

    if (!('number' in value)) {
      setNumber(newNumber);
    }



    triggerChange({
      number: newNumber,
    });
  };

  const onCurrencyFromChange = (newCurrency) => {
    if (!('currencyFrom' in value)) {
      setCurrencyFrom(newCurrency);
    }

    triggerChange({
      currencyFrom: newCurrency,
    });
  };

  const onCurrencyToChange = (newCurrency) => {
    if (!('currencyTo' in value)) {
      setCurrencyTo(newCurrency);
    }

    triggerChange({
      currencyTo: newCurrency,
    });
  };

  return (
    <>
      <Input
        type="text"
        value={value.number || number}
        onChange={onNumberChange}
        style={{
          width: 100,
        }}
      />

      <CurrencySelect
        isFetchingList={isFetchingList}
        currenciesList={currenciesList}
        value={(isFetchingList && "loading") || value.currencyFrom || currencyFrom}
        onChange={onCurrencyFromChange} />

      <CurrencySelect
        isFetchingList={isFetchingList}
        currenciesList={currenciesList}
        value={(isFetchingList && "loading") || value.currencyTo || currencyTo}
        onChange={onCurrencyToChange} />

    </>
  );
};

AmountInput.propTypes = {
  value: PropTypes.object,
  onChange: PropTypes.func,
  currenciesList: PropTypes.array,
  isFetchingList: PropTypes.bool
}

export default AmountInput;