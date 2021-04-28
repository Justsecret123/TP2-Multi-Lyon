import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header.component';
import Content from './components/content.component';
import CustomAppBar from "./components/custom-appbar.component";
import Postit from "./components/postit.component";
import Board from "./components/board.component";



function App() {

  const [boards, setBoards] = React.useState([
    {
      type: "board",
      id: "1",
      title: "TIW 8",
      notes: "",
      postits:[
        {
          type: "postit",
          board: "1",
          title: "TP 1",
          text: "Le TP porte sur des rappels de developpement Web",
          visible: false,
          color: "#CCC",
        },
        {
          type: "postit",
          board: "1",
          title: "TP 2",
          text: "Le TP porte sur la creation d'un outil de presentation HTML",
          visible: true,
          color: "#00E",
        },
        {
          type: "postit",
          board: "1",
          title: "TP 3",
          text: "Le TP 3",
          visible: true,
          color: "#00E",
        },
        {
          type: "postit",
          board: "1",
          title: "TP 4",
          text: "Le TP 4",
          visible: true,
          color: "#0E0",
        },
      ]},
    {
      type: "board",
      board: "2",
      title: "Courses",
      notes: "",
      postits: [],
    }
  ])


  return (
    <div className="container">
      <CustomAppBar/>
      <Board board={boards} />
      {/* <Postit /> */}
      {/* <Postit /> */}

      {/* <Header /> */}
      {/* <Content /> */}

    </div>
  );
}


ReactDOM.render(<App />, document.getElementById('root'));