import PropTypes from 'prop-types';
import css from "./Statistics.module.css";

export default function  Statistics(props) {

    const { label, percentage } = props;

    return (
      <div>
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage}%</span>
      </div>
    )
}


Statistics.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
}