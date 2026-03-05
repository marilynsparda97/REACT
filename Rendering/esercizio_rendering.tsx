import React from 'react';

function Age({ age }) {
  return <p>Your age is {age}</p>;
}


function Message({ age }) {
  return (
    <div>
      {age > 18 
        ? <p>Your age is {age}</p> 
        : <p>You are very young!</p>
      }
    </div>
  );
}

function Welcome({ name, age }) {
  return (
    <div>
      <p>Welcome, <strong>{name}</strong>!</p>
      {age > 18 && <Age age={age} />}
      {age && <Age age={age} />}
      {(age > 18 && age < 65) && <Age age={age} />}
      {(age > 18 && name === "John") && <Age age={age} />}
      <Message age={age} />
    </div>
  );
}

export default function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Esercizio Rendering Condizionale</h1>
      
      <Welcome name="John" age={25} />
      
      <hr />
      
      <Welcome name="Anna" age={15} />
    </div>
  );
}