import React from 'react';
import { render, screen } from '@testing-library/react';
import addTodo from './Components/AddTodo';

import App from './App';
// After you have rendered your React component(s), React Testing Library offers you different search functions to grab elements
// Use these elements in your test assertions
describe('App', () => {
  test('renders App component that has some buttons', () => {
    render(<App />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  test('should have placeholder', () => {
    render(<addTodo placeholder="Add a todo..." />)
    expect(screen.getByPlaceholderText("Add a todo...")).toBeInTheDocument();
  })
});