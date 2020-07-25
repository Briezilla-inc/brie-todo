import React, { useContext, useState,  } from 'react';
import { GlobalContext } from '../context/globalState';

const AddTodo = (props) => {
    const [text, setText] = useState('');

    const { addTodo } = useContext(GlobalContext)
    // Make a new todo on form submission
    const submit = e => {
        e.preventDefault();

        const newTodo = text
        addTodo(newTodo);
    }

    return (
        <>
            <form onSubmit={submit}>
                <input value={text} onChange={e=> setText(e.target.value) } placeholder="Add a todo..."/>
            </form>
        </>
    )
}
export default AddTodo;