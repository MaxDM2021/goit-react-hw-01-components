import Profile from "./Profile";
// import PropTypes from 'prop-types';

function ProfileCart({ item }) {
  return (
        <Profile
          username={item.username}
          tag={item.tag}
          location={item.location}
          avatar={item.avatar}
          followers={item.stats.followers}
          views={item.stats.views}
          likes={item.stats.likes}
        />

  );
}


export default ProfileCart;
