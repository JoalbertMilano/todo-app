import React from 'react';
import './TodoError.css';
import image from '../assets/images/error-todo-bg.png';

function TodoError () {
    return (
        <div className="todo-error">
            <img className="todo-error__image" src={image} alt="error"/>
            <p sclassName="todo-error__text"> 
                Error, please reload...
            </p>
        </div>
    )
}

export { TodoError };