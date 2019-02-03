import LocalStorageService from './utils/LocalStorageService';

export const addTodo = (todo) => {
  const todos = LocalStorageService.getItem('todos') || [];
  const newTodo = { ...todo, id: ((todos[todos.length - 1] || { id: 0 }).id + 1) };

  todos.push(newTodo);

  LocalStorageService.addItem('todos', todos);

  return newTodo;
};

export const removeTodo = (todoId) => {
  let todos = LocalStorageService.getItem('todos') || [];

  todos = todos.filter(t => t.id !== todoId);

  LocalStorageService.addItem('todos', todos);

  return todos;
};

export const completeTodo = (todoId) => {
  const todos = LocalStorageService.getItem('todos') || [];

  const todo = todos.find(t => t.id === todoId);
  todo.status = 'completed';

  LocalStorageService.addItem('todos', todos);

  return todos;
};
