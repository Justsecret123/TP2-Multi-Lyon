import { createStore, applyMiddleware } from "redux";
import { createStateSyncMiddleware, initMessageListener } from "redux-state-sync";
import rootReducer from "../reducers/index";

const initialState = [
    {
        type: "board", 
        id: 1,
        key: 1,
        postits: [
          {
            text: "Je suis le premier", 
            isCompleted: false
          }
        ]
      },
      {
        type: "board", 
        id: 2, 
        key: 2,
        postits: [
          {
            text: "Et moi le deuxième :D", 
            isCompleted: false
          }
        ]
      }, 
      {
        type: "board", 
        id: 3, 
        key: 3,
        postits: []
      }
    ]

const reduxStateConfig = {
    blacklist: ["persist/PERSIST", "persist/REHYDRATE"]
};

const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(createStateSyncMiddleware(reduxStateConfig)),
    window.REDUX_DEVTOOLS_EXTENSION && window.REDUX_DEVTOOLS_EXTENSION()
);

initMessageListener(store);

export default store;