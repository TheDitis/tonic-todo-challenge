import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { TodoList } from './TodoList/TodoList';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<TodoList />} />
        {/* TODO: <Route path="/auth" element={<AuthPage/>}/>*/}
      </Routes>
    </div>
  );
}

export default App;
