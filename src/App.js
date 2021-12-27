import './App.css';
import React, { useState, useEffect } from 'react';// 'React' is redundant: already auto-imported
import { Transition } from 'react-transition-group';

// components
import Form from './components/Form'
import TodoList from './components/TodoList'
import ApiService from './services/ApiService';

  const defaultStyle = {
    transition: `transform 200ms, opacity 200ms ease`,
    opacity: 1
  };

  const transitionStyles = {
    entering: { transform: 'scale(0.5)', opacity: 0 }, 
    entered: { transform: 'scale(2.0)', opacity: 1},
    exiting: { opacity: 0 },
    exited: { opacity: 0 }
  };
  

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [entered, setEntered] = useState(false);

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
      <AComponent in={entered} />
      <button onClick={() => {setEntered(!entered)}}>Toggle Entered</button>
    </div>
  );
}

const AComponent = ({ in: inProp }) => (
  <Transition in={inProp} timeout={{appear: 100, enter: 300, exit: 300}} appear unmountOnExit>
    {state => (
      <div style={{...defaultStyle, ...transitionStyles[state]}}>
        I am {state}
      </div>
    )}
  </Transition>
); 

export default App;
