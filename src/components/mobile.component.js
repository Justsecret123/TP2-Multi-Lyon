import React from "react";
import { useParams, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Button from '@material-ui/core/Button';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import MobilePostit from "./mobile-postit.component";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import "../../src/Mobile.css";
import { useHistory } from 'react-router-dom';

const mapStateToProps = (state) => {
    return ({ boards: state });
}

const mapDispatchToProps = (dispatch) => {
    return {
        createBoard: () => dispatch({ type: "CREATE_BOARD"}), 
        setBoard: (currentId) => dispatch({ type: "SET_BOARD", hash: currentId })
    }
}

function Mobile(props){
    
    const history = useHistory();    

    let boards = props.boards;
    var {id} = useParams();

    const currentBoard = id == null || id == undefined ? 1:id;

    const moveForward = (currentBoard) => {
        if(currentBoard < props.boards.length ){
            history.push("/"+(parseInt(currentBoard)+1));
            props.setBoard("#"+(parseInt(currentBoard)+1));
            props.location.pathname = props.currentBoard;
        }
    };

    const moveBackWards = (currentBoard) => {
        if(currentBoard > 1){
            history.push("/"+(parseInt(currentBoard)-1));
            props.setBoard("#"+(parseInt(currentBoard)-1));
            props.location.pathname = props.currentBoard;
        }
    }

    window.addEventListener("popstate", () => {
        // `setBoard` is an action creator that takes
        // the hash of the url and pushes to the store it.
      
        // TODO add parsing and checks on the location.hash
        // to make sure it is a proper board index.
        let boardIndex = window.location.hash == undefined ? "#/":window.location.hash;
        props.setBoard(boardIndex);
    });

    return (
        <div>
        <Button color="inherit"> 
            <AddCircleIcon style={{color: "rgb(0, 110, 255)"}} onClick={props.createBoard}/> 
        </Button>
            <div className="container-fluid">
                {
                    id == null || id == undefined ? 
                    <div className="board" key={0}>
                        <MobilePostit board={1} postits = {boards[0].postits} />
                    </div>
                    :
                    <div className = "board" key={id}>
                        <MobilePostit board={id} postits = {boards[id-1].postits}/> 
                    </div>
                }
            </div>
            <div className="navigation-buttons">
                <ArrowBackIcon color="secondary" onClick={()=> {moveBackWards(currentBoard)}}/>
                ...
                <ArrowForwardIcon color="secondary" onClick={()=> {moveForward(currentBoard)}}/>
            </div>
        </div>
    )
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Mobile));