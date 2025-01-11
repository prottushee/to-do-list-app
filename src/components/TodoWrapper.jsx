import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import EditTodo from "./EditTodo";
import { v4 as uuidv4 } from "uuid";
uuidv4();

const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);
  const addTodo = (task) => {
    setTodos([
      ...todos,
      {
        id: uuidv4(),
        task: task,
        completed: false,
        isEditing: false,
      },
    ]);
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => setTodos(todos.filter((todo) => todo.id !== id));

  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const editTask = (task, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };

  return (
    <div
      className="vh-100 d-flex justify-content-center align-items-center"
      style={{ background: "linear-gradient(135deg, black, brown)" }}
    >
      <div
        className="container py-5 px-3 rounded text-brown"
        style={{ background: "linear-gradient(135deg, beige, brown)", width:"50%" }}
      >
        <h1 className="text-center mb-4">
          <img
            src="to-doIcon.png"
            alt="Todo Icon"
            className="d-inline me-2"
            style={{ width: "30px", height: "30px" }}
          />
          Things To Do!
        </h1>

        <TodoForm addTodo={addTodo} />
        
        <div style={{ background: "transparent", padding: "0" }}>
          <div className="list-group mt-2">
            {todos.map((todo, index) =>
              todo.isEditing ? (
                <div className="list-group-item mb-2 p-0" key={index}>
                  <EditTodo editTodo={editTask} task={todo} />
                </div>
              ) : (
                <div
                  className="list-group-item mb-2 p-0 text-white" 
                  style={{
                    background: "rgb(91, 19, 97)",    
                  }}
                  key={index}
                >
                  <Todo
                    task={todo}
                    toggleTodo={toggleTodo}
                    deleteTodo={deleteTodo}
                    editTodo={editTodo}
                  />
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoWrapper;
