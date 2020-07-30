import React, { useState } from 'react';
import './App.css';
import AddTodo from './Components/AddTodo';
import TodoList from './Components/TodoList';
import { GlobalProvider } from './context/globalState';

const App = () => {
  // Have a peice of state that will toggle the modal
  const [toggle, setToggle] = useState(false)
  // Onclick, render the addTodo form and when a todo gets added toggle the form off
  return (
    <GlobalProvider>
      <div className="App">
        <TodoList />
        <button onClick={() => setToggle(true)}>Add a new todo item</button>

        {
          toggle ? <AddTodo togglePass={setToggle} /> : null
        }
      </div>
    </GlobalProvider>
  );
}

export default App;
