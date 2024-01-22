import clsx from 'clsx';
import css from './FriendListItem.module.css';

const FriendListItem = ({ avatar, isOnline, name }) => {
  return (
    <div className={css.item}>
      <img className={css.avatar} src={avatar} alt="Avatar" width="48" />
      <p className={css.name}>{name}</p>
      {isOnline ? (
        <p className={clsx(css.status, css.success)}>Online</p>
      ) : (
        <p className={clsx(css.status, css.error)}>Offline</p>
      )}
    </div>
  );
};

export { FriendListItem };