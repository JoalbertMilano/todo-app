import React from 'react';
import './TodoCreate.css';
import image from '../assets/images/create-todo-bg.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

function TodoCreate () {
    return (
        <div className="todo-create">
            <img className="todo-create__image" src={image} alt="create new todo"/>
            <p sclassName="todo-create__text"> 
                Click
                <span className="todo-create__btn">            
                    <FontAwesomeIcon icon={faPlus} />
                </span> 
                to create a new TODO
            </p>
        </div>
    )
}

export { TodoCreate };