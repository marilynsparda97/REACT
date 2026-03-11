import React, { useState } from "react";

const Welcome = ({ name }) => <h1>Benvenuto, {name || "Ospite"}!</h1>;

export function InteractiveWelcome() {
  const [name, setName] = useState("");

  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", marginBottom: "20px" }}>
      <label htmlFor="name-input">Inserisci il tuo nome: </label>
      <input 
        id="name-input"
        type="text" 
        value={name} 
        onChange={handleChange} 
      />
      <Welcome name={name} />
    </div>
  );
}