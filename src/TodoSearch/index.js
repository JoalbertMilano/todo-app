import React, { useContext } from 'react';
import { TodoContext } from '../TodoContext';
import './TodoSearch.css';

function TodoSearch () {
    const { searchValue, setSearchValue } = useContext(TodoContext);
    const onSearchValueChange = (event) => {
        setSearchValue(event.target.value);
    }

    return (
        <div className="todo-search">
            <input className='todo-search__input' value={searchValue} onChange={onSearchValueChange} type='text' placeholder='Find a Todo' />
        </div>
    )
}

export { TodoSearch };