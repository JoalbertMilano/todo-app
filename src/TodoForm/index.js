import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoForm.css';

function TodoForm() {
    const [ newTodoValue, setNewTodoValue ] = React.useState('');
    const { addTodo, setOpenModal } = React.useContext(TodoContext);

    const onCancel = () => {
        setOpenModal(false);
    }

    const onChange = (event)  => {
        setNewTodoValue(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    }
    
    return (
        <form className='todo-form' onSubmit={onSubmit}>
            <label className='todo-form__title'>Write a new TODO</label>
            <textarea required className='todo-form__textarea' placeholder='Add Todo description' value={newTodoValue} onChange={onChange}></textarea>
            <div className='todo-form-buttons'>
                <button className='todo-form-buttons__btn todo-form-buttons__btn--cancel' type='button' onClick={onCancel}>Cancel</button>
                <button className='todo-form-buttons__btn todo-form-buttons__btn--add' type='submit'>Add</button>
            </div>
        </form>
    );
}

export { TodoForm };