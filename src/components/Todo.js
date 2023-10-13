import Form from "./Form.js";
import List from "./List.js";

import { useState } from "react";

const Todo = () => {
  const todoList = [
    { id: 1, content: "店を予約する" },
    { id: 2, content: "卵を買う" },
    { id: 3, content: "ごみを出す" }
  ];

  const [todos, setTodos] = useState(todoList);

  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(newTodos);
  };

  const createTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  return (
    <>
      <List todos={todos} deleteTodo={deleteTodo} />
      <Form createTodo={createTodo} />
    </>
  );
};

export default Todo;
