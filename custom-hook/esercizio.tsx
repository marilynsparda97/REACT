import React from 'react';
import { useCounter } from './hooks/useCounter';
import { useForm } from './hooks/useForm';
import { useGithubUser } from './hooks/useGithubUser';
import { useCurrentLocation } from './hooks/useCurrentLocation';

function App() {
  // 1. Counter
  const { count, increment, decrement, reset } = useCounter(0);

  // 2. Form
  const { values, handleChange } = useForm({ username: '', password: '' });

  // 3. Github User
  const { data, loading, error, fetchUser } = useGithubUser();

  // 4. Location
  const { location, error: locError, loading: locLoading, getLocation } = useCurrentLocation();

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h2>Esercizi Custom Hooks</h2>
      <hr />

      {/* Sezione Counter */}
      <section>
        <h3>1. Counter: {count}</h3>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <button onClick={reset}>Reset</button>
      </section>

      {/* Sezione Form */}
      <section style={{ marginTop: '20px' }}>
        <h3>2. Login Form</h3>
        <input name="username" placeholder="Username" value={values.username} onChange={handleChange} />
        <input name="password" type="password" placeholder="Password" value={values.password} onChange={handleChange} />
        <p>Stato attuale: {values.username} | {values.password}</p>
      </section>

      {/* Sezione Github */}
      <section style={{ marginTop: '20px' }}>
        <h3>3. Cerca Utente Github</h3>
        <button onClick={() => fetchUser(values.username)}>Cerca "{values.username}"</button>
        {loading && <p>Caricamento...</p>}
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {data && <div><img src={data.avatar_url} width="50" alt="avatar" /><p>{data.name}</p></div>}
      </section>

      {/* Sezione Location */}
      <section style={{ marginTop: '20px' }}>
        <h3>4. Geolocalizzazione</h3>
        <button onClick={getLocation} disabled={locLoading}>Ottieni Posizione</button>
        {locLoading && <p>Ricerca posizione...</p>}
        {locError && <p style={{ color: 'red' }}>{locError}</p>}
        {location && <p>Lat: {location.latitude}, Lon: {location.longitude}</p>}
      </section>
    </div>
  );
}

export default App;
