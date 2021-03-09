import './RateTableTitle.scss';

const RateTableTitle = ({ imgSrc, title }) => {
    return <div className="rate-table-title-wrapper"><img alt="" width="20" src={imgSrc} />{title}</div>
}

export default RateTableTitle;