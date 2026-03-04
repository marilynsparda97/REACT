function Messaggio() {
  return <p>Che bella giornata!</p>;
}


function Hello() {
  return (
    <div>
      <h2>Hello, World!</h2>
      <Messaggio />
    </div>
  );
}


export default function App() {
  return (
    <div>
      <Hello />
      {/* Risposta alla tua domanda: 
         Puoi usarlo più volte? Sì! Scommenta la riga sotto per vedere cosa succede.
      */}
      {/* <Hello /> */}
    </div>
  );
}