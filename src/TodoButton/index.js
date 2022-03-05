import React, { useContext } from 'react';
import { TodoContext } from '../TodoContext';
import './TodoButton.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

function TodoButton () {
    const { setOpenModal } = useContext(TodoContext);
    const onClickButton = () => {
        setOpenModal(state => !state);
    }

    return (
        <button className="todo-button" onClick={onClickButton}>
            <FontAwesomeIcon icon={faPlus} />
        </button>  
    )
}

export { TodoButton };