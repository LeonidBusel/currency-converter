import PropTypes from "prop-types";
import { Spin } from 'antd';

import "./ConvertResult.scss";

const ConvertResult = ({ convertCurrency }) => {
    const { amount, convert, isFetching } = convertCurrency;
    const isConverted = amount !== 0;
    let splitKey, amountTo;

    if (isConverted) {
        for (const [key, value] of Object.entries(convert)) {
            splitKey = key.split("_");
            amountTo = (amount * value.val).toFixed(2);
        }
    }

    if (isFetching) {
        return <div className="spin-wrapper"><Spin /></div>;
    }

    return (<>
        { isConverted &&
            <div className="converter-result">
                <div>{amount} {splitKey[0]} = <span className="green">{amountTo}</span> {splitKey[1]}</div>
            </div>}
    </>
    )
}

ConvertResult.propTypes = {
    convertCurrency: PropTypes.object.isRequired
}

export default ConvertResult;