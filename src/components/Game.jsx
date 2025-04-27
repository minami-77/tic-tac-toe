import { useState } from "react";
import Board from "./Board";

const Game = () => {
    // Set empty array "history" to keep track of history
    const [history, setHistory] = useState([Array(9).fill(null)]);

    // Set variable "currentMove" to count the ith move
    const [currentMove, setCurrentMove] = useState(0);

    // Set variable "xIsNext" to see next player (even -> X's turn :odd -> O)
    const xIsNext = currentMove % 2 === 0;

    // Set variable "currentSquares" to get current state and store it in history[currentMove]
    const currentSquares =history[currentMove];

    // Restart-button or History-button

    // Define function set currentMove to use later
    function jumpTo(nextMove){
      //currentMove = nextMove
      setCurrentMove(nextMove);
    }
    // JS: array.map((element, index) => {}), this time only use index(move)/
    const moves = history.map((squares, move)=>{
      // button's description
      let description;
      if (move > 0) {
        description = 'Go to move #' + move;
      } else {
        description = 'Go to game start';
      }
      // if button clicked, jump to ith move
      return(
        <li key={move}>
          {/* call jumpTo function with ith index(move) */}
          <button onClick={()=>jumpTo(move)}>{description}</button>
        </li>
      );
    });

    // Define function to call later in BoardComponent (will be passed as props: onPlay = handlePlay)//
    function handlePlay(nextSquares) {
      // copy the status history from start to current + new states
      const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
      // set history until current move
      setHistory(nextHistory);
      //set count of current move
      setCurrentMove(nextHistory.length - 1);
    }

  // RETURN
  return (
    // <div>
      <div className="game">
        <h1>Tic-Tac-Toe</h1>
        <div className="container">
          <div className="game-board">
            {/* pass arguments to BoardComponent*/}
            {/* next player=xIsNext, square's state(O/X)=currentSquares*/}
            {/* call handlePlay function as props of onPlay (to get history and count of ith move)*/}
            <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay}/>
          </div>
          <div className="game-info">
            <ol>{moves}</ol>
          </div>
        </div>
      </div>
    // </div>
  );
};

export default Game;
