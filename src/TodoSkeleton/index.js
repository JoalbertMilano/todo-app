import React from 'react';
import './TotalSkelenton.css';

function TodoSkeleton () {
    return (
        <li className="todo-skeleton">
            <span className="todo-skeleton__check"></span>
            <div className="todo-skeleton__content"></div>
            <span className="todo-skeleton__delete"></span>
        </li>
    )
}

export { TodoSkeleton };