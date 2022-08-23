import styled from 'styled-components';

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
  return (
    <ProfileStyled>
      <img className="avatar" src="" alt="" width="278" height="278" />
      <p className="name">Erick Pérez</p>
      <p className="username">erickleaopm</p>
      <div className="buttons">
        <button>Follow</button>
        <button>Sponsors</button>
      </div>
      <p className="bio info">Hola mundo!</p>
      <p className="followers info">
        * 10 <span>followers</span> * 15 <span>following</span>
      </p>
      <p className="stars info">* 80</p>
      <p className="location info">Culiacan</p>
      <a
        className="info"
        href="https://erickleaopm.github.com"
        target="_blank"
        rel="noreferrer"
      >
        website
      </a>
      <a
        className="info"
        href="https://twitter.com/erickleaopm"
        target="_blank"
        rel="noreferrer"
      >
        @erickleaopm
      </a>
    </ProfileStyled>
  );
}

export default Profile;
