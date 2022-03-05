import React, { useContext } from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';

function TodoCounter() {
    const {totalTodos, completedTodos} = useContext(TodoContext);
    return (
        <header className='todo-counter'>
            <h2 className='todo-counter__title'>You have completed</h2>
            <div className='todo-counter__count'>
                <div className='todo-counter__number todo-counter__number--actual'>{completedTodos}</div>
                <span className='todo-counter__of'>of</span>
                <div className='todo-counter__number todo-counter__number--objective'>{totalTodos}</div>
            </div>
            <p className='todo-counter__todos'>TODO's</p>
        </header>
    )
}

export { TodoCounter };