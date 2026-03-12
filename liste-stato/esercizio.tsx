import React, { useState } from "react";

export function TodoList() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddTodo = (event) => {
    event.preventDefault(); 
    
    if (inputValue.trim() !== "") {
      setItems([...items, inputValue]);
      setInputValue(""); 
    }
  };

  const handleReset = () => {
    setItems([]); 
  };

  const handleRemoveTodo = (indexToRemove) => {
    
    const updatedItems = items.filter((_, index) => index !== indexToRemove);
    setItems(updatedItems);
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px" }}>
      <h2>La mia Todo List</h2>
      
      <div style={{ marginBottom: "10px" }}>
        <input 
          type="text" 
          value={inputValue} 
          onChange={handleInputChange} 
          placeholder="Cosa devi fare?"
        />
        <button onClick={handleAddTodo}>Aggiungi</button>
        <button onClick={handleReset} style={{ marginLeft: "5px" }}>Reset</button>
      </div>

      <ul>
        {items.map((todo, index) => (
          <li key={index} style={{ marginBottom: "5px" }}>
            {todo}
            <button 
              onClick={() => handleRemoveTodo(index)} 
              style={{ marginLeft: "10px", color: "red" }}
            >
              Rimuovi
            </button>
          </li>
        ))}
      </ul>
      
      {items.length === 0 && <p>La lista è vuota. Aggiungi qualcosa!</p>}
    </div>
  );
}