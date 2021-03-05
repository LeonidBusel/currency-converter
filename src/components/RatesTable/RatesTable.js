import { Table, Spin } from "antd";

const RatesTable = ({ multipleConvert }) => {
    const { columns, dataSource, isFetching } = multipleConvert;

    if(isFetching) {
        return (<Spin />)
    }

    return (
        <Table columns={columns} dataSource={dataSource} pagination={false}/>
    )
}

export default RatesTable;