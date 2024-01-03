import React from 'react';
import './App.css';
import { useTodos } from './hooks/useTodos';

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
