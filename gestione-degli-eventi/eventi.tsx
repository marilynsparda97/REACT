import React, { useState, useEffect } from 'react';

function CounterDisplay({ count }) {
  return <h2>Conteggio attuale: {count}</h2>;
}

function Clock() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => setDate(new Date()), 1000);
    return () => clearInterval(timerID);
  }, []);

  return <h3 style={{ color: 'blue' }}>Ora: {date.toLocaleTimeString()}</h3>;
}

function MouseClicker() {
  const handleButtonClick = (event) => {
    console.log("Pulsante cliccato. Name:", event.currentTarget.name);
  };

  const handleImageClick = (event) => {
    console.log("Immagine cliccata. SRC:", event.target.src);
    
    event.stopPropagation(); 
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0' }}>
      <button name="one" onClick={handleButtonClick} style={{ padding: '10px' }}>
        Clicca Qui (o sull'immagine)
        <img 
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png" 
          alt="Pikachu"
          width="50"
          onClick={handleImageClick}
          style={{ display: 'block', margin: 'auto' }}
        />
      </button>
    </div>
  );
}

function Counter({ initialValue = 0, incrementAmount = 1 }) {
  const [counter, setCounter] = useState(initialValue);


  useEffect(() => {
    console.log(`Valore Counter: ${counter}`);
  }, [counter]);

  const increment = () => setCounter((prev) => prev + incrementAmount);
  const decrement = () => setCounter((prev) => prev - incrementAmount);
  const reset = () => setCounter(initialValue);

  return (
    <div style={{ background: '#f4f4f4', padding: '20px', borderRadius: '8px' }}>
      <CounterDisplay count={counter} />
      <div style={{ display: 'flex', gap: '5px', justifyContent: 'center' }}>
        <button onClick={increment}>+{incrementAmount}</button>
        <button onClick={decrement}>-{incrementAmount}</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div style={{ fontFamily: 'sans-serif', textAlign: 'center', padding: '20px' }}>
      <h1>Esercitazione React Completa</h1>
      <Clock />
      <hr />
      <Counter initialValue={0} incrementAmount={1} />
      <hr />
      <MouseClicker />
    </div>
  );
}