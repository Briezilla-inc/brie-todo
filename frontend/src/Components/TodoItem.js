import React, { useContext } from 'react';
import { Button, Card } from 'antd';
import { GlobalContext } from '../context/globalState';

const TodoItem = (props) => {
    const { deleteTodo } = useContext(GlobalContext);

    return (
        <>
            <Card className="todo-item">
                <h2><b>{props.todo}</b></h2>
                <Button danger onClick={() => deleteTodo(props.identifier)} style={{ borderRadius: '4rem' }}>
                    Remove
                </Button>
            </Card>
        </>
    );
}

export default TodoItem;