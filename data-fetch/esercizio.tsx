import { useState, useEffect } from 'react';

function GithubUser({ username }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!username) return;

    setLoading(true);
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => {
        if (!response.ok) throw new Error("Utente non trovato");
        return response.json();
      })
      .then((json) => {
        setData(json);
        setError(null);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [username]); 

  if (loading) return <p>Caricamento...</p>;
  if (error) return <p>Errore: {error}</p>;
  if (!data) return null;

  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', marginTop: '10px' }}>
      <img src={data.avatar_url} alt={data.login} width={50} style={{ borderRadius: '50%' }} />
      <h3>{data.name || 'Nome non disponibile'}</h3>
      <p>@{data.login}</p>
    </div>
  );
}