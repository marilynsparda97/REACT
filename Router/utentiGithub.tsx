import { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function GithubUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users')
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div style={{ display: 'flex' }}>
      <nav style={{ borderRight: '1px solid #ccc', padding: '1rem' }}>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <Link to={`/users/${user.login}`}>{user.login}</Link>
            </li>
          ))}
        </ul>
      </nav>
      
      <main style={{ padding: '1rem' }}>
        {/* Qui verranno renderizzate le rotte figlie (/users/ o /users/:username) */}
        <Outlet />
      </main>
    </div>
  );
}