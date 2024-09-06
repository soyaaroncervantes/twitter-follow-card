import './twitter-follow-card.css';
import {useState} from "react";

interface Props {
  name: string;
  username: string;
  initialIsFollowing?: boolean;
}

export const TwitterFollowCard = ({username, name, initialIsFollowing}: Props) => {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing || false);
  const avatarUrl = `https://unavatar.io/${username}`;
  const followText = isFollowing ? 'Siguiendo' : 'Seguir';
  const buttonFollowClass = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button';
  const handleClick = () => setIsFollowing(!isFollowing);
  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img className="tw-followCard-avatar" src={avatarUrl} alt={username + "'s avatar"}/>
      </header>
      <div className="tw-followCard-body">
        <strong className="tw-followCard-name">{name}</strong>
        <span className="tw-followCard-username">@{username}</span>
      </div>
      <aside className="tw-followCard-action">
        <button onClick={handleClick} className={buttonFollowClass}>{followText}</button>
      </aside>
    </article>
  );
}
