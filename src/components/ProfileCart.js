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


// function ProfileList({ items }) {
//   return (
//   <ul>
//     {items.map((item) => (
//       <li key={item.id}>
//         <Profile
//           username={item.username}
//           tag={item.tag}
//           location={item.location}
//           avatar={item.avatar}
//           followers={item.stats.followers}
//           views={item.stats.views}
//           likes={item.stats.likes}
//         />
//       </li>
//     ))}
//   </ul>
//   );
// }




// ProfileCart.propTypes = {
//     item: PropTypes.arrayOf(PropTypes.shape({
        
//     })),
// };


export default ProfileCart;
