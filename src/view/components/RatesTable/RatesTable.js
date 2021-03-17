import PropTypes from "prop-types";
import { Table, Spin } from "antd";
import { RateTableTitle } from "@components";

const RatesTable = ({ multipleConvert }) => {
    const { columns, dataSource, isFetching } = multipleConvert;

    const renderColumns = columns.map(column => {
        const { title } = column;

        const renderColumn = Object.assign({...column}, {title: <RateTableTitle imgSrc={title.imgSrc} title={title.title} />});

        return renderColumn;
    });

    if (isFetching) {
        return (<Spin />)
    }

    return (
        <Table columns={renderColumns} dataSource={dataSource} pagination={false} />
    )
}

RatesTable.propTypes = {
    multipleConvert: PropTypes.object.isRequired
}

export default RatesTable;