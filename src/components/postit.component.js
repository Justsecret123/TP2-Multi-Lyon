import React, { useEffect, useState } from "react";
import { withRouter } from "react-router";
import "/src/App.css";
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import CloseIcon from '@material-ui/icons/Close';

const mapStateToProps = (state) => {
  console.log(state);
  return ({ boards: state });
}

function Todo({ todo, index, completeTodo, removeTodo  }) {
  return (
    <div
      className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      {todo.text}
      <div>
        <button onClick={() => completeTodo(index)}>Complete <AssignmentTurnedInIcon fontSize="small"/> </button>
        <button onClick={() => removeTodo(index)}> <CloseIcon fontSize="small"/> </button>
      </div>
    </div>
  );
};

function TodoForm({ addTodo }) {

    const [value, setValue] = useState("");

    useEffect(()=>{
    },[value]);

    const handleSubmit = e => {
      e.preventDefault();
      if (!value) return;
      addTodo(value);
      setValue("");
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="input"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
      </form>
    );
  }

function Postit(props) {

  const [todos, setTodos] = useState(props.postits);

  useEffect(()=>{
    setTodos(props.postits);
  },[props.postits]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default withRouter(Postit);