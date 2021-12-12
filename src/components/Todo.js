const Todo = ({todos, setTodos, text, todo}) => {
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.taskId !== todo.taskId))// all todos except 'this' one
  }
  const completeHandler = () => {
    setTodos(todos.map((item) => {
        if (item.taskId === todo.taskId) {
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
      <li className={`todo-item ${todo.isCompleted ? 'completed' : ''}`}>{text}</li>
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