import { useEventCallback } from "@material-ui/core";
import React from "react";
import Postit from "./postit.component";
import Button from '@material-ui/core/Button';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function Board(props){
  
  const [boards, setBoards] =  React.useState([
    {
      type: "board", 
      id: 1,
      key: 1,
      postits: []
    },
    {
      type: "board", 
      id: 2, 
      key: 2,
      postits: []
    }, 
    {
      type: "board", 
      id: 3, 
      key: 3,
      postits: []
    }
  ]);
  console.log(boards);

  const addBoard = () => {
    var boardsList = [...boards];
    let index = boardsList.length +1;
    var newBoard = { type: "board", id: index, key: index, postits: []}
    setBoards(boards => {
      var j = [...boards, newBoard];
      console.log(j);
      return j;
    });
  }

  return (
    <div className="container-fluid">
      <Button color="inherit" onClick={addBoard}> 
      <AddCircleIcon style={{color: "white"}}/> 
      </Button>
      <br></br>
      <Router>
        <Route path="/">
            {
              boards.map((board, index) => (
                <div className="board" key={index}>
                  <Postit/>
                </div>
              ))
            }
        </Route>
        <Switch>
          <Route
            path="/:id"
            render={(routeProps) => <Board boards={boards} match={routeProps.match} />}
          />
        </Switch>
      </Router>

    </div>

  
  )

}

export default Board;