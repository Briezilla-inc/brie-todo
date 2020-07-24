import React, { useContext, GlobalContext } from 'react';

const TodoItem = (props) =>{
    const { deleteTodo } = useContext(GlobalContext);
    
    return (
        <li>
            <h3>{props.todo}</h3>
            <button onClick={()=>deleteTodo(props.todo._id)}>Remove</button>
        </li>
    );
}

export default TodoItem;