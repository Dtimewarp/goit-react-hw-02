import css from './FriendList.module.css';
import { FriendListItem } from './FriendListItem/FriendListItem';

const FriendList = props => {
  return (
    <ul className={css.friendList}>
      {props.friends.map(({ id, avatar, isOnline, name }) => (
        <li key={id}>
          <FriendListItem avatar={avatar} isOnline={isOnline} name={name} />
        </li>
      ))}
    </ul>
  );
};

export { FriendList };
