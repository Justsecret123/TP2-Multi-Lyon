import React from "react";
import Postit from "./postit.component";
import { useParams, withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import Button from '@material-ui/core/Button';
import AddCircleIcon from '@material-ui/icons/AddCircle';

const mapStateToProps = (state) => {
  console.log(state);
  return ({ boards: state });
}

const mapDispatchToProps = (dispatch) => {
  return {
    createBoard: () => dispatch({ type: "CREATE_BOARD"})
  }
}

function Board(props){

  let boards = props.boards;
  console.log("Props: ", props);
  let {id} = useParams();
  
  return (
    <div className="container-fluid">
      <Button color="inherit"> 
        <AddCircleIcon style={{color: "rgb(0, 110, 255)"}} onClick={props.createBoard}/> 
      </Button>
        {
          id == null || id == undefined ?
          boards.map((board, index) => (
          <div className="board" key={index}>
            <Link to = {"/"+board.id} target="_blank">Go to</Link>
            <Postit postits = {board.postits}/>
            </div>
          )):
          boards.map((board, index) => (
            board.id == id ? 
            <div className="board" key={index}>
              <Postit postits = {board.postits} />
            </div>
            : ""
          ))
        }
    </div>
    
  )

}

export default connect(mapStateToProps, mapDispatchToProps)(Board);