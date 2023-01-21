import React, { useState } from 'react';
import Button from '@material-ui/core/Button';

function AddTodo({ onCreate }) {
    const [value, setValue] = useState('')

    function submitHandler(event) {
        event.preventDefault()

        if (value) {
            onCreate(value)
            setValue('')
        }
    }

    return (
        <form onSubmit={submitHandler}>
            <input
                className='todo_addTodo-input-style'
                required
                value={value}
                placeholder='Add a todo item'
                onChange={event => setValue(event.target.value)} />
            <Button type='submit' color="primary">Add todo</Button>
        </form>
    )
}

export default AddTodo;
