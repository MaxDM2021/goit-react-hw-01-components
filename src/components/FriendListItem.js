import PropTypes from 'prop-types';

export default function FriendListItem(props) {
  const { avatar, name, isOnline } = props;

  return (
    <div className="friends__box">
      <div
        className="status"
        style={{
          width: '20px',
          height: '20px',
          marginRight: '30px',
          backgroundColor: isOnline ? '#39bd18' : '#e61414',
          borderRadius: '50%',
        }}
      ></div>
      <img className="avatar__friends" src={avatar} alt={name} width="48" height="48" />
      <p className="name__friends">{name}</p>
    </div>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};


// backgroundColor: isOnline ? '#39bd18' : '#e61414',