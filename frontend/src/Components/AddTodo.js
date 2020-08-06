import React, { useContext, useState } from 'react';
import { GlobalContext } from '../context/globalState';
import { Button, Input } from 'antd';
const AddTodo = (props) => {
    const [text, setText] = useState('');

    const { addTodo } = useContext(GlobalContext)
    // Make a new todo on form submission
    const submit = e => {
        e.preventDefault();

        const newTodo = {
            text,
            added: true
        }

        addTodo(newTodo);
        props.togglePass(false)
    }

    return (
        <>
            <form onSubmit={submit}>
                <Input style={{ width: "35%", textAlign: "center" }} value={text} onChange={e => setText(e.target.value)} placeholder="Add a todo..." />
                <Button type="primary">Add Todo</Button>
            </form>
        </>
    )
}
export default AddTodo;