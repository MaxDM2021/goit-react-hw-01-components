import FriendListItem from "components/FriendListItem/FriendListItem";
import PropTypes from 'prop-types';
import css from "./FriendList.module.css"

function FriendList({ items }) {
  return (
  <ul className={css.friend__list}>
    {items.map((item) => (
      <li className={css.item__friends} key={item.id}
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