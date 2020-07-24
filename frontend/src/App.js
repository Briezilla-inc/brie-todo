import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './Components/TodoList';
import { GlobalProvider } from './context/globalState';

function App() {
  return (
    <GlobalProvider>
     <div className="App">
      <TodoList />
      </div>
     </GlobalProvider>
  );
}

export default App;
