import PropTypes from 'prop-types';
import s from './FriendListItem.module.css';

function FriendListItem({ avatar, name, isOnline }) {
  return (
    <div>
      {isOnline === true ? (
        <li className={s.item}>
          <span className={s.isOnline}></span>
          <img className="avatar" src={avatar} alt="" width="48" />
          <p className="name">{name}</p>
        </li>
      ) : (
        <li className={s.item}>
          <span className={s.isOffline}></span>
          <img className="avatar" src={avatar} alt="" width="48" />
          <p className="name">{name}</p>
        </li>
      )}
    </div>
  );
}

export default FriendListItem;

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
