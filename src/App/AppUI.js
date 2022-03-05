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
    const {loading, error, searchTodos, searchValue, completeTodo, deleteTodo, openModal} = useContext(TodoContext);
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
                        onDelete={() => deleteTodo(todo.text)}
                        />
                    )) 
                }
            </TodoList>
                {
                    openModal &&
                        <Modal>
                            <TodoForm />
                        </Modal>
                }
            <TodoButton />
        </React.Fragment>
    );
}

export { AppUI };