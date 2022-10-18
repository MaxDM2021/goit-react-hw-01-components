import Statistics from "components/Statistics/Statistics";
import PropTypes from 'prop-types';
import css from "./StatisticsList.module.css"

function StatisticsList({ items }) {
  return (
  <ul className={css.stat__list}>
    {items.map((item) => (
      <li className={css.item} key={item.id}
      style={{
        backgroundColor: getRandomColor()
      }}>
        <Statistics
          label={item.label}
          percentage={item.percentage}
        />
      </li>
    ))}
  </ul>
  );
}

StatisticsList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
    })),
};


function getRandomColor () {
  return '#'+Math.floor(Math.random()*16777215).toString(16); 
}


export default StatisticsList;