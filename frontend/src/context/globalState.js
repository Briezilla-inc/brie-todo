import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import axios from 'axios';

const initialState = {
    todos: [],
    error: null,
    loading: true
}

// This creates context! Progress 
export const GlobalContext = createContext(initialState);

// This Provider component will give state to all the components it wraps
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Actions
    async function getTodos() {
        try {
            const res = await axios.get('http://localhost:5000/api/v1/todos');
            dispatch({
                type: 'GET_TODOS',
                payload: res.data.data
            });
        } catch (err) {
            dispatch({
                type: 'TODO_ERROR',
                // Use this to send an error alert! 
                payload: 'Something went wrong'
            })
        }
    }

    async function deleteTodo(id) {
        try {
            await axios.delete(`http://localhost:5000/api/v1/todos/${id}`)
            dispatch({
                type: 'DELETE_TODO',
                payload: id
            });
        } catch (err) {
            dispatch({
                type: "TODO_ERROR",
                payload: 'Something went wrong'
            })
        }
    }

    async function addTodo(todo) {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        try {
            const res = await axios.post('http://localhost:5000/api/v1/todos', todo, config);

            dispatch({
                type: 'ADD_TODO',
                payload: res.data.data
            });
        } catch (err) {
            dispatch({
                type: "TODO_ERROR",
                payload: 'Something went wrong'
            })
        }
    }
    return (
        <GlobalContext.Provider value={{
            todos: state.todos,
            error: state.error,
            loading: state.loading,
            getTodos,
            addTodo,
            deleteTodo
        }}>
            {children}
        </GlobalContext.Provider>
    )
}
