import React from 'react';
import './TodoForm.css';


function TodoForm({ type, onSubmit, onCancel, initialInput = '' }) {
    const [ newTodoValue, setNewTodoValue ] = React.useState(initialInput);

    const handleOnSubmit = (e) => {
        onSubmit(e, newTodoValue)
    }

    const onChange = (event)  => {
        setNewTodoValue(event.target.value);
    }
    
    return (
        <form className='todo-form' onSubmit={handleOnSubmit}>
            <label className='todo-form__title'>{type} a new TODO</label>
            <textarea required className='todo-form__textarea' placeholder={`${type} Todo description`} value={newTodoValue} onChange={onChange}></textarea>
            <div className='todo-form-buttons'>
                <button className='todo-form-buttons__btn todo-form-buttons__btn--cancel' type='button' onClick={onCancel}>Cancel</button>
                <button className='todo-form-buttons__btn todo-form-buttons__btn--add' type='submit'>{type}</button>
            </div>
        </form>
    );
}

export { TodoForm };