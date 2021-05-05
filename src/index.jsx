import React from 'react';
import ReactDOM from 'react-dom';
import CustomAppBar from "./components/custom-appbar.component";
import Board from "./components/board.component";
import {
  HashRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";

const [boards, setBoards] =  React.useState([
  {
    type: "board", 
    id: 1,
    key: 1,
    postits: []
  },
  {
    type: "board", 
    id: 2, 
    key: 2,
    postits: []
  }, 
  {
    type: "board", 
    id: 3, 
    key: 3,
    postits: []
  }
]);

function Index(props){
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <div className="container">
            <CustomAppBar/>
            <Board boards={boards} />
        </div>
        </Route>
        <Route exact path="/:id">
          <div className="container">
            <CustomAppBar/>
            <Child/>
          </div>
        </Route>
      </Switch>
    </Router>
  );
};

function Child(){
  let {id} = useParams();

  return (
    <div>
      <h1>Nous sommes dans le path {id}</h1>
    </div>
  );
}

ReactDOM.render(Index(), document.getElementById('root'));

//Display: none pour les postits aux ID différents de params *:id