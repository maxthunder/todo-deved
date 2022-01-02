import React from 'react'
import Todo from './Todo'

const TodoList = ({ setTodos, filteredTodos }) => {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {filteredTodos.map((todo) => (
                    <Todo
                        todos={filteredTodos}
                        setTodos={setTodos}
                        text={todo.description}
                        key={Math.random().toString(36).substr(2, 9)} // 'key' is required when using map() to ensure uniqueness
                        todo={todo}
                    />

                ))}
            </ul>
        </div>
    )
}

export default TodoList;