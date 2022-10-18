import PropTypes from 'prop-types';

export default function Transaction(props) {
  const { type, amount, currency } = props;

  return (
    <tr className="item__transaction">
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
}

Transaction.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
};