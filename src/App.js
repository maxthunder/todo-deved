import './App.css';
import React, { useState, useEffect } from 'react';// 'React' is redundant: already auto-imported

// components
import Form from './components/Form'
import TodoList from './components/TodoList'
import ApiService from './services/ApiService';

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);

  const filterHandler = () => {
    switch(status) {
      case 'completed':
        setFilteredTodos(todos.filter((todo) => todo.isCompleted === true));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter((todo) => todo.isCompleted === false));
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
    ApiService.getTodos().then(response => setTodos(response.data));
  }, []);

  return (
    <div className="App">
      <header>
        <h1>Max Thunder's Todo-List</h1>
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