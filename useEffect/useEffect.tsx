import React, { useState, useEffect } from 'react';

function CounterDisplay({ count }) {
  return <h2>Conteggio attuale: {count}</h2>;
}

function Clock() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(timerID);
  }, []); 

  return (
    <div style={{ color: '#007bff', margin: '20px 0' }}>
      <h2>Ora corrente: {date.toLocaleTimeString()}</h2>
    </div>
  );
}

function Counter({ initialValue = 0, incrementAmount = 1 }) {
  const [counter, setCounter] = useState(initialValue);

  useEffect(() => {
    console.log(`Il valore del contatore è cambiato: ${counter}`);
  }, [counter]);

  const handleIncrement = () => {
    setCounter((prev) => prev + incrementAmount);
  };

  const handleDecrement = () => {
    setCounter((prev) => prev - incrementAmount);
  };

  const handleReset = () => {
    setCounter(initialValue);
  };

  return (
    <div style={containerStyle}>
      <CounterDisplay count={counter} />
      
      <div style={buttonGroupStyle}>
        <button onClick={handleIncrement}>Incrementa (+{incrementAmount})</button>
        <button onClick={handleDecrement}>Decrementa (-{incrementAmount})</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div style={{ fontFamily: 'sans-serif', padding: '40px', textAlign: 'center' }}>
      <h1>Esercizi React: State & Effects</h1>
      
      <Clock />
      
      <hr />
      
      {}
      <Counter initialValue={0} incrementAmount={1} />
      <Counter initialValue={10} incrementAmount={5} />
    </div>
  );
}

const containerStyle = {
  border: '1px solid #ddd',
  padding: '20px',
  borderRadius: '8px',
  maxWidth: '350px',
  margin: '20px auto',
  backgroundColor: '#f9f9f9'
};

const buttonGroupStyle = {
  display: 'flex',
  justifyContent: 'center',
  gap: '10px',
  marginTop: '15px'
};