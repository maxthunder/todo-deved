import './App.css';
import React, { useState, useEffect } from 'react';// 'React' is redundant: already auto-imported
import axios from 'axios';

// components
import Form from './components/Form'
import TodoList from './components/TodoList'

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);

  const filterHandler = () => {
    switch(status) {
      case 'completed':
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  }

  useEffect(() => {
    filterHandler();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [todos, status]);

  useEffect(() => {
    axios.get('https://todo-maxthunder-svc.herokuapp.com/tasks')
    .then(response => setTodos(response.data));
  }, []);

  return (
    <div className="App">
      <header>
        <h1>Max Thunder's Todo-List {inputText}</h1>
      </header>
      <Form 
        inputText={inputText} 
        setInputText={setInputText} 
        todos={todos} 
        setTodos={setTodos}
        setStatus={setStatus}
      />
      <TodoList filteredTodos={filteredTodos} todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
