import { flags } from "@utils/flag";
import { RateTableTitle } from "@components";

export const parseConvertToTableData = (multipleConvertInfo = []) => {
    const columns = [];
    const dataSource = [];
    const dataObj = { key: "1" };

    multipleConvertInfo.forEach((info, index) => {
        const colObj = {};

        for (const [key, value] of Object.entries(info)) {
            const splitKey = key.split("_");
            const currencyCode = splitKey[0];
            const colKey = currencyCode.toLowerCase();

            colObj.title = <RateTableTitle imgSrc={flags[currencyCode]} title={currencyCode}/>;
            colObj.key = colKey;
            colObj.dataIndex = colKey;

            dataObj[colKey] = value.val.toFixed(2);
        }

        columns.push(colObj);
    });

    dataSource.push(dataObj);

    return { columns, dataSource };
};