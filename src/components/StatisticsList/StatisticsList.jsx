// import Statistics from "components/Statistics/Statistics";
import PropTypes from 'prop-types';
import css from './StatisticsList.module.css';

function StatisticsList({ items, title }) {
  return (
    <div>
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css.stat__list}>
        {items.map(({ label, percentage, id }) => (
          <li
            className={css.item}
            key={id}
            style={{
              backgroundColor: getRandomColor(),
            }}
          >
            <div>
              <span className={css.label}>{label}</span>
              <span className={css.percentage}>{percentage}%</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

StatisticsList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

function getRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

export default StatisticsList;
