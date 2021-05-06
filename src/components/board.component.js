import React from "react";
import Postit from "./postit.component";
import { useParams, withRouter } from "react-router-dom";


function Board(props){

  console.log(props); //Test

  let boards = props.boards;
  let {id} = useParams();

  return (
    <div className="container-fluid">
        {
          //Utilisation de match ? 
          boards.map((board, index) => (
          <div className="board" key={index}>
            <Postit/>
            </div>
          ))
        }
    </div>
    
  )

}

export default withRouter(Board); 

//Il faut envelopper le Board avec WithRouter
//Paramètre du composant : props
//exporter les proptypes et boardtypes du composant