import React from 'react';

function Age({ age }) {
  return <p>Your age is {age}</p>;
}

function Welcome({ name = "Guest", age }) {
  return (
    <div>
      {}
      <p>Welcome, <strong>{name}</strong>!</p>
      
      {}
      <Age age={age} />
    </div>
  );
}

export default function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Esercizio React</h1>
      
      {}
      <Welcome name="Luca" age={28} />
      
      {}
      <hr />
      <Welcome age={30} />
    </div>
  );
}