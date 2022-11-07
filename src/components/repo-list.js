import styled from 'styled-components';
import RepoItem from './repo-item';

const RepoListStyled = styled.div`
  grid-area: repo-list;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

function RepoList({ repoList }) {
  return (
    <RepoListStyled>
      {repoList.map((repo) => (
        <RepoItem {...repo} key={repo.id} />
      ))}
    </RepoListStyled>
  );
}

export default RepoList;
