// App.jsx
import { Routes, Route, Link } from 'react-router-dom';
import Welcome from './Welcome';
import Counter from './Counter';
import GithubUsers from './GithubUsers';
import ShowGithubUser from './ShowGithubUser';
import NotFound from './NotFound';

export function App() {
  return (
    <div>
      {/* Navigazione principale */}
      <nav>
        <Link style={{ margin: '10px' }} to="/">Home</Link>
        <Link style={{ margin: '10px' }} to="/counter">Counter</Link>
        <Link style={{ margin: '10px' }} to="/users">GitHub Users</Link>
      </nav>

      <hr />

      <Routes>
        <Route path="/" element={<Welcome name="Mario" />} />
        <Route path="/counter" element={<Counter />} />
        
        {/* Rotte Annidate per Users */}
        <Route path="/users" element={<GithubUsers />}>
          <Route index element={<h3>Aggiungi un utente e selezionalo</h3>} />
          <Route path=":username" element={<ShowGithubUser />} />
        </Route>

        {/* Rotta Not Found */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}