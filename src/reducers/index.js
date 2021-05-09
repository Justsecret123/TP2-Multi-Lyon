const CREATE_BOARD = require("../actions/index").CREATE_BOARD;
const CREATE_POSTIT = require("../actions/index").CREATE_POSTIT;
const DELETE_POSTIT = require("../actions/index").DELETE_POSTIT;
const COMPLETE_TODO = require("../actions/index").COMPLETE_TODO;

const initialState = [
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

function nextBoardId(initialState){
  const maxId = initialState.reduce((maxId, board)=> Math.max(board.id,maxId), -1);
  return maxId;
}



function rootReducer(state = initialState, action) {

  switch (action.type) {
    case CREATE_POSTIT:
      var newPostit = {text: action.text, isCompleted: false }
      var boards = [...state];
      boards[action.index].postits = [...boards[action.index].postits, newPostit];
      // console.log("AFTER DELETE: ", boards);
      return boards; 
    case DELETE_POSTIT:
      var boards = [...state];
      boards[action.board].postits.splice(action.postit,1);
      // console.log("AFTER DELETE: ", boards);
      return boards;
    case CREATE_BOARD:
      var newBoard = { type: "board", id: nextBoardId(initialState), key: nextBoardId(initialState), postits: []};
      return [...state, newBoard];
    case COMPLETE_TODO: 
      var boards = [...state];
      boards[action.board].postits[action.postit].isCompleted = true;
      // console.log("AFTER COMPLETE: ", boards); 
      return boards;
      default:
        return state
    }

  }
  
  export default rootReducer;