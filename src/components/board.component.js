import React, { useEffect, useState } from "react";
import Postit from "./postit.component";
import { useParams, withRouter, Link } from "react-router-dom";


let initialState = [
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
]

function Board(props){

  const [todos, setTodos] = useState(initialState);

  // console.log(props); //Test

  let boards = props.boards;
  let {id} = useParams();

  useEffect(()=>{
    console.log("Board modifié !");
  },[todos]);
  

  return (
    <div className="container-fluid">
        {
          id == null || id == undefined ?
          //Utilisation de match ?
          boards.map((board, index) => (
          <div className="board" key={index}>
            {/* <Link to ={"/"+board.id} target="_blank">Goto</Link> */}
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

//Il faut envelopper le Board avec WithRouter
//Paramètre du composant : props
//exporter les proptypes et boardtypes du composant