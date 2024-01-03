import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { AuthPage } from './AuthPage/AuthPage';
import { Navbar } from './Navbar/Navbar';
import { TodoList } from './TodoList/TodoList';

function App() {
  return (
    <div className="relative text-current bg-white dark:bg-gray-900 items-center justify-center py-20 px-5 w-screen h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<TodoList />} />
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
    </div>
  );
}

export default App;
