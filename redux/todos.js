// todosLogic.js
export const todosReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO': return [...state, action.payload];
    case 'REMOVE_TODO': return state.filter(t => t.id !== action.payload);
    case 'TOGGLE_TODO': 
      return state.map(t => t.id === action.payload ? { ...t, completed: !t.completed } : t);
    default: return state;
  }
}