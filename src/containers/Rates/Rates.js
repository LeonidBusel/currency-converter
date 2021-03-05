import React, { useState, useEffect } from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { multipleConvertFetch, multipleConvertClear } from '@actions/multipleConvertAction';
import { Form, Card, Button } from "antd";
import { RatesTable, CurrencySelect } from "@components";
import { MAJOR_CURRENCIES } from "@utils/consts";

import "./Rates.scss";

const Rates = (props) => {
    const [form] = Form.useForm();
    const [currency, setCurrency] = useState('USD');
    
    const { listCurrencies, multipleConvert, userLocation } = props;
    const { isFetching, list, isLoad } = listCurrencies;

    /* update */
    useEffect(() => {
        const { currency, isLoaded } = userLocation;

        if (currency !== null && isLoaded) {
            form.setFieldsValue({
                currencyFrom: currency
            });
        }
    }, [userLocation]);
    
    /* unmount */
    useEffect(() => {
        return () => {
            props.multipleConvertClear();
        }
    }, [])

    const onFinish = (values) => {
        const pairs = MAJOR_CURRENCIES.map(currency => `${currency}_${values.currencyFrom}`);

        props.multipleConvertFetch({ pairs, currency });
    };

    const onCurrencyChange = (newCurrency) => {
        setCurrency(newCurrency);
    };

    return (
        <Card className="rates-wrapper" bordered={false}>
            <Form
                form={form}
                name="rates-form"
                layout="inline"
                size="large"
                onFinish={onFinish}
                initialValues={{
                    currencyFrom: 'USD'
                }}>

                <Form.Item name="currencyFrom">
                    <CurrencySelect
                        isFetchingList={isFetching}
                        listCurrencies={list}
                        value={(isFetching && "loading") || currency}
                        onChange={onCurrencyChange} />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" disabled={!isLoad}>
                        Calculate
                        </Button>
                </Form.Item>
            </Form>

            <div className="rates-table-wrapper">
                <RatesTable multipleConvert={multipleConvert} />
            </div>
        </Card>
    )
}

function mapStateToProps(state) {
    return {
        listCurrencies: state.listCurrencies,
        multipleConvert: state.multipleConvert,
        userLocation: state.geoLocation
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        multipleConvertFetch: multipleConvertFetch,
        multipleConvertClear: multipleConvertClear
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Rates);