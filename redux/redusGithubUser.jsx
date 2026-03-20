import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUser } from './store';

export function ReduxGithubUsers() {
  const [username, setUsername] = useState('');
  const { list, loading, error } = useSelector(state => state.users);
  const dispatch = useDispatch();

  return (
    <div>
      <input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="GitHub Username" />
      <button onClick={() => dispatch(fetchUser(username))}>Cerca</button>

      {loading && <p>Caricamento...</p>}
      {error && <p style={{color: 'red'}}>{error}</p>}

      <ul>
        {list.map(user => (
          <li key={user.id}>{user.name || user.login} (@{user.login})</li>
        ))}
      </ul>
    </div>
  );
}