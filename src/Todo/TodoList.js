import React from 'react';
import TodoItem from './TodoItem';
import TaskDiscription from './TaskDiscription';

function TodoList(props) {
    return (
        <div className='todoList-wrapper'>
            {props.todos.map((todo, index, id, initialVal) => {
                return (
                    <TodoItem
                        id={todo.id}
                        todo={todo}
                        key={todo.id}
                        index={index}
                        onChange={props.onToggle}
                        editTodo={props.editTodo}
                        initialVal={initialVal}
                    />
                )
            })}
            <TaskDiscription />
        </div>
    )
}

export default TodoList;
