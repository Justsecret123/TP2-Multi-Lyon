export const CREATE_BOARD = "CREATE_BOARD";
export const CREATE_POSTIT = "CREATE_POSTIT";
export const DELETE_BOARD = "DELETE_BOARD";
export const DELETE_POSTIT = "DELETE_POSTIT";
export const COMPLETE_TODO = "COMPLETE_TODO";
export const SET_BOARD = "SET_BOARD";


export function createBoard(payload){
    return { type: CREATE_BOARD, payload};
}

export function createPostit(id, text, payload){
    return { type: CREATE_POSTIT, index: id, text: text, payload};
}

export function deleteBoard(payload){
    return { type: DELETE_BOARD, payload};
}

export function deletePostit(boardId, postitId, payload){
    return { type: DELETE_POSTIT, board: boardId, postit: postitId, payload};
}

export function completeTodo(boardId, postitId, payload){
    return { type : COMPLETE_TODO, board: boardId, postit: postitId, payload};
}

export function setBoard(boardIndex, payload){
    return { type: SET_BOARD, hash: boardIndex, payload };
}