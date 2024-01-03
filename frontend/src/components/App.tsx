import React from 'react';
import { useTodos } from '../hooks/useTodos';
import './App.css';

function App() {
  const { todos } = useTodos();
  return (
    <div className="App">
      {todos !== undefined &&
        todos.map((todo) => <p key={todo.id}>{todo.text}</p>)}
    </div>
  );
}

export default App;
