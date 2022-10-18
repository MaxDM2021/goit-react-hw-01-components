import Transaction from "components/Transaction/Transaction";
import PropTypes from 'prop-types';
import css from "./TransactionsHistory.module.css";


function TransactionsHistory({ items }) {
  return (
<table className={css.table}>
  <thead>
    <tr>
      <th className={css.thead__th}>Type</th>
      <th className={css.thead__th}>Amount</th>
      <th className={css.thead__th}>Currency</th>
    </tr>
  </thead>

  <tbody>
  {items.map((item) => (
 <Transaction
         key={item.id}
          type={item.type}
          amount={item.amount}
          currency={item.currency}

          />
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


