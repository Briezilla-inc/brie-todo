import React, { useContext } from 'react';
import { Button, Card } from 'antd';
import { GlobalContext } from '../context/globalState';

const TodoItem = (props) => {
    const { deleteTodo } = useContext(GlobalContext);

    return (
        <>
            <Card className="todo-item">
                <h3 >{props.todo}</h3>
                <Button danger onClick={() => deleteTodo(props.identifier)}>Remove</Button>
            </Card>
        </>
    );
}

export default TodoItem;