import css from './Profile.module.css';

export const Profile = ({
  name,
  tag,
  location,
  avatar = 'https://cdn-icons-png.flaticon.com/512/1077/1077012.png',
  stats,
}) => {
  return (
    <div className={css.profileContainer}>
      <div className={css.clientInformation}>
        <img className={css.profileImage} src={avatar} alt="User avatar" />
        <p className={css.clientName}>{name}</p>
        <p className={css.clientTag}>@{tag}</p>
        <p className={css.clientLocation}>{location}</p>
      </div>

      <ul className={css.listItems}>
        <li className={css.itemTopic}>
          <span className={css.itemName}>Followers</span>
          <span className={css.itemCount}>{stats.followers}</span>
        </li>
        <li className={css.itemTopic}>
          <span className={css.itemName}>Views</span>
          <span className={css.itemCount}>{stats.views}</span>
        </li>
        <li className={css.itemTopic}>
          <span className={css.itemName}>Likes</span>
          <span className={css.itemCount}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};
