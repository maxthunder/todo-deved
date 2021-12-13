import ApiService from "../services/ApiService";

const Todo = ({todos, setTodos, text, todo}) => {
  const deleteHandler = () => {
    const deleteThisTodo = todos.filter((el) => el.taskId === todo.taskId)[0];
    console.log(deleteThisTodo.taskId)
    ApiService.deleteTodo(deleteThisTodo.taskId).then(response => {
      setTodos(todos.filter((el) => el.taskId !== todo.taskId))// use all todos except 'this' one
      console.log("Todo '" + deleteThisTodo.description + "' deleted.")
    })
  }
  const completeHandler = () => {
    setTodos(todos.map((item) => {
        if (item.taskId === todo.taskId) {
            return {
                ...item, //carry over existing properties of 'item'
                isCompleted: true // update 'isCompleted' property
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