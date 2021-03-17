import PropTypes from "prop-types";
import { AmountInput, ConvertResult } from "@components";
import { convertClear, convertFetch } from '@slice/convertSlice';
import { Button, Card, Form } from "antd";
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import "./Converter.scss";




const Converter = (props) => {
    const [form] = Form.useForm();
    const { currenciesList, convertCurrency, userLocation } = props

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
            props.convertClear();
        }
    }, [])

    const onFinish = (values) => {
        const { convertFetch } = props;
        const { number, currencyFrom, currencyTo } = values.amount;

        convertFetch({ convert: `${currencyFrom}_${currencyTo}`, amount: number });
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
                    <AmountInput currenciesList={currenciesList.list} isFetchingList={currenciesList.isFetching} />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" disabled={!currenciesList.isLoad}>
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
        currenciesList: state.currenciesList,
        convertCurrency: state.convertCurrency,
        userLocation: state.geoLocation
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        convertFetch,
        convertClear
    }, dispatch);
}

Converter.propTypes = {
    currenciesList: PropTypes.object,
    convertCurrency: PropTypes.object,
    userLocation: PropTypes.object,
    convertFetch: PropTypes.func.isRequired
  }

export default connect(mapStateToProps, mapDispatchToProps)(Converter);