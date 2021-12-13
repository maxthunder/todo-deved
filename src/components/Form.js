import React from 'react'
import ApiService from '../services/ApiService';

const Form = ({ inputText, setInputText, todos, setTodos, setStatus }) => {
    const inputTextHandler = (event) => {
        setInputText(event.target.value)
    };
    const submitTodoHandler = (event) => {
        event.preventDefault();
        if (inputText !== '') {
            const newTodo = { description: inputText, isCompleted: false };
            ApiService.addTodo(newTodo)
                .then(response => {
                    ApiService.getTodos()// TODO : update golang svc to return added task instead of msg.
                        .then(response => setTodos(response.data))
                    setInputText("")
                })
        }
    }
    const statusHandler = (event) => {
            setStatus(event.target.value);
    }
    return (
        <form>
            <input
                value={inputText} 
                onChange={inputTextHandler} 
                type="text" 
                className="todo-input" />
            <button onClick={submitTodoHandler} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select onChange={statusHandler} name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    )
}

export default Form;