import PropTypes from 'prop-types';

export default function  Statistics(props) {

    const { label, percentage } = props;

    return (
      <div>
      <span class="label">{label}</span>
      <span class="percentage">{percentage}%</span>
      </div>
    )
}


Statistics.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
}