
function nextBoardId(initialState){
    const maxId = initialState.reduce((maxId, board)=> Math.max(board.id,maxId), -1);
    return maxId;
}

const initialState = {
    type: "board", 
    id: 1,
    key: 1,
    postits: []
  };

  function rootReducer(state = initialState, action) {
  switch (action.type) {
    //   case CREATE_POSTIT:
    //       return ...
    //   case DELETE_POSTIT:
    //       return ...
      case CREATE_BOARD:
        var newBoard = { type: "board", id: nextBoardId(initialState), key: nextBoardId(initialState), postits: []};
        return [...initialState, newBoard];
    //   case DELETE_BOARD:
    //       return ...
      default:
          return state
  }
  return state;
  };
  
  export default rootReducer;