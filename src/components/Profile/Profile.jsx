import css from "./Profile.module.css";

const Profile = ({
  image,
  name,
  tag,
  location,
  stats: { followers, views, likes },
}) => {
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img src={image} alt={name + " avatar"} className={css.avatar} />
        <p className={css.name}>{name}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.stats}>
        <li>
          <span className={css.label}>Followers</span>
          <span className={css.value}>{followers}</span>
        </li>
        <li>
          <span className={css.label}>Views</span>
          <span className={css.value}>{views}</span>
        </li>
        <li>
          <span className={css.label}>Likes</span>
          <span className={css.value}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

export { Profile };
