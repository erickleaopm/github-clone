import Filters from './components/filters';
import Layout from './components/layout';
import Profile from './components/profile';
import RepoList from './components/repo-list';
import Search from './components/search';
import repoData from './mocks/repo-data';

function App() {
  return (
    <Layout>
      <Profile />
      <Filters />
      <RepoList repoList={repoData} />
      <Search />
    </Layout>
  );
}

export default App;
