import PropTypes from 'prop-types';
import defaultImage from './default.jpg';




export default function  Profile(props) {


    const {username, tag, location, avatar = defaultImage, followers, views, likes } = props;


    return (
<div class="profile">
  <div class="description">
    <img
      src={avatar}
      alt={tag}
      class="avatar"
    />
    <p class="name">{username}</p>
    <p class="tag">@{tag}</p>
    <p class="location">{location}</p>
  </div>

  <ul class="stats">
    <li>
      <span class="label">Followers</span>
      <span class="quantity">{followers}</span>
    </li>
    <li>
      <span class="label">Views</span>
      <span class="quantity">{views}</span>
    </li>
    <li>
      <span class="label">Likes</span>
      <span class="quantity">{likes}</span>
    </li>
  </ul>
</div>
    )
}


Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
}




    //   return (
    //     <div>
    //       <img src={imageUrl ?? defaultImage} alt={title} width="480" />
    //       <h2>{title}</h2>
    //       <p>
    //         Автор: <a href={profileUrl}>{author}</a>
    //       </p>
    //       <p>Цена: {price} кредитов</p>
    //       <p>Доступность: {quantity < 10 ? 'заканчивается' : 'есть в наличии'}</p>
    //       <button type="button">Добавить в корзину</button>
    //     </div>
    //   );
    // };



    // imageUrl = defaultImage, title, profileUrl, author = 'не известно', price, quantity,






    // Painting.propTypes = {
    //     imageUrl: PropTypes.string.isRequired,
    //     title: PropTypes.string.isRequired,
    //     profileUrl: PropTypes.string.isRequired,
    //     author: PropTypes.string.isRequired,
    //     price: PropTypes.number.isRequired,
    //     quantity: PropTypes.number.isRequired,
    // }
