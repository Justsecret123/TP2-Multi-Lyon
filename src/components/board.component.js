import React from "react";
import Postit from "./postit.component";
import { useParams, withRouter, Link } from "react-router-dom";

function Board(props){

  let boards = props.boards;
  let {id} = useParams();
  
  return (
    <div className="container-fluid">
        {
          id == null || id == undefined ?
          boards.map((board, index) => (
          <div className="board" key={index}>
            <Link to = {"/"+board.id} target="_blank">Go to</Link>
            <Postit postits = {board.postits}/>
            </div>
          )):
          boards.map((board, index) => (
            board.id == id ? 
            <div className="board" key={index}>
              <Postit postits = {board.postits} />
            </div>
            : ""
          ))
        }
    </div>
    
  )

}

export default withRouter(Board); 