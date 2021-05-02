import React from 'react';
import ReactDOM from 'react-dom';
import CustomAppBar from "./components/custom-appbar.component";
import Board from "./components/board.component";



const Index = (props) => {
  return (
    <div className="container">
      <CustomAppBar/>
      <Board />
    </div>
  );
};


ReactDOM.render(<Index />, document.getElementById('root'));

//Récupérer l'ID dans la route 
//Display: none pour les postits aux ID différents de params *:id