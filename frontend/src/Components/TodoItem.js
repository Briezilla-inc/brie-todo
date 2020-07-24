import React, { useContext} from 'react';
import { GlobalContext } from '../context/globalState';

const TodoItem = (props) =>{
    const { deleteTodo } = useContext(GlobalContext);
    
    return (
        <li>
            <h3>{props.todo}</h3>
            <button onClick={()=> deleteTodo(props.identifier)}>Remove</button>
        </li>
    );
}

export default TodoItem;