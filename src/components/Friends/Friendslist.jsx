import css from './Friends.module.css';
import clsx from 'clsx';

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendsRowContainer}>
      {friends.map(friend => (
        <li key={friend.id}>
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        </li>
      ))}
    </ul>
  );
};

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div
      className={clsx(css.friendCard, isOnline ? css.isOnline : css.isOffline)}
    >
      <img className={css.avaImg} src={avatar} alt="Avatar" width="48" />
      <p className={css.friendsName}>{name}</p>
      <p className={css.statusPoint}>{isOnline ? 'Online' : 'Offline'}</p>
    </div>
  );
};
