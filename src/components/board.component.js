import React from "react";
import Postit from "./postit.component";




function Board(){
  
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
    }
  ]);

  const addBoard = id => {
    const newBoard = [...boards, { id }];
    setTodos(newBoard);
  };

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