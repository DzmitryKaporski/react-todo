// @ts-nocheck
import React, { useContext } from 'react';
import Context from '../Context';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import EditTodoForm from './EditTodoForm';
import DeleteIcon from '@material-ui/icons/Delete';
import ToggleState from './ToggleState';

const style = {
    input: {
        marginRight: '10px'
    }
}

function TodoItem({ id, todo, index, onChange, editTodo, initialVal }) {
    const [isEditing, toggle] = ToggleState(initialVal)
    const { removeTodo } = useContext(Context)
    const classes = []

    if (todo.completed) {
        classes.push('todo_todoItem_done')
    }

    return (
        <div className={todo.completed ? 'todo_todoItem_done__border-red' : 'todo_todoItem_itemList-wrapper'} >
            {isEditing ?
                <EditTodoForm
                    id={id}
                    editTodo={editTodo}
                    title={todo.title}
                    toggleEditForm={toggle} /> :
                <>
                    <span className={classes.join(' ')}>
                        <input
                            type='Checkbox'
                            checked={todo.completed}
                            style={style.input}
                            onChange={() => onChange(todo.id)}
                        />
                        <strong>{index + 1}.</strong>
                        &nbsp;
                        {todo.title}
                    </span>

                    <div className="todo_todoItem_Buttons__padding-bottom-4px">
                        <Button
                            startIcon={<EditIcon />}
                            size="small"
                            color="primary"
                            variant="outlined"
                            onClick={toggle}>
                        </Button>
                         &nbsp;
                    <Button
                            startIcon={<DeleteIcon />}
                            size="small"
                            color="secondary"
                            variant="outlined"
                            onClick={() => removeTodo(todo.id)}>
                        </Button>
                    </div>
                </>
            }
        </div>
    )
}

export default TodoItem;
