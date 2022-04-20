import React from 'react';
import { useLocalStorage } from './useLocalStorage';

const TodoContext = React.createContext();

function TodoProvider (props) {
    const { item: todos, saveItem: saveTodos, loading, error } = useLocalStorage('TODOS_V1', []);
    const [ searchValue, setSearchValue ] = React.useState('');
    const [ openModal, setOpenModal ] = React.useState({
        adding: false, 
        editing: false,
    });

    const completedTodos = todos.filter(todo => todo.completed).length;
    const totalTodos = todos.length;

    let searchTodos = [];

    if (!searchValue.length >= 1) {
        searchTodos = todos;
    } else {
        searchTodos = todos.filter( todo => {
            return todo.text.toLowerCase().includes(searchValue.toLocaleLowerCase());
        });
    }

    const addTodo = (text) => {
        const newTodos = [...todos];
        newTodos.push({
            completed: false, 
            text: text,
        });
        saveTodos(newTodos);
    }

    const completeTodo = (text) => {
        const completedTodos = [...todos];
        const todoIndex = completedTodos.findIndex( todo => todo.text === text);
        completedTodos[todoIndex].completed = !completedTodos[todoIndex].completed;
        saveTodos(completedTodos);
    }

    const openEditTodo = (text) => {
        setOpenModal(state => ({...state, editing: text}))
    }    
    
    const editTodo = (text) => {
        const editedTodos = [...todos];
        const todoIndex = editedTodos.findIndex( todo => todo.text === openModal.editing);
        editedTodos[todoIndex].text = text;
        saveTodos(editedTodos);
    }

    const deleteTodo = (text) => {
        const deletedTodo = [...todos];
        deletedTodo.splice(todos.findIndex(todo => todo.text === text), 1);
        saveTodos(deletedTodo);
    }

    return (
        <TodoContext.Provider value={{
            error,
            loading,
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            searchTodos,
            addTodo,
            completeTodo,
            openEditTodo,
            editTodo,
            deleteTodo,
            openModal, 
            setOpenModal,
        }}>
            { props.children }
        </TodoContext.Provider>
    )
}

export { TodoContext, TodoProvider };