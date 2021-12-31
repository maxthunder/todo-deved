import React from 'react'
import Todo from './Todo'

// const TASK_PATH = 'https://todo-maxthunder-svc.herokuapp.com/tasks';

const TodoList = ({ todos, setTodos, filteredTodos }) => {
    // const uncompletedTodos = todos.filter((todo) => !todo.isCompleted)
    // const completedTodos = todos.filter((todo) => todo.isCompleted)

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
        // <div className="todo-container">
        //     <ul className="todo-list">
        //         {uncompletedTodos.map((todo) => (
        //             <Todo
        //                 todos={todos}
        //                 setTodos={setTodos}
        //                 text={todo.description}
        //                 key={Math.random().toString(36).substr(2, 9)} // 'key' is required when using map() to ensure uniqueness
        //                 todo={todo}
        //             />
        //         ))}
        //     </ul>
        //     <br/>
        //     <div>- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - </div>
        //     <ul className="todo-list">
        //         {completedTodos.map((todo) => (
        //             <Todo
        //                 todos={todos}
        //                 setTodos={setTodos}
        //                 text={todo.description}
        //                 key={Math.random().toString(36).substr(2, 9)} // 'key' is required when using map() to ensure uniqueness
        //                 todo={todo}
        //             />
        //         ))}
        //     </ul>
        // </div>
    )
}

export default TodoList;