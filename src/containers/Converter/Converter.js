import { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { convertCurrencyFetch, convertCurrencyClear } from '@actions/convertCurrencyAction';
import { Card, Form, Button } from "antd";
import { AmountInput, ConvertResult } from "@components";

import "./Converter.scss";



const Converter = (props) => {
    const [form] = Form.useForm();
    const { listCurrencies, convertCurrency, userLocation } = props

    /* update */
    useEffect(() => {
        const { currency, isLoaded } = userLocation;

        if (currency !== null && isLoaded) {

            form.setFieldsValue({
                amount: { currencyFrom: currency }
            });
        }
    }, [userLocation]);

    /* unmount */
    useEffect(() => {
        return () => {
            props.convertCurrencyClear();
        }
    }, [])

    const onFinish = (values) => {
        const { convertCurrencyFetch } = props;
        const { number, currencyFrom, currencyTo } = values.amount;

        convertCurrencyFetch({ convert: `${currencyFrom}_${currencyTo}`, amount: number });
    };

    const checkPrice = (_, value) => {
        if (value.number > 0) {
            return Promise.resolve();
        }

        return Promise.reject(new Error('Amount must be greater than zero!'));
    };

    return (
        <Card className="converter-wrapper" bordered={false}>
            <Form
                form={form}
                name="converter-form"
                layout="inline"
                size="large"
                onFinish={onFinish}
                initialValues={{
                    amount: {
                        number: 0,
                        currencyFrom: 'USD',
                        currencyTo: 'EUR',
                    },
                }}>
                <Form.Item
                    name="amount"
                    label="Amount"
                    rules={[
                        {
                            validator: checkPrice,
                        },
                    ]}>
                    <AmountInput listCurrencies={listCurrencies.list} isFetchingList={listCurrencies.isFetching} />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" disabled={!listCurrencies.isLoad}>
                        Convert
                        </Button>
                </Form.Item>
            </Form>

            <ConvertResult convertCurrency={convertCurrency} />
        </Card>
    )
}


function mapStateToProps(state) {
    return {
        listCurrencies: state.listCurrencies,
        convertCurrency: state.convertCurrency,
        userLocation: state.geoLocation
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        convertCurrencyFetch: convertCurrencyFetch,
        convertCurrencyClear: convertCurrencyClear
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Converter);