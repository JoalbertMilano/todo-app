import React from "react";
import './TodoItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

function TodoItem ({text, completed, onComplete, onDelete}) {

    return (
        <li className={`todo-item ${completed ? 'todo-item--completed' : ''}`}>
            <span className="todo-item__check" onClick={onComplete}>
                <FontAwesomeIcon icon={faCheck} />
            </span>
            <div className="todo-item__content">
                <p className="todo-item__text">{text}</p>
            </div>
            <span className="todo-item__delete" onClick={onDelete}>
                    <FontAwesomeIcon icon={faXmark} /> 
            </span>
        </li>
    )
}

export { TodoItem };