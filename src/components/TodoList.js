import React from 'react'

// components
import Todo from './Todo'

const TodoList = ({ todos, setTodos, filteredTodos }) => {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {filteredTodos.map((todo) => (
                    <Todo
                        todos={todos}
                        setTodos={setTodos}
                        text={todo.text}
                        key={todo.id} // 'key' is required when using map() to ensure uniqueness
                        todo={todo}
                    />
                ))}
            </ul>
        </div>
    )
}

export default TodoList;