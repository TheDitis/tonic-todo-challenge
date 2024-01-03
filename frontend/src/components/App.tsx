import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { AuthPage } from './AuthPage/AuthPage';
import { TodoList } from './TodoList/TodoList';

function App() {
  return (
    <div className="relative Appflex flex-col items-center justify-center p-20">
      <Routes>
        <Route path="/" element={<TodoList />} />
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
    </div>
  );
}

export default App;
