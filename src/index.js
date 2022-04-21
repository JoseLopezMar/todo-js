import './styles.css';
import {Todo, TodoList} from './classes';
import { craerTodoHtml } from './js/componentes';

export const todoList = new TodoList();

todoList.todos.forEach(craerTodoHtml);

console.log(todoList.todos);
