import React, { useState } from 'react';
import './App.css';
import AddTodo from './Components/AddTodo';
import { Button } from 'antd';
import { TwitterCircleFilled, GithubFilled, LinkedinFilled, LinkOutlined } from '@ant-design/icons';

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
        <Button color=" primary" onClick={() => setToggle(true)} style={{ marginTop: '1rem' }}>
          Add a new todo item
        </Button>

        {
          toggle ? <AddTodo togglePass={setToggle} /> : null
        }

        {/* FOOTER */}
        <footer>
          <h2 id="footer-text">Copyright © Chad Hinds and Gabriela Cardo {new Date().getFullYear()} - All Rights Reserved</h2>

          <section className="ass">
            <ul className="social-links">
              <li>
                <a href="http://chadhindsight.github.io" rel="noopener noreferrer" target="_blank">
                  <LinkOutlined />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/Chadhindsight" rel="noopener noreferrer" target="_blank">
                  <TwitterCircleFilled />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/chadrick-hinds" rel="noopener noreferrer" target="_blank">
                  <LinkedinFilled />
                </a>
              </li>
              <li>
                <a href="https://github.com/chadhindsight" rel="noopener noreferrer" target="_blank">
                  <GithubFilled />
                </a>
              </li>
            </ul>
          </section>
        </footer>
      </div>
    </GlobalProvider>
  );
}

export default App;
