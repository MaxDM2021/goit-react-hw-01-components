// import Transaction from "components/Transaction/Transaction";
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
  {items.map(({id, type, amount, currency}) => (
    <tr className={css.tr} key = {id}>
    <td className={css.td}>{type}</td>
    <td className={css.td}>{amount}</td>
    <td className={css.td}>{currency}</td>
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


