import React, { useEffect, useState } from "react";
import "/src/App.css";
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import CloseIcon from '@material-ui/icons/Close';
import { connect } from "react-redux";
import { withRouter } from "react-router";

const mapStateToProps = (state, ownProps) => {
    return ({boards: state, props: ownProps });
}

const mapDispatchToProps = (dispatch) => {
    return {
        completeTodo: (boardId, postitId) => dispatch({ type: "COMPLETE_TODO", board: boardId, postit: postitId}), 
        deleteTodo: () => dispatch({type: "DELETE_TODO"}), 
        deletePostit: (boardId, postitId) => dispatch({type: "DELETE_POSTIT", board: boardId, postit: postitId}),
        createPostit: (id, text) => dispatch({type: "CREATE_POSTIT", index: id, text: text})
      }
}

function Todo({ todo, index, completeTodo, removeTodo  }) {
  return (
    <div
      className="todo"
    >
      <p style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}>{todo.text}</p>
      <div>
        <button onClick={() => completeTodo(index)}>Complete <AssignmentTurnedInIcon fontSize="small"/> </button>
        <button onClick={() => removeTodo(index)}> <CloseIcon fontSize="small"/> </button>
      </div>
    </div>
  );
};

function TodoForm({ addTodo }) {

    const [value, setValue] = useState("");

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

function MobilePostit(props) {

    const [todos, setTodos] = useState(props.postits);

    const addTodo = text => {
        const newTodos = [...todos, { text }];
        props.createPostit(id-1,text);
        setTodos(newTodos);
    };

    const completeTodo = index => {
        const newTodos = [...todos];
        props.completeTodo(id-1, index);
        newTodos[index].isCompleted = true;
        setTodos(newTodos);
    };

    const removeTodo = index => {
        const newTodos = [...todos];
        props.deletePostit(id-1,index);
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };

    return (
        <div className="app">
            <div className="todo-list">
            {   todos.map((todo, index) => (
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MobilePostit));