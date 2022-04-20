import React from "react";
import './TodoItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

function TodoItem ({text, completed, onComplete, onEdit, onDelete}) {

    return (
        <li className={`todo-item ${completed ? 'todo-item--completed' : ''}`}>
            <span className="todo-item__btn" onClick={onComplete}>
                <FontAwesomeIcon icon={faCheck} />
            </span>
            <div className="todo-item__content" title={text}>
                <p className="todo-item__text">{text}</p>
            </div>
            <span className="todo-item__btn" onClick={onEdit}>
                <FontAwesomeIcon icon={faPenToSquare} />
            </span>
            <span className="todo-item__delete" onClick={onDelete}>
                    <FontAwesomeIcon icon={faXmark} /> 
            </span>
        </li>
    )
}

export { TodoItem };