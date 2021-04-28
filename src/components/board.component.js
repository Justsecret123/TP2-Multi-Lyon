import { useEventCallback } from "@material-ui/core";
import React from "react";
import Postit from "./postit.component";




function Board(props){
  
  const [boards, setBoards] =  React.useState([
    {
      type: "board", 
      id: 1,
      postits: []
    },
    {
      type: "board", 
      id: 2, 
      postits: []
    }, 
    {
      type: "board", 
      id: 3, 
      postits: []
    }
  ]);

  const addBoard = id => {
    const newBoard = [...boards, { id }];
    setTodos(newBoard);
  };

  // useEffect(()=>{
  //   function handleBoardsChange(){

  //   }
  // });

  return (
    <div className="container-fluid">
      {boards.map((board, index) => (
        <div className="board">
          <Postit/>
        </div>
      ))}
    </div>
  )

}

export default Board;