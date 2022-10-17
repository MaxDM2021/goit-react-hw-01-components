import FriendListItem from "components/FriendListItem";
import PropTypes from 'prop-types';

function FriendList({ items }) {
  return (
  <ul className="friend-list">
    {items.map((item) => (
      <li className="item__friends" key={item.id}
    >
        <FriendListItem
          avatar={item.avatar}
          name={item.name}
          isOnline={item.isOnline}
        />
      </li>
    ))}
  </ul>
  );
}


FriendList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
    })),
};


export default FriendList;