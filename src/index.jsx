import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header.component';
import Content from './components/content.component';
import CustomAppBar from "./components/custom-appbar.component";
import Postit from "./components/postit.component";
import Board from "./components/board.component";



const Index = () => {
  return (
    <div className="container">
      <CustomAppBar/>
      <Board />
      {/* <Postit /> */}
      {/* <Postit /> */}

      {/* <Header /> */}
      {/* <Content /> */}

    </div>
  );
};


ReactDOM.render(<Index />, document.getElementById('root'));