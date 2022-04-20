import React, { useContext } from 'react';
import { TodoContext } from '../TodoContext';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoItem } from '../TodoItem';
import { TodoButton } from '../TodoButton';
import { TodoList } from '../TodoList';
import { Modal }from '../Modal';
import { TodoForm } from '../TodoForm';
import { TodoSkeleton } from '../TodoSkeleton';
import { TodoCreate } from '../TodoCreate';
import { TodoError } from '../TodoError';

function AppUI() {
    const {addTodo, loading, error, searchTodos, searchValue, completeTodo, editTodo, openEditTodo, deleteTodo, openModal, setOpenModal} = useContext(TodoContext);
    return (
        <React.Fragment>
            <TodoCounter />
            <TodoSearch />
                <TodoList>
                {
                    loading ? (
                        <>
                            <TodoSkeleton />
                            <TodoSkeleton />
                            <TodoSkeleton />
                            <TodoSkeleton />

                        </>
                    )
                    :
                    error ? (
                        <TodoError />
                    ) 
                    : 
                    (!loading && !searchTodos.length && !searchValue) >= 1 ? (
                        <TodoCreate />
                    ) 
                    :
                    searchTodos.map( todo => (
                        <TodoItem 
                        key={todo.text} 
                        text={todo.text} 
                        completed={todo.completed} 
                        onComplete={() => completeTodo(todo.text)}
                        onEdit={() => openEditTodo(todo.text)}
                        onDelete={() => deleteTodo(todo.text)}
                        />
                    )) 
                }
            </TodoList>
                {
                    openModal.adding ?
                        <Modal>
                            <TodoForm
                                type='Add'
                                onSubmit={(event, newTodoValue) => {
                                    event.preventDefault();
                                    addTodo(newTodoValue);
                                    setOpenModal(state => ({...state, adding: false}));
                                }}
                                onCancel={() => {
                                    setOpenModal(state => ({...state, adding: false}));
                                }}
                            />
                        </Modal>
                    : 
                    openModal.editing ?
                        <Modal>
                            <TodoForm
                                type='Edit'
                                onSubmit={(event, newTodoValue) => {
                                    event.preventDefault();
                                    editTodo(newTodoValue);
                                    setOpenModal(state => ({...state, editing: false}));
                                }}
                                onCancel={() => {
                                    setOpenModal(state => ({...state, editing: false}));
                                }}
                                initialInput={openModal.editing}
                            />
                        </Modal>
                    : null
                }
            <TodoButton />
        </React.Fragment>
    );
}

export { AppUI };