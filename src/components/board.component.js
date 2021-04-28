import React from "react";
const {Todo, TodoForm} = require ("./postit.component");


function Board() { // Isn't it a board itself ? 
  const [todos, setTodos] = React.useState([
    {
        text: "Learn about Ibrahim Serouis",
        isCompleted: false
    },
    {
        text: "Meet Ibrahim Serouis for lunch",
        isCompleted: false
    },
    {
        text: "Build really cool Ibrahim Serouis app",
        isCompleted: false
    }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default Board;