import React, { Component } from 'react';

const TodoItem = (props) =>{
    
    
    return (
        <li>
            <h3>{props.todo}</h3>
            <button>Remove</button>
        </li>
    );
}

export default TodoItem;