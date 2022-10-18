import PropTypes from 'prop-types';
import css from "./FriendListItem.module.css";

export default function FriendListItem(props) {
  const { avatar, name, isOnline } = props;

  return (
    <div className={css.friends__box}>
      <div
        className={css.status}
        style={{
          backgroundColor: isOnline ? '#39bd18' : '#e61414',
        }}
      ></div>
      <img className={css.avatar__friends} src={avatar} alt={name} width="48" height="48" />
      <p className={css.name__friends}>{name}</p>
    </div>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

