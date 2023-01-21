// @ts-nocheck
import React from 'react';
import Button from '@material-ui/core/Button';
import ToggleState from './ToggleState';

function TaskDiscription() {
    const [isDiscription, toggle] = ToggleState(false)
    return (
        <>
            {isDiscription ?
                <>
                    <p className='todo_taskDiscription_Button__justify-content-center' >
                        <Button
                            variant='outlined'
                            type='submit'
                            color="secondary"
                            onClick={toggle}
                        >Hide description task</Button>
                    </p >
                    <div className='wrapPadding' >
                        Создайте приложение ToDo List (список дел), которое должно включать в себя следующие
                        элементы:
                        <p>- заголовок в верхней части экрана</p>
                        <p>- поле ввода и кнопку для создания и добавления задания в список</p>
                        <p>- список с введенными заданиями</p>
                             Каждое задание (элемент списка дел) должно включать в себя три кнопки:
                        <p>- редактирование, которое позволяет изменить текствое содержание элемента</p>
                        <p>- удаление, которое безвозвратно удаляет элемент из списка</p>
                        <p>- отметка «Сделано», которое помечает задание, как выполненное.</p>
                    </div>
                </> :
                <p className='todo_taskDiscription_Button__justify-content-center' >
                    <Button
                        variant='outlined'
                        type='submit'
                        color="primary"
                        onClick={toggle}
                    >Show description task</Button>
                </p >}
        </>
    )
};

export default TaskDiscription;
