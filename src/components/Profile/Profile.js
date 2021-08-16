import PropTypes from 'prop-types';
import s from './Profile.module.css';

function Profile({ userData }) {
  // console.log(userData.name);
  return (
    <div className={s.profile}>
      <div className={s.description}>
        <img
          src={userData.avatar}
          alt="Аватар пользователя"
          className={s.avatar}
        />
        <p className={s.name}>{userData.name}</p>
        <p className={s.tag}>{userData.tag}</p>
        <p className={s.location}>{userData.location}</p>
      </div>

      <ul className={s.stats}>
        <li>
          <span className={s.label}>Followers</span>
          <span class={s.quantity}>{userData.stats.followers}</span>
        </li>
        <li>
          <span className={s.label}>Views</span>
          <span class={s.quantity}>{userData.stats.views}</span>
        </li>
        <li>
          <span className={s.label}>Likes</span>
          <span class={s.quantity}>{userData.stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
Profile.propTypes = {
  userData: PropTypes.object.isRequired,
};

export default Profile;
