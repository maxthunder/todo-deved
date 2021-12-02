const Todo = ({todos, setTodos, text, todo}) => {
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id))// all todos except 'this' one
  }
  const completeHandler = () => {
    setTodos(todos.map((item) => {
        if (item.id === todo.id) {
            return {
                ...item, //carry over existing properties of 'item'
                completed: true // update 'completed' property
            }
        }
        return item;// return each other item

    }));
  }
  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>{text}</li>
      <button onClick={completeHandler} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={deleteHandler} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
}

export default Todo;