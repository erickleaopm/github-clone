import styled from 'styled-components';
import props from '../mocks/profile-data';
import Button from './button';

const ProfileStyled = styled.div`
  grid-area: profile;
  .avatar {
    border-radius: 50%;
    border: 1px solid var(--grey-1);
    overflow: hidden;
    box-sizing: border-box;
    margin-block-end: 1.5rem;
  }

  .buttons {
    display: flex;
    gap: 0.5rem;
    margin-block-end: 1.5rem;
  }

  .info {
    border: 1px solid red;
    color: var(--grey-1);
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-block: 1rem;
    font: var(--body2-semi-bold);
  }

  .name {
    font: var(--headline1);
    color: var(--white);
    margin: 0;
    margin-block-end: 0.5rem;
  }

  .username {
    margin-block-start: 0.5rem;
    margin-block-end: 1.5rem;
    font: var(--headline2-light);
  }

  a:hover {
    text-decoration: underline;
  }
`;

function Profile() {
  const {
    name,
    login,
    avatar_url,
    bio,
    followers,
    following,
    location,
    blog,
    html_url,
    twitter_username,
  } = props;
  return (
    <ProfileStyled>
      <img
        className="avatar"
        src={avatar_url}
        alt=""
        width="278"
        height="278"
      />
      <p className="name">{name}</p>
      <p className="username">{login}</p>
      <div className="buttons">
        <Button text="Follow" link="*" />
        <Button text="Sponsors" icon={<i>*</i>} />
      </div>
      <p className="bio info">{bio}</p>
      <p className="followers info">
        * {followers} <span>followers</span> * {following}{' '}
        <span>following</span>
      </p>
      {/* <p className="stars info">* 80</p> */}
      <p className="location info">{location}</p>
      <a
        className="info"
        href="https://erickleaopm.github.com"
        target="_blank"
        rel="noreferrer"
      >
        {blog || html_url}
      </a>
      <a
        className="info"
        href={`https://twitter.com/${twitter_username}`}
        target="_blank"
        rel="noreferrer"
      >
        {twitter_username}
      </a>
    </ProfileStyled>
  );
}

export default Profile;
