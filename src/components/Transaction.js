import PropTypes from 'prop-types';

export default function Transaction(props) {
  const { type, amount, currency } = props;

  return (
    <div>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
      </div>
  );
}

Transaction.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
};