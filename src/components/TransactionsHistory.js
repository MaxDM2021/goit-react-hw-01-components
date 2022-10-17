import Transaction from "./Transaction";
import PropTypes from 'prop-types';

function TransactionsHistory({ items }) {
  return (
<table className="transaction-history">
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
  {items.map((item) => (
    <tr className="item__transaction" key={item.id}>

 <Transaction
          type={item.type}
          amount={item.amount}
          currency={item.currency}
          />
    </tr>
     ))}
      </tbody>
</table>
  );
}

TransactionsHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
    })),
};


export default TransactionsHistory;


