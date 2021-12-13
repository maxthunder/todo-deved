import axios from "axios";

const TASK_PATH = 'https://todo-maxthunder-svc.herokuapp.com/tasks';

const ApiService = {}

ApiService.getTodos = () => {
  return axios.get(TASK_PATH);
}

ApiService.addTodo = (newTodo) => {
  return axios.post(TASK_PATH, newTodo)
}

ApiService.deleteTodo = (taskId) => {
  return axios.delete(TASK_PATH + '?taskId=' + taskId)
}

export default ApiService;