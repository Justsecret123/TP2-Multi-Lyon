import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import CustomAppBar from "./components/custom-appbar.component";
import Board from "./components/board.component";
import { HashRouter as Router, Switch,Route } from "react-router-dom";
import Button from '@material-ui/core/Button';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import store from "./store/index"; 
import { createBoard, createPostit, deletePostit } from "./actions/index"; 

window.store = store;
window.createBoard = createBoard;
window.createPostit = createPostit;
window.deletePostit = deletePostit;


let initial = [
  {
    type: "board", 
    id: 1,
    key: 1,
    postits: [
      {
        text: "Je suis le premier Board", 
        isCompleted: false
      }
    ]
  },
  {
    type: "board", 
    id: 2, 
    key: 2,
    postits: [
      {
        text: "Et moi le deuxième :D", 
        isCompleted: false
      }
    ]
  }, 
  {
    type: "board", 
    id: 3, 
    key: 3,
    postits: []
  }
]


function Index(){

  const [boards, setBoards] =  useState(initial);



  const addBoard = () => {
    var boardsList = [...boards];
    let index = boardsList.length +1;
    var newBoard = { type: "board", id: index, key: index, postits: []}

    setBoards(boards => {
      return [...boards, newBoard];
    });

  }

  return (
    <Router>
       <CustomAppBar/>
        <Button color="inherit" onClick={addBoard}> 
          <AddCircleIcon style={{color: "white"}}/> 
        </Button>
      <Switch>
        <Route exact path="/">
          <div className="container">
            <Board boards={boards} />
        </div>
        </Route>
        <Route exact path="/:id">
          <div className="container">
            <Board boards={boards} />
          </div>
        </Route>
      </Switch>
    </Router>
  );
};

ReactDOM.render(<Index/>, document.getElementById('root'));
