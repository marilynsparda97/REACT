import React, { useState } from 'react';

function CounterDisplay({ count }) {
  return <h2>Conteggio attuale: {count}</h2>;
}

function Counter({ initialValue = 0, incrementAmount = 1 }) {
  const [counter, setCounter] = useState(initialValue);


  const handleIncrement = () => {
    setCounter((prevCounter) => prevCounter + incrementAmount);
  };

  const handleDecrement = () => {
    setCounter((prevCounter) => prevCounter - incrementAmount);
  };

  
  const handleReset = () => {
    setCounter(initialValue);
  };

  return (
    <div style={containerStyle}>
      {/* Visualizzazione estratta nel componente dedicato */}
      <CounterDisplay count={counter} />
      
      <div style={buttonGroupStyle}>
        <button onClick={handleIncrement}>Incrementa (+{incrementAmount})</button>
        <button onClick={handleDecrement}>Decrementa (-{incrementAmount})</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}

const containerStyle = {
  border: '2px solid #333',
  padding: '20px',
  borderRadius: '10px',
  textAlign: 'center',
  maxWidth: '300px',
  margin: '20px auto'
};

const buttonGroupStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '10px'
};