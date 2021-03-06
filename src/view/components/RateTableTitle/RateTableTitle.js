import PropTypes from "prop-types";
import './RateTableTitle.scss';

const RateTableTitle = ({ imgSrc, title }) => {
    return <div className="rate-table-title-wrapper"><img alt="" width="20" src={imgSrc} />{title}</div>
}

RateTableTitle.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}

export default RateTableTitle;