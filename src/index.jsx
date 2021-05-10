import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import CustomAppBar from "./components/custom-appbar.component";
import Board from "./components/board.component";
import { HashRouter as Router, Switch,Route } from "react-router-dom";
import store from "./store/index"; 
import { createBoard, createPostit, deletePostit, completeTodo } from "./actions/index"; 
import  { Provider } from "react-redux";

window.store = store;
window.createBoard = createBoard;
window.createPostit = createPostit;
window.deletePostit = deletePostit;
window.completeToto = completeTodo;


let initial = [
  {
    type: "board", 
    id: 1,
    key: 1,
    postits: [
      {
        text: "Je suis le premier Board", 
        isCompleted: false
      }
    ]
  },
  {
    type: "board", 
    id: 2, 
    key: 2,
    postits: [
      {
        text: "Et moi le deuxième :D", 
        isCompleted: false
      }
    ]
  }, 
  {
    type: "board", 
    id: 3, 
    key: 3,
    postits: []
  }
]


function Index(){

  const [boards, setBoards] =  useState(initial);



  const addBoard = () => {
    var boardsList = [...boards];
    let index = boardsList.length +1;
    var newBoard = { type: "board", id: index, key: index, postits: []}

    setBoards(boards => {
      return [...boards, newBoard];
    });

  }

  return (
    <Router>
       <CustomAppBar/>
      <Switch>
        <Route exact path="/">
          <div className="container">
            <Board boards={boards} />
        </div>
        </Route>
        <Route exact path="/:id">
          <div className="container">
            <Board boards={boards} />
          </div>
        </Route>
      </Switch>
    </Router>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <Index/>
    </Provider>
  </React.StrictMode>
, 
document.getElementById('root'));