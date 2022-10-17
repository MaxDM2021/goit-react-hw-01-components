import Statistics from "./Statistics";
import PropTypes from 'prop-types';

function StatisticsList({ items }) {
  return (
  <ul className="stat-list">
    {items.map((item) => (
      <li className="item" key={item.id}
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