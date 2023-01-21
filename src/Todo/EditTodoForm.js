import React, { useState } from 'react';
import Button from '@material-ui/core/Button';

function EditTodoForm({ editTodo, id, title, toggleEditForm }) {
    const [valueEditTodo, updateTodoValue] = useState(title)

    function submitHandler(event) {
        event.preventDefault()
        editTodo(id, valueEditTodo)
        toggleEditForm()
    }
    return (
        <form onSubmit={submitHandler} >
            <input
                className='todo_editTodoForm-input-style'
                value={valueEditTodo}
                onChange={event => updateTodoValue(event.target.value)}
            />
            <Button
                type='submit'
                color="primary"
            >Save change</Button>
        </form>
    )
}

export default EditTodoForm;
