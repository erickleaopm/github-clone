import styled from 'styled-components';

const RepoItemStyled = styled.div`
  padding-block: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-block-end: 1px solid var(--grey);
  &:last-child {
    border-block-end: none;
  }

  .title {
    display: flex;
    gap: 1rem;
    margin: 0;
    a {
      color: var(--primary);
      text-decoration: none;
    }
  }

  .public {
    border: 1px solid var(--grey);
    padding-inline: 0.5rem;
    padding-block: 0.125rem;
    font: var(--caption-regular);
    border-radius: 0.5rem;
  }

  .description {
    font: var(--body2-regular);
    margin: 0;
  }

  .topicList {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem 0.25rem;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .topicItem {
    color: var(--primary);
    font: var(--caption-medium);
    background: #15223a;
    padding-block: 0.25rem;
    padding-inline: 0.75rem;
    border-radius: 2rem;
  }
`;

function RepoItem(props) {
  return (
    <RepoItemStyled>
      <h3 className="title">
        <a href={props.html_url}>{props.name}</a>
        {!props.private ? <span className="public">Public</span> : null}
      </h3>
      {props.description ? <p>{props.description}</p> : null}
      {props.topics.length ? (
        <ul className="topicList">
          {props.topics.map((topic) => (
            <li className="topicItem">{topic}</li>
          ))}
        </ul>
      ) : null}
    </RepoItemStyled>
  );
}

export default RepoItem;
